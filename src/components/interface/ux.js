import { loadProjectList } from "../../util/loader";
import { refreshProjectsInterface } from "./index.js";

function selectProjectHandler(event) {
  const projects = loadProjectList(); 
  const uuid = event.target.dataset.uuid; 

  projects.setActiveProject(uuid); 

  refreshProjectsInterface(projects); 
}

export { selectProjectHandler }