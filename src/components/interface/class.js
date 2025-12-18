class ProjectList {
  constructor(list) {
    this._list = list; 
  }

  get list() {
    return this._list; 
  }

  init() {
    this._list.forEach(project => {
      if (project.name === "Inbox") {
        project.activate(); 
      } else {
        project.deactivate(); 
      }
    })
  }

  getActiveProject() {
    const activeProject = this._list.find(
      project => project.isActive === true
    ); 
    return activeProject; 
  }
}

export { ProjectList }; 