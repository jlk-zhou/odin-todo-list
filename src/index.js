import data from "./data.json"
import { loadProjectList } from "./util/loader";
import { renderActiveProject } from "./components/interface/ui.js"; 
import "./style.css"; 
// import { renderProject } from "./components/project/ui.js"; 
// import { createSampleData } from "./data.js"; 
// import { mountTodoList } from "./components/todo-list/index.js"; 
// import { mountProject } from "./components/project/index.js"; 

function main() {
  // localStorage.setItem("data", JSON.stringify(data)); 
  const projects = loadProjectList(); 
  projects.init(); 
  
  const body = document.querySelector("body"); 
  body.appendChild(renderActiveProject(projects)); 
}

main(); 
