import { renderAddTodoButton } from "./ui.js";
import { TodoItem } from "../todo-item/class.js";
import { exampleList } from "../../data.js"; 
import { 
  renderTodoList, 
  renderAddTodoForm, 
} from "./ui.js";

function cancelButtonHandler(event) {
  event.preventDefault(); 
  const addTodoForm = document.querySelector(".add-todo-form"); 
  addTodoForm.remove(); 
  renderAddTodoButton(); 
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

  renderTodoList(exampleList); 
  renderAddTodoForm(); 

}

export { 
  cancelButtonHandler, 
  saveButtonHandler, 
}; 