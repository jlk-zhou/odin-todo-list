import "./style.css"; 
import { renderTodoList } from "./components/todo-list/ui.js";
import { exampleList } from "./data.js"

function main() {
  renderTodoList(exampleList); 
}

main(); 
