import "./style.css"; 
import { exampleList } from "./data.js"; 
import { mountTodoList } from "./components/todo-list/index.js"; 

function main() {
  mountTodoList(exampleList); 
}

main(); 
