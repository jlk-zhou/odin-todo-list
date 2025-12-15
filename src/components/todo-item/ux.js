import { exampleList } from "../../data.js";
import { updateTodoList } from "../todo-list/index.js";

function toggleDoneHandler(event) {
  const uuid = event.target.parentElement.dataset.uuid; 
  const item = exampleList.getItem(uuid); 
  item.toggleDone(); 

  updateTodoList(exampleList); 
}

function deleteHandler(event) {
  const uuid = event.target.parentElement.dataset.uuid; 
  exampleList.deleteItem(uuid); 
  updateTodoList(exampleList); 
}

export { 
  toggleDoneHandler, 
  deleteHandler
}; 