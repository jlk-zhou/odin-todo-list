import { 
  renderTodoList, 
  renderAddTodoButton
} from "../todo-list/ui.js"; 

function renderProject(uuid) {
  const projectDiv = document.createElement("div"); 
  projectDiv.classList.add("project"); 
  projectDiv.setAttribute("data-uuid", uuid); 

  const project = localStorage.getItem("data")
                              .find(item => item.uuid = uuid); 
  console.log(project); 

  // const projectName = document.createElement("h3"); 
  // projectName.textContent = project.name; 
  // projectDiv.appendChild(projectName); 

  // const projectList = renderTodoList(project.list); 
  // projectDiv.appendChild(projectList); 

  // const addTodoButton = renderAddTodoButton(); 
  // projectDiv.appendChild(addTodoButton); 

  // return projectDiv; 
}

export { renderProject }; 