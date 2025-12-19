import { loadProjectList } from "../../util/loader";
import { renderProjectNameInput } from "./ui.js"; 
import { refreshProjectsInterface } from "./index.js";

function addProjectHandler(event) {
  const projectNameInput = document.querySelector("#new-project-name"); 
  projectNameInput.style.display = "block"; 
  projectNameInput.focus(); 
  // const projectList = document.querySelector(".projects"); 
  // const newProjectNameInput = renderProjectNameInput(); 
  // projectList.appendChild(newProjectNameInput); 
  // setTimeout(() => {
  //   newProjectNameInput.focus()
  // }, 500); 
}

function selectProjectHandler(event) {
  const projects = loadProjectList(); 
  const uuid = event.target.dataset.uuid; 

  projects.setActiveProject(uuid); 

  refreshProjectsInterface(projects); 
}

export { 
  addProjectHandler,
  selectProjectHandler, 
}