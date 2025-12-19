import { renderActiveProject } from "./ui.js";

function refreshProjectsInterface(projects) {
  const body = document.querySelector("body"); 
  body.textContent = ""; 

  const appPage = renderActiveProject(projects); 
  body.appendChild(appPage); 
}

export { refreshProjectsInterface }; 