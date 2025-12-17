import { exampleList } from "../../data.js";
import { renderEditTodoForm } from "./ui.js"; 
import { updateTodoList } from "../todo-list/index.js";
import { renderAddTodoButton } from "../todo-list/ui.js";

function toggleDoneHandler(event) {
  const uuid = event.target.parentElement.dataset.uuid; 
  const item = exampleList.getItem(uuid); 
  item.toggleDone(); 

  updateTodoList(exampleList); 
}

function editHandler(event) {
  let todoItem = event.target.closest(".todo-item"); 
  const uuid = todoItem.dataset.uuid;
  updateTodoList(exampleList); 
  todoItem = document.querySelector(`[data-uuid="${uuid}"]`); 

  // Remove existing form if any
  const existingForm = document.querySelector(".todo-form"); 
  if (existingForm) {
    if (existingForm.classList.contains("add-item")) {
      const body = document.querySelector("body"); 
      const addTodoButton = renderAddTodoButton(); 
      body.appendChild(addTodoButton); 
    }
    existingForm.remove(); 
  }
  
  // Render new edit form
  const todoEditForm = renderEditTodoForm(); 
  todoItem.after(todoEditForm); 

  // Remove the todo item div for overriding effect
  todoItem.remove(); 
}

function deleteHandler(event) {
  const uuid = event.target.closest(".todo-item").dataset.uuid;
  exampleList.deleteItem(uuid); 
  updateTodoList(exampleList); 
}

function cancelButtonHandler(event) {
  event.preventDefault(); 
  const addTodoForm = document.querySelector(".todo-form"); 
  if (addTodoForm.classList.contains("add")) {
    const body = document.querySelector("body"); 
    const addTodoButton = renderAddTodoButton(); 
    body.appendChild(addTodoButton); 
  }
  addTodoForm.remove(); 

  updateTodoList(exampleList); 
}

function detailViewHandler(event) {
  const uuid = event.target.closest(".todo-item").dataset.uuid;
}

export { 
  editHandler, 
  cancelButtonHandler, 
  toggleDoneHandler, 
  deleteHandler, 
  detailViewHandler, 
}; 