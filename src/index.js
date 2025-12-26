import data from "./data.json"
import { loadProjectList } from "./util/loader";
import { renderActiveProject } from "./components/interface/ui.js"; 
import "./style.css"; 

function main() {
  localStorage.setItem("data", JSON.stringify(data)); 
  const projects = loadProjectList(); 
  projects.init(); 
  
  const body = document.querySelector("body"); 
  body.appendChild(renderActiveProject(projects)); 
}

main(); 
