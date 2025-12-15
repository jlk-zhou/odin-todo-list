import { renderAddTodoButton } from "./ui.js";

function cancelHandler(event) {
  event.preventDefault(); 
  const addTodoForm = document.querySelector(".add-todo-form"); 
  addTodoForm.remove(); 
  renderAddTodoButton(); 
}

export { cancelHandler }; 