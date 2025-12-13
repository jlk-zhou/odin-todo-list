class TodoItem {
  constructor(title, description, dueDate, priority) {
    this._uuid = crypto.randomUUID(); 
    this._title = title; 
    this._description = description; 
    this._dueDate = dueDate; 
    this._priority = priority; 
    this._done = false; 
  }

  // Getters
  get uuid() {
    return this._uuid; 
  }

  get title() {
    return this._title; 
  }

  get description() {
    return this._description; 
  }

  get dueDate() {
    return this._dueDate; 
  }

  get priority() {
    return this._priority; 
  }

  get done() {
    return this._done; 
  }

  // Mutators
  setTitle(newTitle) {
    this._title = newTitle; 
  }

  setDescription(newDescription) {
    this._description = newDescription; 
  }

  setDueDate(newDueDate) {
    this._dueDate = newDueDate; 
  }

  setPriority(newPriority) {
    this._priority = newPriority; 
  }

  // methods
  toggleDone() {
    this._done = !this._done; 
  }
}

export { TodoItem }
