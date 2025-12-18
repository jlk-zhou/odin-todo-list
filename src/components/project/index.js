import { renderProject } from "./ui";

function mountProject(project) {
  const body = document.querySelector("body"); 
  const projectDiv = renderProject(project); 
  body.appendChild(projectDiv); 
}

export { mountProject }; 