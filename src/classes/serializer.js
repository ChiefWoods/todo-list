import TodoList from "./TodoList.js";
import Project from "./Project.js";
import Task from "./Task.js";

export function serialize(todoList) {
  const replacer = (key, value) => {
    if (value instanceof TodoList) {
      return serializeTodoList(value);
    }
    return value;
  };

  return JSON.stringify(todoList, replacer);
}

export function deserialize(str) {
  const reviver = (key, value) => {
    if (typeof value === "object" && value !== null && "projects" in value) {
      return deserializeTodoList(value);
    }
    return value;
  };

  return JSON.parse(str, reviver);
}

function serializeTodoList(todoList) {
  return {
    projects: todoList.projects.map(serializeProject),
    usedId: Array.from(todoList.usedId),
  };
}

function deserializeTodoList(data) {
  const todoList = new TodoList();
  todoList.projects = data.projects.map(deserializeProject);
  todoList.usedId = new Set(data.usedId);
  return todoList;
}

function serializeProject(project) {
  return {
    name: project.name,
    tasks: project.tasks.map(serializeTask),
    taskCount: project.tasks.length,
  };
}

function deserializeProject(data) {
  const project = new Project(data.name);
  project.tasks = data.tasks.map(deserializeTask);
  return project;
}

function serializeTask(task) {
  return {
    id: task.id,
    title: task.title,
    description: task.description,
    dueDate: task.dueDate,
    priority: task.priority,
    completed: task.completed,
  };
}

function deserializeTask(data) {
  return new Task(
    data.id,
    data.title,
    data.description,
    data.dueDate,
    data.priority,
    data.completed,
  );
}
