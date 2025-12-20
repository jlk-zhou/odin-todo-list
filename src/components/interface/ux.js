import { loadProjectList } from "../../util/loader";
import { Project } from "../project/class.js"; 
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
      const localProjects = loadProjectList(); 

      const emptyNewProject = new Project({name: projectNameInput.value}); 
      localProjects.addNewProject(emptyNewProject); 

      // Display new project page automatically once created
      localProjects.setActiveProject(emptyNewProject.uuid); 

      // Save the project locally
      localProjects.save(); 

      // Refresh app page
      refreshProjectsInterface(); 
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
  const uuid = event.target.closest(".project-li").dataset.uuid; 

  projects.setActiveProject(uuid); 
  projects.save(); 

  refreshProjectsInterface(); 
}

function deleteProjectHandler(event) {
  const projects = loadProjectList(); 
  const uuid = event.target.closest(".project-li").dataset.uuid; 
  projects.deleteProject(uuid); 
  projects.save(); 
  refreshProjectsInterface(); 
}

export { 
  addProjectHandler,
  selectProjectHandler, 
  deleteProjectHandler
}