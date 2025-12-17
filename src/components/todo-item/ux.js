import { exampleList } from "../../data.js";
import { renderEditTodoForm } from "./ui.js"; 
import { updateTodoList } from "../todo-list/index.js";
import { renderAddTodoButton } from "../todo-list/ui.js";

function toggleDoneHandler(event) {
  const uuid = event.target.closest(".todo-item").dataset.uuid; 
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
  todoEditForm.setAttribute("data-uuid", uuid); 
  
  // Populate the form with todo item info
  const data = exampleList.getAllItems().find(item => item.uuid === uuid); 
  todoEditForm.querySelector("#title").value = data.title; 
  todoEditForm.querySelector("#description").value = data.description; 
  if (!isNaN(data.dueDate)) {
    todoEditForm.querySelector("#due-date").value = data.dueDate.toISOString().split("T")[0]; 
  }; 
  if (!(data.priority === null)) {
    todoEditForm.querySelector("#priority").value = data.priority; 
  }

  todoItem.after(todoEditForm); 

  // Remove the todo item div for overriding effect
  todoItem.remove(); 
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

function saveButtonHandler(event) {
  event.preventDefault(); 

  let uuid = event.target.closest(".todo-form.edit").dataset.uuid; 
  const todoItem = exampleList.getAllItems().find(item => item.uuid === uuid); 

  const todoForm = document.querySelector(".todo-form.edit"); 
  const formData = new FormData(todoForm); 

  const title = formData.get("title"); 
  const description = formData.get("description"); 
  const dueDate = new Date(formData.get("due-date")); 
  const priority = +formData.get("priority"); 

  todoItem.setTitle(title); 
  todoItem.setDescription(description); 
  todoItem.setDueDate(dueDate); 
  todoItem.setPriority(priority); 

  updateTodoList(exampleList); 
}

function deleteHandler(event) {
  const uuid = event.target.closest(".todo-item").dataset.uuid;
  exampleList.deleteItem(uuid); 
  updateTodoList(exampleList); 
}

function detailViewHandler(event) {
  const uuid = event.target.closest(".todo-item").dataset.uuid;
}

export { 
  toggleDoneHandler, 
  editHandler, 
  cancelButtonHandler, 
  saveButtonHandler, 
  deleteHandler, 
  detailViewHandler, 
}; 