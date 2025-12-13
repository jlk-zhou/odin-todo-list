import { exampleList } from "../../data.js";
import { renderTodoList } from "../todo-list/ui.js";

function toggleDoneHandler(event) {
  const uuid = event.target.parentElement.dataset.uuid; 
  const item = exampleList.getItem(uuid); 
  item.toggleDone(); 

  const listDiv = document.querySelector(".todo-list"); 
  listDiv.textContent = ""; 
  renderTodoList(exampleList); 
}

export { toggleDoneHandler }; 