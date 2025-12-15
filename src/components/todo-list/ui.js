import { renderTodoItem } from "../todo-item/ui";
import { cancelHandler } from "./ux.js"; 
import "./style.css"; 

function renderTodoList(todoList) {
  const listDiv = document.querySelector(".todo-list"); 
  listDiv.textContent = ""; 

  const listItems = todoList.getAllItems(); 
  listItems.forEach(item => {
    const itemDiv = renderTodoItem(item); 
    listDiv.appendChild(itemDiv); 
  }); 

  renderAddTodoButton(); 
}

function renderAddTodoButton() {
  const listDiv = document.querySelector(".todo-list")

  const addTodoButton = document.createElement("button"); 
  addTodoButton.classList.add("add-todo-button"); 
  addTodoButton.textContent = "Add Todo"; 
  addTodoButton.addEventListener("click", renderAddTodoForm); 
  
  listDiv.appendChild(addTodoButton); 
}

function renderAddTodoForm() {
  const addTodoButton = document.querySelector(".add-todo-button"); 
  addTodoButton.remove(); 

  const listDiv = document.querySelector(".todo-list"); 

  // Render the form container
  const addTodoForm = document.createElement("form"); 
  addTodoForm.classList.add("add-todo-form"); 

  // Render the todo title label field
  const titleLabel = document.createElement("label"); 
  titleLabel.setAttribute("for", "title"); 
  titleLabel.textContent = "Todo Title: "; 
  addTodoForm.appendChild(titleLabel); 

  // Render the todo title input field
  const titleInput = document.createElement("input"); 
  titleInput.setAttribute("type", "text"); 
  titleInput.setAttribute("name", "title"); 
  titleInput.setAttribute("id", "title"); 
  addTodoForm.appendChild(titleInput); 

  // Render the todo description label field
  const descriptionLabel = document.createElement("label"); 
  descriptionLabel.setAttribute("for", "description"); 
  descriptionLabel.textContent = "Todo Description: "; 
  addTodoForm.appendChild(descriptionLabel); 

  // Render the todo title input field
  const descriptionInput = document.createElement("input"); 
  descriptionInput.setAttribute("type", "text"); 
  descriptionInput.setAttribute("name", "description"); 
  descriptionInput.setAttribute("id", "description"); 
  addTodoForm.appendChild(descriptionInput); 

  const cancelButton = document.createElement("button"); 
  cancelButton.classList.add("cancel"); 
  cancelButton.textContent = "Cancel"; 
  cancelButton.addEventListener("click", cancelHandler); 
  addTodoForm.appendChild(cancelButton); 

  listDiv.appendChild(addTodoForm); 
}

export { 
  renderTodoList, 
  renderAddTodoButton, 
 }; 