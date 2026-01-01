import { loadProjectList } from "../../util/loader.js"; 
import { refreshProjectsInterface } from "../interface/index.js";
import { 
  renderEditTodoForm, 
  renderItemDialog, 
} from "./ui.js"; 
import { renderAddTodoButton } from "../todo-list/ui.js";

function toggleDoneHandler(event) {
  const projects = loadProjectList()
  const listOfActiveProject = projects.getActiveProject().list
  const uuid = event.target.closest(".todo-item").dataset.uuid; 
  const item = listOfActiveProject.getItem(uuid); 
  item.toggleDone(); 

  projects.save(); 
  refreshProjectsInterface(); 
}

function expandHandler(event) {
  const uuid = event.target.closest(".todo-item").dataset.uuid; 

  const projects = loadProjectList(); 
  const listOfActiveProject = projects.getActiveProject().list; 
  const todoItem = listOfActiveProject.getItem(uuid); 

  console.log(todoItem); 
  
  const dialog = renderItemDialog(todoItem); 

  const appPage = document.querySelector(".app-page"); 
  appPage.appendChild(dialog);

  dialog.showModal(); 
}

function closeDialogHandler(event) {
  const dialog = document.querySelector(".item-detail"); 
  dialog.close(); 
  dialog.remove(); 
}

function editHandler(event) {
  const todoItem = event.target.closest(".todo-item"); 
  const uuid = todoItem.dataset.uuid;

  // Remove existing form if any
  const existingForm = document.querySelector(".todo-form"); 
  if (existingForm) {
    if (existingForm.classList.contains("add-item")) {
      const projectBody = document.querySelector(".project"); 
      const addTodoButton = renderAddTodoButton(); 
      projectBody.appendChild(addTodoButton); 
    }
    existingForm.remove(); 
    refreshProjectsInterface(); 
  }
  
  // Render new edit form
  const todoEditForm = renderEditTodoForm(); 
  todoEditForm.setAttribute("data-uuid", uuid); 
  
  // Populate the form with todo item info
  const listOfActiveProject = loadProjectList().getActiveProject().list; 

  const data = listOfActiveProject.getItem(uuid); 
  todoEditForm.querySelector("#title").value = data.title; 
  todoEditForm.querySelector("#description").value = data.description; 
  if (!isNaN(data.dueDate) && data.dueDate !== null) {
    todoEditForm.querySelector("#due-date").value = data.dueDate.toISOString().split("T")[0]; 
  }; 
  if (!(data.priority === null)) {
    todoEditForm.querySelector("#priority").value = data.priority; 
  }

  todoItem.after(todoEditForm); 

  // Remove the todo item div for overriding effect
  todoItem.remove(); 
}

function cancelButtonHandler(event) {
  event.preventDefault(); 
  const addTodoForm = document.querySelector(".todo-form"); 
  if (addTodoForm.classList.contains("add")) {
    const body = document.querySelector("body"); 
    const addTodoButton = renderAddTodoButton(); 
    body.appendChild(addTodoButton); 
  }
  addTodoForm.remove(); 
  refreshProjectsInterface(); 
}

function saveButtonHandler(event) {
  event.preventDefault(); 

  let uuid = event.target.closest(".todo-form.edit").dataset.uuid; 
  const projects = loadProjectList()
  const todoItem = projects.getActiveProject().list.getItem(uuid); 

  const todoForm = document.querySelector(".todo-form.edit"); 
  const formData = new FormData(todoForm); 

  const title = formData.get("title"); 
  const description = formData.get("description"); 
  const dueDate = new Date(formData.get("due-date")); 
  const priority = +formData.get("priority"); 

  todoItem.setTitle(title); 
  todoItem.setDescription(description); 
  todoItem.setDueDate(dueDate); 
  todoItem.setPriority(priority); 

  projects.save();
  refreshProjectsInterface(); 
}

function deleteHandler(event) {
  const projects = loadProjectList(); 
  const listOfActiveProject = projects.getActiveProject().list; 
  const uuid = event.target.closest(".todo-item").dataset.uuid;
  listOfActiveProject.deleteItem(uuid); 
  projects.save();
  refreshProjectsInterface();  
}

function checkValidityHandler(event) {
  const saveButton = document.querySelector(".todo-form .save"); 
  event.target.checkValidity() ? saveButton.disabled = false : saveButton.disabled = true; 
}

export { 
  toggleDoneHandler, 
  expandHandler, 
  closeDialogHandler, 
  editHandler, 
  cancelButtonHandler, 
  saveButtonHandler, 
  deleteHandler, 
  checkValidityHandler, 
}; 