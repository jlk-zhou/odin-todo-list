import { Project } from "../project/class.js"; 

class ProjectList {
  constructor(list) {
    this._list = list; 
  }

  get list() {
    return this._list; 
  }

  // Always display inbox when user opens the app
  init() {
    this._list.forEach(project => {
      if (project.name === "Inbox") {
        project.activate(); 
      } else {
        project.deactivate(); 
      }
    })
  }

  getProjectByUUID(uuid) {
    return this._list.find(project => project.uuid === uuid); 
  }

  getActiveProject() {
    const activeProject = this._list.find(
      project => project.isActive === true
    ); 
    return activeProject; 
  }

  setActiveProject(uuid) {
    // Deactivate all projects
    this._list.forEach(project => {
      if (project.isActive) {
        project.deactivate(); 
      }
    })
    const activeProject = this.getProjectByUUID(uuid); 
    activeProject.activate(); 
  }

  addNewProject(project) {
    this._list.push(project); 
  }

  deleteProject(uuid) {
    const project = this.getProjectByUUID(uuid); 
    const index = this._list.indexOf(project); 
    this._list.splice(index, 1); 
  }

  save() {
    const value = []; 
    this._list.forEach(project => {
      value.push(project.toString()); 
    })
    localStorage.setItem("data", JSON.stringify(value)); 
  }
}

export { ProjectList }; 