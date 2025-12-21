import { TodoList } from "../todo-list/class.js"; 

class Project {
  constructor(
    {
      name, 
      uuid = crypto.randomUUID(), 
      list = new TodoList(), 
      isActive = false
    } = {}
  ) {
    this._name = name; 
    this._uuid = uuid; 
    this._list = list; 
    this._isActive = isActive; 
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

  set name(newName) {
    this._name = newName; 
  }

  activate() {
    this._isActive = true; 
  }

  deactivate() {
    this._isActive = false; 
  }

  toString() {
    return {
      "list": this._list.toString(), 
      "name": this._name, 
      "uuid": this._uuid, 
      "isActive": this._isActive
    }
  }
}

export { Project }; 