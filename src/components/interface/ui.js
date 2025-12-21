import { renderProject } from "../project/ui.js"; 
import { 
  addProjectHandler,  
  selectProjectHandler, 
  renameProjectButtonHandler,
  deleteProjectHandler
} from "./ux.js"; 
import "./style.css"; 

function renderAddProjectButton() {
  const addProjectButton = document.createElement("button"); 
  addProjectButton.classList.add("add-project"); 
  addProjectButton.textContent = "Add Project"; 
  addProjectButton.addEventListener("click", addProjectHandler); 
  return addProjectButton; 
}

function renderProjectNameInput() {
  const listItem = document.createElement("li"); 
  listItem.classList.add("new-project-name-li"); 

  const nameInput = document.createElement("input"); 
  nameInput.setAttribute("id", "new-project-name"); 

  listItem.appendChild(nameInput); 
  return listItem; 
}

function renderRenameProjectButton() {
  const renameProjectButton = document.createElement("button"); 
  renameProjectButton.classList.add("rename-project"); 
  renameProjectButton.textContent = "Rename"; 
  renameProjectButton.addEventListener("click", renameProjectButtonHandler); 
  return renameProjectButton; 
}

function renderDeleteProjectButton() {
  const deleteProjectButton = document.createElement("button"); 
  deleteProjectButton.classList.add("delete-project"); 
  deleteProjectButton.textContent = "Delete"; 
  deleteProjectButton.addEventListener("click", deleteProjectHandler); 
  return deleteProjectButton; 
}

function renderProjectListItem(project) {
  const selectProjectListItem = document.createElement("li"); 
  selectProjectListItem.setAttribute("data-uuid", project.uuid); 
  selectProjectListItem.classList.add("project-li"); 
  if (project.name === "Inbox") {
    selectProjectListItem.classList.add("Inbox"); 
  }

  const selectProjectButton = document.createElement("button"); 
  selectProjectButton.classList.add("select-project"); 
  selectProjectButton.textContent = project.name; 
  selectProjectButton.addEventListener("click", selectProjectHandler); 

  selectProjectListItem.appendChild(selectProjectButton); 

  if (project.name !== "Inbox") {
    const optionsDiv = document.createElement("div"); 
    optionsDiv.classList.add("options"); 

    const renameProjectButton = renderRenameProjectButton(); 
    renameProjectButton.dataset.uuid = project.uuid; 
    optionsDiv.appendChild(renameProjectButton); 

    const deleteProjectButton = renderDeleteProjectButton(); 
    optionsDiv.appendChild(deleteProjectButton); 

    selectProjectListItem.appendChild(optionsDiv); 

    const renameInput = document.createElement("input"); 
    renameInput.name = "new-project-name"; 
    renameInput.classList.add("rename-input"); 
    renameInput.dataset.uuid = project.uuid; 
    renameInput.style.display = "none"; 
    renameInput.value = project.name; 

    selectProjectListItem.appendChild(renameInput); 
  }

  return selectProjectListItem
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
    const selectProjectListItem = renderProjectListItem(project); 
    projectList.appendChild(selectProjectListItem); 
  });

  const newProjectNameInput = renderProjectNameInput(); 
  projectList.appendChild(newProjectNameInput); 
  // There is only one input, invisible by default
  newProjectNameInput.style.display = "none"; 

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

export { 
  renderProjectNameInput, 
  renderActiveProject
}