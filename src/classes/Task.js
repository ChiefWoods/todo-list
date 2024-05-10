export default class Task {
  id;
  title;
  description;
  dueDate;
  priority;
  completed;

  constructor(id, title, desc, dueDate, priority, completed) {
    this.id = id;
    this.title = title;
    this.description = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
  }

  getId() {
    return this.id;
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getDueDate() {
    return this.dueDate;
  }

  getPriority() {
    return this.priority;
  }

  getCompleted() {
    return this.completed;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }

  updateTask(title, desc, dueDate, priority) {
    this.title = title;
    this.description = desc;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
