import { isToday, isThisWeek, subDays } from "date-fns";

export default class Project {
  name;
  tasks = [];

  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getAllTasks() {
    return this.tasks;
  }

  setTasks(tasks) {
    this.tasks = tasks;
  }

  getTodayTasks() {
    return this.tasks.filter((task) =>
      isToday(new Date(this.formatDate(task.getDueDate()))),
    );
  }

  getThisWeekTasks() {
    return this.tasks.filter((task) =>
      isThisWeek(subDays(new Date(this.formatDate(task.getDueDate())), 1)),
    );
  }

  getImportantTasks() {
    return this.tasks.filter((task) => task.getPriority() === "high");
  }

  getTask(title) {
    return this.tasks.find((task) => task.getTitle() === title);
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(title) {
    this.tasks = this.tasks.filter((task) => task.getTitle() !== title);
  }

  formatDate(date) {
    if (date) {
      const [year, month, day] = date.split("-");

      return `${month}/${day}/${year}`;
    } else {
      return null;
    }
  }
}
