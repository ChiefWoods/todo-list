import { compareAsc } from "date-fns";
import { customAlphabet } from "nanoid";
import { alphanumeric } from "nanoid-dictionary";
import Project from "./Project.js";
import Task from "./Task.js";

const nanoid = customAlphabet(alphanumeric, 10);

export default class TodoList {
  weightage = {
    high: 1,
    medium: 2,
    low: 3,
  };

  projects;
  usedId = new Set();

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
    let id;

    do {
      id = nanoid();
    } while (this.usedId.has(id));

    project.addTask(new Task(id, title, desc, date, priority, false));

    this.usedId.add(id);
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

  toggleTaskCompleted(defaults, id) {
    this.projects.forEach((project) => {
      project.getAllTasks().forEach((task) => {
        if (task.getId() === id) {
          task.toggleCompleted();
        }
      });
    });

    this.updateDefaultProjects(defaults);
  }

  updateDefaultProjects(defaults) {
    defaults.forEach((name) => {
      const defaultProject = this.getProject(name);

      defaultProject.setTasks([]);

      this.projects.forEach((project) => {
        if (!defaults.includes(project.getName())) {
          const tasks =
            name === "Today"
              ? project.getTodayTasks()
              : name === "This week"
                ? project.getThisWeekTasks()
                : project.getImportantTasks();

          tasks.forEach((task) => {
            defaultProject.addTask(
              new Task(
                task.getId(),
                task.getTitle(),
                task.getDescription(),
                task.getDueDate(),
                task.getPriority(),
                task.getCompleted(),
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
