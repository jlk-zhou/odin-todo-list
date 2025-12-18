import { Project } from "../components/project/class.js"; 
import { TodoList } from "../components/todo-list/class.js"; 
import { TodoItem } from "../components/todo-item/class.js"; 

function loadList(listData) { 
  const todoItems = []; 
  listData.forEach(todo => {
    todoItems.push(new TodoItem(
      todo.title, 
      todo.description, 
      todo.dueDate, 
      todo.priority
    )); 
  }); 
  const list = new TodoList(todoItems); 
  return list; 
}

function loadProject(projectData) {
  const projectList = loadList(projectData.list); 

  const project = new Project(
    projectData.name, 
    projectList, 
  )

  return project; 
}

function loadProjectsFromData() {
  const appData = localStorage.getItem("data"); 
  const projectsData = JSON.parse(appData); 
  
  const projects = []; 
  projectsData.forEach(projectData => {
    projects.push(loadProject(projectData)); 
  }); 

  return projects; 
}

export { loadProjectsFromData }; 