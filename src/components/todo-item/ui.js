import "./style.css"; 
import { 
  toggleDoneHandler,
  expandHandler, 
  closeDialogHandler, 
  editHandler,
  cancelButtonHandler, 
  saveButtonHandler, 
  deleteHandler, 
  checkValidityHandler, 
} from "./ux.js"; 

function renderOptions() {
  // Create an option div for actions like edit and delete
  const optionsDiv = document.createElement("div"); 
  optionsDiv.classList.add("options"); 

  // Render expand button
  const expandButton = document.createElement("button"); 
  expandButton.classList.add("expand"); 
  expandButton.addEventListener("click", expandHandler); 
  optionsDiv.appendChild(expandButton); 

  // Render edit button
  const editButton = document.createElement("button"); 
  editButton.classList.add("edit"); 
  editButton.addEventListener("click", editHandler); 
  optionsDiv.appendChild(editButton); 

  // Render delete button
  const deleteButton = document.createElement("button"); 
  deleteButton.classList.add("delete"); 
  deleteButton.addEventListener("click", deleteHandler); 
  optionsDiv.appendChild(deleteButton); 
  
  return optionsDiv; 
}

function renderSummaryContent(todoItem) {
  const summaryDiv = document.createElement("div"); 
  summaryDiv.classList.add("summary"); 

  // Create a header div for title and options
  const headerDiv = document.createElement("div"); 
  headerDiv.classList.add("header"); 
  summaryDiv.appendChild(headerDiv); 

  // Render title
  const title = document.createElement("h3"); 
  title.classList.add("title"); 
  title.textContent = todoItem.title;
  headerDiv.appendChild(title); 
  
  // Render description
  if (todoItem.description) {
    const description = document.createElement("p"); 
    description.classList.add("description"); 
    
    // Truncate multiline descriptions with ellipses
    const descriptionText = todoItem.description.split("\n", 2)
    description.textContent = `
      ${descriptionText[0]}${descriptionText[1] ? "..." : ""}
    `; 
    summaryDiv.appendChild(description); 
  }

  // Render due date
  const dueDate = document.createElement("p"); 
  dueDate.classList.add("due-date"); 
  if (!isNaN(todoItem.dueDate) && todoItem.dueDate !== null)
    {
      const options = {
        day: "2-digit", 
        month: "short", 
        year: "numeric", 
      }
      const date = new Intl.DateTimeFormat("en-GB", options)
                           .format(todoItem.dueDate); 
      dueDate.textContent = `${date}`; 
      summaryDiv.appendChild(dueDate); 
    }
  
  const optionsDiv = renderOptions(); 
  headerDiv.appendChild(optionsDiv); 

  return summaryDiv; 
}

function renderTodoItem(todoItem) {
  // Create container for the todo item
  const containerDiv = document.createElement("div"); 
  containerDiv.classList.add("todo-item"); 
  containerDiv.dataset.uuid = todoItem.uuid; 

  // Render toggle done button
  const toggleDoneButton = document.createElement("button"); 
  toggleDoneButton.classList.add("toggle-done"); 
  // toggleDoneButton.textContent = todoItem.done ? "Done" : "Not Done"; 
  if (todoItem.done) {
    toggleDoneButton.classList.add("done"); 
  }
  toggleDoneButton.addEventListener("click", toggleDoneHandler); 
  containerDiv.appendChild(toggleDoneButton); 

  // Toggle done button shall also reflect priority level at the same time
  switch (todoItem.priority) {
    case 0: 
      toggleDoneButton.classList.add("no-priority"); 
      break; 
    case 1: 
      toggleDoneButton.classList.add("high-priority"); 
      break; 
    case 2: 
      toggleDoneButton.classList.add("medium-priority"); 
      break; 
    case 3: 
      toggleDoneButton.classList.add("low-priority"); 
      break; 
  }

  // Render summary of todo
  const summaryDiv = renderSummaryContent(todoItem); 
  containerDiv.appendChild(summaryDiv);  

  return containerDiv; 
}

