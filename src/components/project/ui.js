import { 
  renderTodoList, 
  renderAddTodoButton
} from "../todo-list/ui.js"; 
import "./style.css"; 

function renderProject(project) {
  const projectDiv = document.createElement("div"); 
  projectDiv.classList.add("project"); 
  projectDiv.setAttribute("data-uuid", project.uuid); 

  const projectName = document.createElement("h3"); 
  projectName.textContent = project.name; 
  projectDiv.appendChild(projectName); 

  const projectList = renderTodoList(project.list); 
  projectDiv.appendChild(projectList); 

  const addTodoButton = renderAddTodoButton(); 
  projectDiv.appendChild(addTodoButton); 

  return projectDiv; 
}

export { renderProject }; 