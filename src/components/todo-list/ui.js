import { renderTodoItem } from "../todo-item/ui";
import { 
  cancelButtonHandler, 
  saveButtonHandler
} from "./ux.js"; 
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

  // Render the todo description input field
  const descriptionInput = document.createElement("input"); 
  descriptionInput.setAttribute("type", "text"); 
  descriptionInput.setAttribute("name", "description"); 
  descriptionInput.setAttribute("id", "description"); 
  addTodoForm.appendChild(descriptionInput); 

  // Render the label for due date selector
  const dueDateLabel = document.createElement("label"); 
  dueDateLabel.setAttribute("for", "due-date"); 
  dueDateLabel.textContent = "Due Date: "; 
  addTodoForm.appendChild(dueDateLabel); 

  // Render the due date selector itself
  const dueDateInput = document.createElement("input"); 
  dueDateInput.setAttribute("type", "date"); 
  dueDateInput.setAttribute("name", "due-date"); 
  dueDateInput.setAttribute("id", "due-date"); 
  addTodoForm.appendChild(dueDateInput); 

  // Render the label for priority setter
  const priorityLabel = document.createElement("label"); 
  priorityLabel.setAttribute("for", "priority"); 
  priorityLabel.textContent = "Priority: "; 
  addTodoForm.appendChild(priorityLabel); 

  // Render the priority setter itself
  const priorityInput = document.createElement("select"); 
  priorityInput.setAttribute("name", "priority"); 
  priorityInput.setAttribute("id", "priority"); 

  const noPriority = document.createElement("option"); 
  noPriority.setAttribute("value", "")
  noPriority.textContent = "--Select a priority level--"; 
  priorityInput.appendChild(noPriority); 

  const lowPriority = document.createElement("option"); 
  lowPriority.setAttribute("value", "2")
  lowPriority.textContent = "Low"; 
  priorityInput.appendChild(lowPriority); 

  const mediumPriority = document.createElement("option"); 
  mediumPriority.setAttribute("value", "1")
  mediumPriority.textContent = "Medium"; 
  priorityInput.appendChild(mediumPriority); 

  const highPriority = document.createElement("option"); 
  highPriority.setAttribute("value", "0")
  highPriority.textContent = "High"; 
  priorityInput.appendChild(highPriority); 

  addTodoForm.appendChild(priorityInput); 

  // Render the cancel button
  const cancelButton = document.createElement("button"); 
  cancelButton.classList.add("cancel"); 
  cancelButton.textContent = "Cancel"; 
  cancelButton.addEventListener("click", cancelButtonHandler); 
  addTodoForm.appendChild(cancelButton); 

  // Render the save button
  const saveButton = document.createElement("button"); 
  saveButton.classList.add("save"); 
  saveButton.textContent = "Save"; 
  saveButton.addEventListener("click", saveButtonHandler)
  addTodoForm.appendChild(saveButton); 

  listDiv.appendChild(addTodoForm); 
}

export { 
  renderTodoList, 
  renderAddTodoButton, 
  renderAddTodoForm
 }; 