function renderItemDialog(todoItem) {
  const dialog = document.createElement("dialog");
  dialog.classList.add("item-detail"); 

  const closeDialogButton = document.createElement("button"); 
  closeDialogButton.classList.add("close-dialog"); 
  closeDialogButton.textContent = "Close"; 
  closeDialogButton.addEventListener("click", closeDialogHandler); 
  dialog.appendChild(closeDialogButton); 

  // Title is mandatory
  const title = document.createElement("h2"); 
  title.classList.add("title-detail"); 
  title.textContent = todoItem.title; 
  dialog.appendChild(title); 

  // Description is optional so check if it exists before rendering
  if (todoItem.description) {
    const description = document.createElement("p"); 
    description.classList.add("description-detail"); 
    description.textContent = todoItem.description; 
    dialog.appendChild(description); 
  }

  // Same goes for due date
  if (todoItem.dueDate) {
    const dueDate = document.createElement("p"); 
    dueDate.classList.add("due-date-detail"); 

    const options = {
      day: "numeric", 
      month: "short", 
      year: "numeric", 
    }

    const date = new Intl.DateTimeFormat("en-GB", options).format(todoItem.dueDate); 
    dueDate.textContent = `Due ${date}`; 

    dialog.appendChild(dueDate); 
  }

  // Priority has to exist; even "none" is a priority
  const priority = document.createElement("p"); 
  priority.classList.add("priority-detail"); 

  let priorityText; 
  switch (todoItem.priority) {
    case 0: 
      priorityText = "None"; 
      break; 
    case 1: 
      priorityText = "High"; 
      break; 
    case 2: 
      priorityText = "Medium"; 
      break; 
    case 3: 
      priorityText = "Low"; 
      break; 
  }

  priority.textContent = `Priority: ${priorityText}`; 
  dialog.appendChild(priority); 

  return dialog; 
}

function renderTodoForm() {
  // Render the form container
  const todoForm = document.createElement("form"); 
  todoForm.classList.add("todo-form"); 

  // Render the todo title input field
  const titleInput = document.createElement("input"); 
  titleInput.setAttribute("type", "text"); 
  titleInput.setAttribute("name", "title"); 
  titleInput.setAttribute("id", "title"); 
  titleInput.setAttribute("placeholder", "Task Name"); 
  titleInput.required = true; 
  titleInput.addEventListener("keyup", checkValidityHandler); 
  todoForm.appendChild(titleInput); 

  // Render the todo description input field
  const descriptionInput = document.createElement("textarea"); 
  descriptionInput.setAttribute("name", "description"); 
  descriptionInput.setAttribute("id", "description"); 
  descriptionInput.setAttribute("placeholder", "Description"); 
  todoForm.appendChild(descriptionInput); 

  // Render the label for due date selector
  const dueDateLabel = document.createElement("label"); 
  dueDateLabel.setAttribute("for", "due-date"); 
  dueDateLabel.classList.add("due-date-label"); 
  dueDateLabel.textContent = "Due Date: "; 
  todoForm.appendChild(dueDateLabel); 

  // Render the due date selector itself
  const dueDateInput = document.createElement("input"); 
  dueDateInput.setAttribute("type", "date"); 
  dueDateInput.setAttribute("name", "due-date"); 
  dueDateInput.setAttribute("id", "due-date"); 
  todoForm.appendChild(dueDateInput); 

  // Render the label for priority setter
  const priorityLabel = document.createElement("label"); 
  priorityLabel.setAttribute("for", "priority"); 
  priorityLabel.classList.add("priority-label"); 
  priorityLabel.textContent = "Priority: "; 
  todoForm.appendChild(priorityLabel); 

  // Render the priority setter itself
  const priorityInput = document.createElement("select"); 
  priorityInput.setAttribute("name", "priority"); 
  priorityInput.setAttribute("id", "priority"); 

  const noPriority = document.createElement("option"); 
  noPriority.setAttribute("value", "0")
  noPriority.textContent = "None"; 
  priorityInput.appendChild(noPriority); 

  const lowPriority = document.createElement("option"); 
  lowPriority.setAttribute("value", "3")
  lowPriority.textContent = "Low"; 
  priorityInput.appendChild(lowPriority); 

  const mediumPriority = document.createElement("option"); 
  mediumPriority.setAttribute("value", "2")
  mediumPriority.textContent = "Medium"; 
  priorityInput.appendChild(mediumPriority); 

  const highPriority = document.createElement("option"); 
  highPriority.setAttribute("value", "1")
  highPriority.textContent = "High"; 
  priorityInput.appendChild(highPriority); 

  priorityInput.value = "0"; 

  todoForm.appendChild(priorityInput); 

  // Render the cancel button
  const cancelButton = document.createElement("button"); 
  cancelButton.classList.add("cancel"); 
  cancelButton.textContent = "Cancel"; 
  todoForm.appendChild(cancelButton); 

  // Render the save button
  const saveButton = document.createElement("button"); 
  saveButton.classList.add("save"); 
  saveButton.textContent = "Save"; 
  todoForm.appendChild(saveButton); 

  return todoForm; 
}

function renderEditTodoForm() {
  const editTodoForm = renderTodoForm(); 
  editTodoForm.classList.add("edit"); 

  // Add cancel edit handler
  const cancelButton = editTodoForm.querySelector(".cancel"); 
  cancelButton.addEventListener("click", cancelButtonHandler); 

  // Add save edit handler
  const saveButton = editTodoForm.querySelector(".save"); 
  saveButton.addEventListener("click", saveButtonHandler); 

  return editTodoForm; 
}

export { 
  renderTodoItem, 
  renderItemDialog, 
  renderTodoForm, 
  renderEditTodoForm, 
}; 
