import { renderTodoItem } from "../todo-item/ui";

function renderTodoList(todoList) {
  const listDiv = document.querySelector(".todo-list"); 
  listDiv.classList.add(".todo-list"); 

  const listItems = todoList.getAllItems(); 
  listItems.forEach(item => {
    const itemDiv = renderTodoItem(item); 
    listDiv.appendChild(itemDiv); 
  }); 

}

export { renderTodoList }; 