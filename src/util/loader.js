import { ProjectList } from "../components/interface/class.js"; 
import { Project } from "../components/project/class.js"; 
import { TodoList } from "../components/todo-list/class.js"; 
import { TodoItem } from "../components/todo-item/class.js"; 

function loadList(listData) { 
  const todoItems = []; 
  listData.forEach(todo => {
    let dueDate; 
    if (todo.dueDate) {
      dueDate = new Date(todo.dueDate); 
    } else {
      dueDate = null; 
    }
    todoItems.push(new TodoItem({
      uuid: todo.uuid, 
      title: todo.title, 
      description: todo.description, 
      dueDate: dueDate, 
      priority: todo.priority, 
      done: todo.done, 
    })); 
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
  let appData = localStorage.getItem("data"); 
  if (!appData) {
    appData = []; 
  }
  const projectsData = JSON.parse(appData); 
  
  const projects = []; 
  projectsData.forEach(projectData => {
    projects.push(loadProject(projectData)); 
  }); 

  const projectList = new ProjectList(projects); 
  return projectList; 
}

export { loadProjectList }; 