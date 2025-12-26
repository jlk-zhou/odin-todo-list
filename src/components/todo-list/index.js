import {
  renderTodoList, 
  renderAddTodoButton, 
} from "./ui.js"; 

// function mountTodoList(list) {
//   const body = document.querySelector("body"); 

//   const listDiv = renderTodoList(list); 
//   body.appendChild(listDiv); 

//   const addTodoButton = renderAddTodoButton(); 
//   body.appendChild(addTodoButton); 
// }

function updateTodoList(list) {
  const oldListDiv = document.querySelector(".todo-list"); 
  const newListDiv = renderTodoList(list); 
  oldListDiv.replaceWith(newListDiv); 
}

export { 
  // mountTodoList, 
  updateTodoList, 
}; 