import { loadProjectList } from "../../util/loader";
import { renderProjectNameInput } from "./ui.js"; 
import { refreshProjectsInterface } from "./index.js";

function addProjectHandler(event) {
  const projectNameInputLi = document.querySelector(".add-project-li"); 
  projectNameInputLi.style.display = "block"; 

  const projectNameInput = document.querySelector("#new-project-name"); 
  projectNameInput.focus(); 

  // Make the li disappear and save project when clicked elsewhere
  window.addEventListener("click", saveNewProjectHandler); 
  window.addEventListener("keydown", saveNewProjectHandler); 
}

function saveNewProjectHandler(event) { 
  const projectNameInput = document.querySelector("#new-project-name"); 
  const addProjectButton = document.querySelector(".add-project"); 
  if (
    (event.target !== projectNameInput
    && event.target !== addProjectButton)
    || event.key === "Enter"
  ) {
    // Validate input
    if (projectNameInput.value) {
      // Save new project if name is valid
      console.log(`Save new project: ${projectNameInput.value}`)

      // Refresh app page
    }

    // Make input disappear and remove save event listener from window
    projectNameInput.value = ""; 
    projectNameInput.parentElement.style.display = "none"; 
    window.removeEventListener("click", saveNewProjectHandler); 
    window.removeEventListener("keydown", saveNewProjectHandler); 
  }
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