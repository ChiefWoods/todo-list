import TodoList from "./TodoList.js";
import { serialize, deserialize } from "./serializer.js";

export default class Storage {
  static defaults = ["Today", "This week", "Important"];
  static todoList;

  static getTodoList() {
    this.todoList =
      deserialize(localStorage.getItem("todoList")) ??
      new TodoList(this.defaults);

    return this.todoList;
  }

  static setTodoList(todoList) {
    localStorage.setItem("todoList", serialize(todoList));
  }

  static updateDefaultProjects() {
    this.getTodoList().updateDefaultProjects(this.defaults);
    this.setTodoList(this.todoList);
  }

  static containsProject(name) {
    return Boolean(this.getTodoList().getProject(name));
  }

  static getAllProjects() {
    return this.getTodoList().getAllProjects();
  }

  static addProject(name) {
    this.getTodoList().addProject(name);
    this.setTodoList(this.todoList);
  }

  static deleteProject(name) {
    this.getTodoList().deleteProject(this.defaults, name);
    this.setTodoList(this.todoList);
  }

  static getAllTasks(name) {
    return this.getTodoList().getAllTasks(name);
  }

  static getTask(name, title) {
    return this.getTodoList().getProject(name).getTask(title);
  }

  static addTask(name, title, desc, date, priority) {
    this.getTodoList().addTask(
      this.defaults,
      name,
      title,
      desc,
      date,
      priority,
    );

    this.setTodoList(this.todoList);
  }

  static deleteTask(name, title) {
    this.getTodoList().deleteTask(this.defaults, name, title);
    this.setTodoList(this.todoList);
  }

  static updateTask(name, oldTitle, newTitle, desc, dueDate, priority) {
    this.getTodoList().updateTask(
      this.defaults,
      name,
      oldTitle,
      newTitle,
      desc,
      dueDate,
      priority,
    );

    this.setTodoList(this.todoList);
  }

  static toggleTaskCompleted(id) {
    this.getTodoList().toggleTaskCompleted(this.defaults, id);
    this.setTodoList(this.todoList);
  }

  static getProjectName(title) {
    const userProjects = this.getTodoList()
      .getAllProjects()
      .filter((project) => !this.defaults.includes(project.getName()));

    for (const project of userProjects) {
      const selectedTask = project.getTask(title);

      if (selectedTask) {
        for (const task of project.getAllTasks()) {
          if (task === selectedTask) {
            return project.getName();
          }
        }
      }
    }
  }
}
