import { TodoItem } from "./components/todo-item/class.js"; 
import { TodoList } from "./components/todo-list/class.js"; 

const exampleList = new TodoList([]); 

const dueDate1 = new Date(2025, 11, 1); 
const dueDate2 = new Date(2026, 0, 2); 
const dueDate3 = new Date(2026, 1, 20); 

const exampleTodo1 = new TodoItem(
    "Take out trash", 
    "Make sure to sort them! ", 
    dueDate1, 
    0, 
)

const exampleTodo2 = new TodoItem(
    "Wash dishes", 
    "Very important! ", 
    dueDate2, 
    1, 
)

const exampleTodo3 = new TodoItem(
    "Get groceries", 
    "Mainly food", 
    dueDate3, 
    2,  
)

exampleList.addItem(exampleTodo1); 
exampleList.addItem(exampleTodo2); 
exampleList.addItem(exampleTodo3); 

export { exampleList }; 