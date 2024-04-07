import { compareAsc } from "date-fns";
import Project from "./Project.js";
import Task from "./Task.js";

export default class TodoList {
  weightage = {
    high: 1,
    medium: 2,
    low: 3,
  };

  projects;

  constructor(defaults = null) {
    this.projects = defaults ? defaults.map((name) => new Project(name)) : [];
  }

  getAllProjects() {
    return this.projects;
  }

  getProject(name) {
    return this.projects.find((project) => project.getName() === name);
  }

  setProjects(projects) {
    this.projects = projects;
  }

  addProject(name) {
    this.projects.push(new Project(name));
  }

  deleteProject(defaults, name) {
    this.projects = this.projects.filter(
      (project) => project.getName() !== name,
    );

    this.updateDefaultProjects(defaults);
  }

  getAllTasks(name) {
    return this.getProject(name).getAllTasks();
  }

  addTask(defaults, name, title, desc, date, priority) {
    const project = this.getProject(name);
    project.addTask(
      new Task(title, desc, date, priority, false, project.getIndex()),
    );
    this.updateDefaultProjects(defaults);
  }

  deleteTask(defaults, name, title) {
    this.getProject(name).deleteTask(title);
    this.updateDefaultProjects(defaults);
  }

  updateTask(defaults, name, oldTitle, newTitle, desc, dueDate, priority) {
    this.getProject(name)
      .getTask(oldTitle)
      .updateTask(newTitle, desc, dueDate, priority);
    this.updateDefaultProjects(defaults);
  }

  toggleTaskCompleted(defaults, name, title) {
    this.getProject(name).getTask(title).toggleCompleted();
    this.updateDefaultProjects(defaults);
  }

  getIndex(name) {
    return this.getProject(name).getIndex();
  }

  updateDefaultProjects(defaults) {
    defaults.forEach((name) => {
      const defaultProject = this.getProject(name);

      defaultProject.setTasks([]);
      defaultProject.updateIndex();

      this.projects.forEach((project) => {
        if (!defaults.includes(project.getName())) {
          const tasks =
            name === "Today"
              ? project.getTodayTasks()
              : name === "This week"
                ? project.getThisWeekTasks()
                : project.getImportantTasks();

          tasks.forEach((task, index) => {
            defaultProject.addTask(
              new Task(
                task.getTitle(),
                task.getDescription(),
                task.getDueDate(),
                task.getPriority(),
                task.getCompleted(),
                index,
              ),
            );
          });

          name === "Today"
            ? this.sortByPriority(defaultProject.getAllTasks())
            : defaultProject.setTasks(
                this.sortByDate(defaultProject.getAllTasks()),
              );
        }
      });
    });
  }

  reindexTasks(tasks) {
    tasks.forEach((task, index) => task.setIndex(index));
  }

  sortByPriority(tasks) {
    tasks.sort(
      (a, b) => this.weightage[a.priority] - this.weightage[b.priority],
    );
  }

  sortByDate(tasks) {
    const tasksNoDates = [];
    const tasksWithDates = [];

    tasks.forEach((task) => {
      !task.dueDate ? tasksNoDates.push(task) : tasksWithDates.push(task);
    });

    this.sortByPriority(tasksNoDates);
    this.sortByPriority(tasksWithDates);

    tasksWithDates.sort((a, b) =>
      compareAsc(new Date(a.dueDate), new Date(b.dueDate)),
    );

    return [...tasksWithDates, ...tasksNoDates];
  }
}
