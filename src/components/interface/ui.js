import { renderProject } from "../project/ui.js"; 
import "./style.css"; 

function renderAddProjectButton() {
  const addProjectButton = document.createElement("button"); 
  addProjectButton.classList.add("add-project"); 
  addProjectButton.textContent = "Add Project"; 
  return addProjectButton; 
}

function renderSideBar(projects) {
  const sideBarDiv = document.createElement("div"); 
  sideBarDiv.classList.add("sidebar"); 

  const sideBarHeader = document.createElement("div"); 
  sideBarHeader.classList.add("sidebar-header"); 

  const sideBarTitle = document.createElement("h3"); 
  sideBarTitle.classList.add("sidebar-title"); 
  sideBarTitle.textContent = "My Projects"; 
  sideBarHeader.appendChild(sideBarTitle); 

  const addProjectButton = renderAddProjectButton(); 
  sideBarHeader.appendChild(addProjectButton); 

  sideBarDiv.appendChild(sideBarHeader); 

  const projectList = document.createElement("ul"); 
  projectList.classList.add("projects"); 
  
  projects.list.forEach(project => {
    const selectProjectListItem = document.createElement("li"); 

    const selectProjectButton = document.createElement("button"); 
    selectProjectButton.classList.add("select-project"); 
    selectProjectButton.textContent = project.name; 

    selectProjectListItem.appendChild(selectProjectButton); 

    projectList.appendChild(selectProjectListItem); 
  });

  sideBarDiv.appendChild(projectList); 

  return sideBarDiv; 
}

function renderActiveProject(projects) {
  const appPage = document.createElement("div"); 
  appPage.classList.add("app-page"); 
  
  const sideBarDiv = renderSideBar(projects); 
  appPage.appendChild(sideBarDiv); 

  const activeProject = projects.getActiveProject(); 

  const projectDiv = renderProject(activeProject); 
  appPage.appendChild(projectDiv); 

  return appPage; 
}

export { renderActiveProject }