class Project {
  constructor(name, list) {
    this._uuid = crypto.randomUUID(); 
    this._name = name; 
    this._list = list; 
    this._isActive = false; 
  }

  get uuid() {
    return this._uuid; 
  }

  get name() {
    return this._name; 
  }

  get list() {
    return this._list; 
  }

  get isActive() {
    return this._isActive; 
  }

  activate() {
    this._isActive = true; 
  }

  deactivate() {
    this._isActive = false; 
  }
}

export { Project }; 