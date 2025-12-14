import { exampleList } from "../../data.js";
import { renderTodoList } from "../todo-list/ui.js";

function toggleDoneHandler(event) {
  const uuid = event.target.parentElement.dataset.uuid; 
  const item = exampleList.getItem(uuid); 
  item.toggleDone(); 

  renderTodoList(exampleList); 
}

function deleteHandler(event) {
  const uuid = event.target.parentElement.dataset.uuid; 
  exampleList.deleteItem(uuid); 
  renderTodoList(exampleList); 
}

export { 
  toggleDoneHandler, 
  deleteHandler
}; 