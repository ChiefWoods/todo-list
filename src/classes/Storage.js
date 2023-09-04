import Task from './Task.js';
import Project from './Project.js';
import TodoList from './TodoList.js';

export default class Storage {
    static setTodoList(todoList) {
        localStorage.setItem('todoList', JSON.stringify(todoList));
    }

    static getTodoList() {
        const todoList = Object.assign(new TodoList(), JSON.parse(localStorage.getItem('todoList')))

        todoList.setProjects(todoList.getProjects()
            .map(project => Object.assign(new Project(), project))
        )

        todoList.getProjects().forEach(project =>
            project.setTasks(project.getTasks()
                .map(task => Object.assign(new Task(), task))
            )
        )

        return todoList;    
    }

    static updateAllProjects() {
        const todoList = Storage.getTodoList();
        todoList.updateAllProjects();
        Storage.setTodoList(todoList);
    }

    static addProject(projectName) {
        const todoList = Storage.getTodoList();
        todoList.addProject(new Project(projectName));
        Storage.setTodoList(todoList);
    }

    static deleteProject(projectName) {
        const todoList = Storage.getTodoList();
        todoList.deleteProject(projectName);
        Storage.setTodoList(todoList);
    }

    static addTask(projectName, title, desc, date, priority) {
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).addTask(new Task(title, desc, date, priority, false, todoList.getProject(projectName).getIndexCount()));
        Storage.setTodoList(todoList);
    }

    static deleteTask(projectName, taskTitle) {
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).deleteTask(taskTitle);
        Storage.setTodoList(todoList);
    }

    static updateTask(projectName, oldTitle, newTitle, newDesc, newDueDate, newPriority) {
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).getTask(oldTitle).setTitle(newTitle);
        todoList.getProject(projectName).getTask(newTitle).setDescription(newDesc);
        todoList.getProject(projectName).getTask(newTitle).setDueDate(newDueDate);
        todoList.getProject(projectName).getTask(newTitle).setPriority(newPriority);
        Storage.setTodoList(todoList);
    }

    static toggleTaskCompleted(projectName, taskTitle) {
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).getTask(taskTitle).toggleCompleted();
        Storage.setTodoList(todoList);
    }

    static isProjectEmpty(projectName) {
        const todoList = Storage.getTodoList();
        return todoList.getProject(projectName).getTaskCount() === 0;
    }
}
