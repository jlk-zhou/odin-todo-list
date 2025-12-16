import "./style.css"; 
import { 
  toggleDoneHandler, 
  deleteHandler,  
  detailViewHandler, 
} from "./ux.js"; 

function renderSummaryContent(todoItem) {
  const summaryDiv = document.createElement("div"); 
  summaryDiv.classList.add("summary"); 

  // Render title
  const title = document.createElement("h3"); 
  title.classList.add("title"); 
  title.textContent = todoItem.title;
  summaryDiv.appendChild(title); 
  
  // Render description
  const description = document.createElement("p"); 
  description.classList.add("description"); 
  
  // Truncate multiline descriptions with ellipses
  const descriptionText = todoItem.description.split("\n", 2)
  description.textContent = `
    ${descriptionText[0]}${descriptionText[1] ? "..." : ""}
  `; 
  summaryDiv.appendChild(description); 

  // Render due date
  const dueDate = document.createElement("p"); 
  dueDate.classList.add("due-date"); 
  const options = {
    day: "2-digit", 
    month: "short", 
    year: "numeric", 
  }
  if (!isNaN(todoItem.dueDate))
    {
      const date = new Intl.DateTimeFormat("en-GB", options)
                           .format(todoItem.dueDate); 
      dueDate.textContent = `${date}`; 
      summaryDiv.appendChild(dueDate); 
    }

  return summaryDiv; 
}

function renderTodoItem(todoItem) {
  // Create container for the todo item
  const containerDiv = document.createElement("div"); 
  containerDiv.classList.add("todo-item"); 
  containerDiv.dataset.uuid = todoItem.uuid; 

  // Render summary of todo
  const summaryDiv = renderSummaryContent(todoItem); 
  containerDiv.appendChild(summaryDiv);  

  // Render toggle done button
  const toggleDoneButton = document.createElement("button"); 
  toggleDoneButton.classList.add("toggle-done"); 
  toggleDoneButton.textContent = todoItem.done ? "Done" : "Not Done"; 
  containerDiv.appendChild(toggleDoneButton); 

  // Toggle done button shall also reflect priority level at the same time
  switch (todoItem.priority) {
    case 0: 
      toggleDoneButton.classList.add("high-priority"); 
      break; 
    case 1: 
      toggleDoneButton.classList.add("medium-priority"); 
      break; 
    case 2: 
      toggleDoneButton.classList.add("low-priority"); 
      break; 
  }

  // Render delete button
  const deleteButton = document.createElement("button"); 
  deleteButton.classList.add("delete"); 
  deleteButton.textContent = "Delete"; 
  containerDiv.appendChild(deleteButton); 

  // Add event listener to handle elaborate task view dialog
  containerDiv.addEventListener("click", detailViewHandler); 
  toggleDoneButton.addEventListener("click", toggleDoneHandler); 
  deleteButton.addEventListener("click", deleteHandler); 

  return containerDiv; 
}

export { renderTodoItem }; 