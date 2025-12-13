import { TodoItem } from "./components/todo-item/class.js"; 

const dueDate = new Date(2025, 11, 1); 
const exampleTodo = new TodoItem(
    "Take out trash", 
    "Make sure to sort them! ", 
    dueDate, 
    2, 
)

export { exampleTodo }; 