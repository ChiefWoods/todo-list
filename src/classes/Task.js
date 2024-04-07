export default class Task {
  title;
  description;
  dueDate;
  priority;
  completed;
  index;

  constructor(title, desc, dueDate, priority, completed, index) {
    this.title = title;
    this.description = desc;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = completed;
    this.index = index;
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

  getIndex() {
    return this.index;
  }

  setIndex(index) {
    this.index = index;
  }

  updateTask(title, desc, dueDate, priority) {
    this.title = title;
    this.description = desc;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
