class TodoList {
  constructor(listItems) {
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
}

export { TodoList }; 