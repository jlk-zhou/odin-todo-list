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
}

export { TodoList }; 