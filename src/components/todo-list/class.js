import { TodoItem } from "../todo-item/class.js"; 

class TodoList {
  constructor({listItems = []} = {}) {
    this._listItems = listItems; 
  }

  getAllItems() {
    return this._listItems; 
  }

  getItem(uuid) {
    return this._listItems.find(item => item.uuid === uuid); 
  }

  addItem(item) {
    this._listItems.push(item); 
  }

  deleteItem(uuid) {
    const index = this._listItems.findIndex(item => item.uuid === uuid); 
    this._listItems.splice(index, 1); 
  }

  toString() {
    const value = []; 
    this._listItems.forEach(todoItem => {
      value.push(todoItem.toString())
    }); 
    return value; 
  }
}

export { TodoList }; 