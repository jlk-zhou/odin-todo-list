class Project {
  constructor(name, list) {
    this._uuid = crypto.randomUUID(); 
    this._name = name; 
    this._list = list; 
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
}

export { Project }; 