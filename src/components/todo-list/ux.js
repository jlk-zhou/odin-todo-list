import { TodoItem } from "../todo-item/class.js";
import { exampleList } from "../../data.js"; 
import { 
  renderAddTodoButton, 
  renderAddTodoForm, 
} from "./ui.js";
import { updateTodoList } from "./index.js";

function addTodoHandler(event) {
  event.currentTarget.remove(); 
  const body = document.querySelector("body")
  const addTodoForm = renderAddTodoForm(); 
  body.appendChild(addTodoForm); 
}

function cancelButtonHandler(event) {
  event.preventDefault(); 
  const addTodoForm = document.querySelector(".add-todo-form"); 
  addTodoForm.remove(); 

  const body = document.querySelector("body"); 
  const addTodoButton = renderAddTodoButton(); 
  body.appendChild(addTodoButton); 
}

function saveButtonHandler(event) {
  event.preventDefault(); 
  const addTodoForm = document.querySelector(".add-todo-form"); 
  const formData = new FormData(addTodoForm); 

  const title = formData.get("title"); 
  const description = formData.get("description"); 
  const dueDate = new Date(formData.get("due-date")); 
  const priority = formData.get("priority"); 

  const newTodoItem = new TodoItem(
    title, 
    description, 
    dueDate, 
    priority
  )

  exampleList.addItem(newTodoItem); 

  updateTodoList(exampleList); 

  const body = document.querySelector("body"); 
  addTodoForm.reset(); 
  body.appendChild(addTodoForm); 
}

export { 
  addTodoHandler, 
  cancelButtonHandler, 
  saveButtonHandler, 
}; 