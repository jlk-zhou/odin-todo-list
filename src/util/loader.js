import { ProjectList } from "../components/interface/class.js"; 
import { Project } from "../components/project/class.js"; 
import { TodoList } from "../components/todo-list/class.js"; 
import { TodoItem } from "../components/todo-item/class.js"; 

function loadList(listData) { 
  const todoItems = []; 
  listData.forEach(todo => {
    todoItems.push(new TodoItem(
      todo.uuid, 
      todo.title, 
      todo.description, 
      todo.dueDate, 
      todo.priority
    )); 
  }); 
  const list = new TodoList({listItems: todoItems}); 
  return list; 
}

function loadProject(projectData) {
  const projectList = loadList(projectData.list); 

  const project = new Project({
    name: projectData.name, 
    uuid: projectData.uuid, 
    list: projectList, 
    isActive: projectData.isActive, 
  })

  return project; 
}

function loadProjectList() {
  const appData = localStorage.getItem("data"); 
  const projectsData = JSON.parse(appData); 
  
  const projects = []; 
  projectsData.forEach(projectData => {
    projects.push(loadProject(projectData)); 
  }); 

  const projectList = new ProjectList(projects); 
  return projectList; 
}

export { loadProjectList }; 