import { loadProjectList } from "../../util/loader.js";
import { renderActiveProject } from "./ui.js";

function refreshProjectsInterface() {
  const projects = loadProjectList(); 
  console.log(projects); 

  const body = document.querySelector("body"); 
  body.textContent = ""; 

  const appPage = renderActiveProject(projects); 
  body.appendChild(appPage); 
}

export { refreshProjectsInterface }; 