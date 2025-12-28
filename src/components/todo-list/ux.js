import { TodoItem } from "../todo-item/class.js";
import { 
  renderAddTodoButton, 
  renderAddTodoForm, 
} from "./ui.js";
import { loadProjectList } from "../../util/loader.js";
import { refreshProjectsInterface } from "../interface/index.js";

function addTodoHandler(event) {
  event.currentTarget.remove(); 

  // Remove existing form if any
  const existingForm = document.querySelector(".todo-form"); 
  if (existingForm) {
    existingForm.remove(); 
  }

  refreshProjectsInterface(); 
  const addTodoButton = document.querySelector(".add-todo-button"); 
  addTodoButton.remove(); 

  const projectBody = document.querySelector(".project")
  const addTodoForm = renderAddTodoForm(); 
  projectBody.appendChild(addTodoForm); 
}

function cancelButtonHandler(event) {
  event.preventDefault(); 
  const addTodoForm = document.querySelector(".todo-form.add-item"); 
  addTodoForm.remove(); 

  const projectBody = document.querySelector(".project"); 
  const addTodoButton = renderAddTodoButton(); 
  projectBody.appendChild(addTodoButton); 
}

function saveButtonHandler(event) {
  event.preventDefault(); 
  const addTodoForm = document.querySelector(".todo-form.add-item"); 
  const formData = new FormData(addTodoForm); 

  const title = formData.get("title"); 
  const description = formData.get("description"); 
  const priority = +formData.get("priority"); 

  const newTodoItem = new TodoItem({
    title, 
    description, 
    priority
  })

  if (formData.get("due-date")) {
    newTodoItem.setDueDate(new Date(formData.get("due-date")))
  }; 

  const projects = loadProjectList(); 
  const listOfActiveProject = projects.getActiveProject().list
  listOfActiveProject.addItem(newTodoItem); 
  projects.save(); 
  refreshProjectsInterface(); 

  const addTodoButton = document.querySelector(".add-todo-button"); 
  addTodoButton.remove(); 

  const projectBody = document.querySelector(".project"); 
  addTodoForm.reset(); 
  projectBody.appendChild(addTodoForm); 
}

export { 
  addTodoHandler, 
  cancelButtonHandler, 
  saveButtonHandler, 
}; 