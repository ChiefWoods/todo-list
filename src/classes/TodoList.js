import { compareAsc } from 'date-fns';
import Project from './Project.js';
import Task from './Task.js';

export default class TodoList {
  constructor() {
    this.projects = [
      new Project('Today'),
      new Project('This week'),
      new Project('Important')
    ];
  }

  getAllProjects() {
    return this.projects;
  }

  getProject(projectName) {
    return this.projects.find(project => project.getName() === projectName);
  }

  setProjects(projects) {
    this.projects = projects;
  }

  contains(projectName) {
    return this.projects.some(project => project.getName() === projectName);
  }

  addProject(project) {
    this.projects.push(project);
  }

  deleteProject(projectName) {
    this.projects = this.projects.filter(project => project.getName() !== projectName);
  }

  updateTodayProjects() {
    this.updateProject('Today').tasks =
      this.sortByPriority(
        this.getProject('Today').getAllTasks()
      )
    this.reindexTasks(this.getProject('Today').getAllTasks());
    this.getProject('Today').updateTaskCount();
    this.getProject('Today').updateIndexCount();
  }

  updateThisWeekProjects() {
    this.updateProject('This week').tasks =
      this.sortByDate(
        this.getProject('This week').getAllTasks()
      )
    this.reindexTasks(this.getProject('This week').getAllTasks());
    this.getProject('This week').updateTaskCount();
    this.getProject('This week').updateIndexCount();
  }

  updateImportantProjects() {
    this.updateProject('Important').tasks =
      this.sortByDate(
        this.getProject('Important').getAllTasks()
      )
    this.reindexTasks(this.getProject('This week').getAllTasks());
    this.getProject('This week').updateTaskCount();
    this.getProject('This week').updateIndexCount();
  }

  updateProject(projectName) {
    this.getProject(projectName).tasks = [];
    this.getProject(projectName).taskCount = 0;
    this.getProject(projectName).indexCount = 0;

    this.projects.forEach(project => {
      if (!['Today', 'This week', 'Important'].includes(project.getName())) {
        const tasks = projectName === 'Today'
          ? project.getTodayTasks()
          : projectName === 'This week'
            ? project.getThisWeekTasks()
            : project.getImportantTasks()

        tasks.forEach((task, index) => {
          this.getProject(projectName).addTask(
            new Task(task.getTitle(), task.getDescription(), task.getDueDate(), task.getPriority(), task.getCompleted(), index)
          )
        })
      }
    })

    return this.getProject(projectName);
  }

  updateAllProjects() {
    this.updateTodayProjects();
    this.updateThisWeekProjects();
    this.updateImportantProjects();
  }

  reindexTasks(tasks) {
    tasks.forEach((task, index) => task.setIndex(index))
  }

  sortByPriority(tasks) {
    return tasks.sort((a, b) => this.priorityToScore(a) - this.priorityToScore(b))
  }

  priorityToScore(task) {
    return task.getPriority() === 'high' ? -3 : task.getPriority() === 'medium' ? -2 : -1;
  }

  sortByDate(tasks) {
    const nullDates = []
    const nonNullDates = []
    tasks.forEach(task => task.getDueDate() === null ? nullDates.push(task) : nonNullDates.push(task))

    const sortedDates = nonNullDates.sort((a, b) => compareAsc(
      new Date(a.getDueDate()), new Date(b.getDueDate()))
    )

    return [...sortedDates, ...nullDates]
  }
}
