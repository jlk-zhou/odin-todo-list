import { loadProjectList } from "../../util/loader.js";
import { renderActiveProject } from "./ui.js";

function refreshProjectsInterface() {
  const projects = loadProjectList(); 

  // Just in case the active project gets deleted
  if (!projects.getActiveProject()) {
    projects.init(); 
  }

  const body = document.querySelector("body"); 
  body.textContent = ""; 

  const appPage = renderActiveProject(projects); 
  body.appendChild(appPage); 
}

export { refreshProjectsInterface }; 