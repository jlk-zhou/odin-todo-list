import data from "./data.json"
import { loadProjectsFromData } from "./util/loader";
// import { renderProject } from "./components/project/ui.js"; 
// import { createSampleData } from "./data.js"; 
// import { mountTodoList } from "./components/todo-list/index.js"; 
// import { mountProject } from "./components/project/index.js"; 

function main() {
  localStorage.setItem("data", JSON.stringify(data)); 
  const projects = loadProjectsFromData(); 
  

}

main(); 
