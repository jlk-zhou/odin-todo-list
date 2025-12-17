import { TodoItem } from "./components/todo-item/class.js"; 
import { TodoList } from "./components/todo-list/class.js"; 

const exampleList = new TodoList([]); 

const dueDate1 = new Date("2025-12-01"); 
const dueDate2 = new Date("2026-01-02"); 
const dueDate3 = new Date("2026-02-20"); 

const exampleTodo1 = new TodoItem(
    "Take out trash", 
    "Make sure to sort them! ", 
    dueDate1, 
    1, 
)

const exampleTodo2 = new TodoItem(
    "Wash dishes", 
    "Very important! ", 
    dueDate2, 
    2, 
)

const exampleTodo3 = new TodoItem(
    "Get groceries", 
    "Mainly food", 
    dueDate3, 
    3,  
)

exampleList.addItem(exampleTodo1); 
exampleList.addItem(exampleTodo2); 
exampleList.addItem(exampleTodo3); 

export { exampleList }; 