import "./style.css"; 
import { toggleDoneHandler } from "./ux.js"; 

function renderTodoItem(todoItem) {
  // Create container for the todo item
  const containerDiv = document.createElement("div"); 
  containerDiv.classList.add("todo-item"); 
  containerDiv.dataset.uuid = todoItem.uuid; 

  // Render title
  const title = document.createElement("h3"); 
  title.classList.add("title"); 
  title.textContent = todoItem.title;
  containerDiv.appendChild(title); 
  
  // Render description
  const description = document.createElement("p"); 
  description.classList.add("description"); 
  description.textContent = todoItem.description; 
  containerDiv.appendChild(description); 

  // Render due date
  const dueDate = document.createElement("p"); 
  dueDate.classList.add("due-date"); 
  dueDate.textContent = `Due: ${todoItem.dueDate}`; 
  containerDiv.appendChild(dueDate); 

  // Render priority
  const priority = document.createElement("p"); 
  priority.classList.add("priority"); 
  priority.textContent = `Priority: ${todoItem.priority}`; 
  containerDiv.appendChild(priority); 

  // Render completion status
  const done = document.createElement("p"); 
  done.classList.add("done"); 
  done.textContent = todoItem.done ? "Done" : "Not Yet Done"; 
  containerDiv.appendChild(done); 

  // Render completion button
  const toggleDoneButton = document.createElement("button"); 
  toggleDoneButton.classList.add("toggle-done"); 
  toggleDoneButton.textContent = "Toggle Done"; 
  toggleDoneButton.addEventListener("click", toggleDoneHandler); 
  containerDiv.appendChild(toggleDoneButton); 

  return containerDiv; 
}

export { renderTodoItem }; 