import { 
  renderTodoItem, 
  renderTodoForm, 
} from "../todo-item/ui";

import { 
  addTodoHandler, 
  cancelButtonHandler, 
  saveButtonHandler
} from "./ux.js"; 
import "./style.css"; 

function renderTodoList(todoList) {
  const listDiv = document.createElement("div"); 
  listDiv.classList.add("todo-list"); 

  const listItems = todoList.getAllItems(); 
  listItems.forEach(item => {
    const itemDiv = renderTodoItem(item); 
    listDiv.appendChild(itemDiv); 
  }); 

  return listDiv; 
}

function renderAddTodoButton() {
  const addTodoButton = document.createElement("button"); 
  addTodoButton.classList.add("add-todo-button"); 
  addTodoButton.textContent = "Add Todo"; 
  addTodoButton.addEventListener("click", addTodoHandler); 
  
  return addTodoButton; 
}

function renderAddTodoForm() {
  const addTodoForm = renderTodoForm(); 
  addTodoForm.classList.add("add-item"); 

  // Add cancel button event handler
  const cancelButton = addTodoForm.querySelector(".cancel"); 
  cancelButton.addEventListener("click", cancelButtonHandler); 

  // Add save button event handler
  const saveButton = addTodoForm.querySelector(".save"); 
  saveButton.addEventListener("click", saveButtonHandler); 

  return addTodoForm; 
}

export { 
  renderTodoList, 
  renderAddTodoButton, 
  renderAddTodoForm
 }; 