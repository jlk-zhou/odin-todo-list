import "./style.css"; 
import { renderTodoItem } from "./components/todo-item/ui.js";
import { exampleTodo } from "./data.js"

function main() {
  renderTodoItem(exampleTodo); 
}

main(); 
