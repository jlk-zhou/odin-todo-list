import { exampleTodo } from "../../data.js";
import { renderTodoItem } from "./ui.js";

function toggleDoneHandler() {
  exampleTodo.toggleDone(); 

  const listDiv = document.querySelector(".todo-list"); 
  listDiv.textContent = ""; 
  renderTodoItem(exampleTodo); 
}

export { toggleDoneHandler }; 