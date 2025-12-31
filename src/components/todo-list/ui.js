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
import plusIcon from "./img/plus.svg"; 

function renderTodoList(todoList) {
  const listDiv = document.createElement("div"); 
  listDiv.classList.add("todo-list"); 

  const incompleteDiv = document.createElement("div"); 
  incompleteDiv.classList.add("incomplete"); 

  const completeDiv = document.createElement("div"); 
  completeDiv.classList.add("complete"); 

  const listItems = todoList.getAllItems(); 
  listItems.forEach(item => {
    const itemDiv = renderTodoItem(item); 
    if (!item.done){
      incompleteDiv.appendChild(itemDiv); 
    } else {
      completeDiv.appendChild(itemDiv); 
    }; 
  }); 

  listDiv.appendChild(incompleteDiv); 
  listDiv.appendChild(completeDiv); 

  return listDiv; 
}

function renderAddTodoButton() {
  const addTodoButton = document.createElement("button"); 
  addTodoButton.classList.add("add-todo-button"); 
  
  const plusIconSpan = document.createElement("span"); 
  plusIconSpan.classList.add("plus-icon"); 
  plusIconSpan.setAttribute("aria-hidden", "true"); 

  const plusIconImg = document.createElement("img"); 
  plusIconImg.src = plusIcon; 
  plusIconImg.alt = "Add Todo"; 
  plusIconSpan.appendChild(plusIconImg); 
  
  addTodoButton.appendChild(plusIconSpan); 

  const addTodoText = document.createTextNode("Add Todo"); 
  addTodoButton.appendChild(addTodoText); 
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