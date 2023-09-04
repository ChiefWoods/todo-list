import { isToday, toDate, isThisWeek, subDays } from "date-fns";

export default class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
        this.taskCount = 0;
        this.indexCount = 0;
    }

    getName() {
        return this.name;
    }

    getTaskCount() {
        return this.taskCount;
    }

    updateTaskCount() {
        this.taskCount = this.tasks.length;
    }

    getIndexCount() {
        return this.indexCount;
    }

    updateIndexCount() {
        this.indexCount = this.tasks.length;
    }

    getTasks() {
        return this.tasks;
    }

    getTask(taskTitle) {
        return this.tasks.find(task => task.getTitle() === taskTitle);
    }

    setTasks(tasks) {
        this.tasks = tasks;
    }

    contains(taskTitle) {
        return this.tasks.some(task => task.getTitle() === taskTitle);
    }

    addTask(task) {
        this.tasks.push(task);
        this.taskCount++;
        this.indexCount++;
    }

    deleteTask(taskTitle) {
        this.tasks = this.tasks.filter(task => task.getTitle() !== taskTitle);
        this.taskCount--;
    }

    getTodayTasks() {
        return this.tasks.filter(task => isToday(new Date(this.monthDayYear(task.getDueDate()))));
    }

    getThisWeekTasks() {
        return this.tasks.filter(task => isThisWeek(subDays(new Date(this.monthDayYear(task.getDueDate())), 1)));
    }

    getImportantTasks() {
        return this.tasks.filter(task => task.getPriority() === 'high');
    }

    monthDayYear(date) {
        if (date) {
            const day = date.split('-')[2];
            const month = date.split('-')[1];
            const year = date.split('-')[0];
            return `${month}/${day}/${year}`;
        } else {
            return null;
        }
    }
}
