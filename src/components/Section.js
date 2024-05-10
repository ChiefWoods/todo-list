import { isPast } from "date-fns";
import Utility from "./Utility.js";
import Dialog from "./Dialog.js";
import Storage from "../classes/Storage.js";
import edit from "../icons/square-edit-outline.svg";
import trash from "../icons/delete.svg";
import add from "../icons/plus.svg";

export default (() => {
  let selectedTaskTitle = null;

  /**
   * Creates a section element with the specified name. If no name is provided, a default section is created.
   *
   * @param {string} [name=null] - The name of the section.
   * @returns {HTMLElement} The section element.
   */
  const createSection = (name = null) => {
    const section = Utility.createText("section", ["project-view"]);
    const header = Utility.createText(
      "h3",
      ["project-name"],
      name ?? "Select a project",
    );

    section.append(header);

    if (name) {
      const list = Utility.createText("menu", ["task-list"]);

      Storage.getAllTasks(name).length
        ? list.append(...Storage.getAllTasks(name).map(createTaskBtn))
        : header.insertAdjacentElement(
            "afterend",
            Utility.createText(
              "p",
              ["empty-task"],
              "It's quite empty in here...",
            ),
          );

      if (!Storage.defaults.includes(name)) {
        list.append(createTaskBtn());
      }

      section.append(list);
    }

    return section;
  };

  /**
   * Creates a task button with the specified task data. If no task is provided, an "Add Task" button is created.
   *
   * @param {object} [task=null] - The task data.
   * @returns {HTMLElement} The task button element.
   */
  const createTaskBtn = (task = null) => {
    const li = document.createElement("li");

    const taskBtn = Utility.createText("button", [
      "task",
      `${task ? `task-${task.priority}` : "add-task"}`,
    ]);

    if (task) {
      taskBtn.addEventListener("click", (e) => {
        if (["LABEL", "INPUT"].includes(e.target.tagName)) return;

        const projectName = getProjectName();

        Dialog.createDialog(
          "view",
          Storage.getTask(projectName, getTaskTitle(e.target)),
          projectName,
        );
      });

      const label = document.createElement("label");
      label.htmlFor = `checkbox-${task.id}`;

      const checkbox = Utility.createFormControl("checkbox", "");
      checkbox.id = `checkbox-${task.id}`;
      checkbox.checked = task.completed;

      checkbox.addEventListener("change", (e) => {
        const taskHeader = e.target
          .closest(".task")
          .querySelector(".task-title");

        taskHeader.classList.toggle("completed");

        Storage.toggleTaskCompleted(task.id);
      });

      label.append(checkbox);

      const taskTitle = Utility.createText(
        "p",
        ["task-title", `${task.completed ? "completed" : ""}`],
        task.title,
      );

      const taskDate = Utility.createText(
        "p",
        [
          "task-date",
          `${task.dueDate && isPast(new Date(task.dueDate)) ? "expired" : ""}`,
        ],
        Utility.formatDate(task.dueDate),
      );

      const editBtn = Utility.createText("button", ["task-action-btn"]);

      editBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        selectedTaskTitle = getTaskTitle(e.target);

        const projectName = getProjectName();

        Dialog.createDialog(
          "edit",
          Storage.getTask(projectName, selectedTaskTitle),
          projectName,
          selectedTaskTitle,
        );
      });

      editBtn.append(Utility.createImg(edit, ["task-icon"], "Edit Task"));

      const trashBtn = Utility.createText("button", ["task-action-btn"]);

      trashBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        selectedTaskTitle = getTaskTitle(e.target);

        const projectName = getProjectName();

        Dialog.createDialog(
          "delete",
          Storage.getTask(projectName, selectedTaskTitle),
          projectName,
          selectedTaskTitle,
        );
      });

      trashBtn.append(Utility.createImg(trash, ["task-icon"], "Delete Task"));

      taskBtn.append(label, taskTitle, taskDate, editBtn, trashBtn);
    } else {
      taskBtn.addEventListener("click", () => {
        Dialog.createDialog("add", null, getProjectName());
      });

      taskBtn.append(
        Utility.createImg(add, ["task-icon"]),
        Utility.createText("p", ["task-title"], "Add Task"),
      );
    }

    li.append(taskBtn);

    return li;
  };

  /**
   * Replaces the current section with a new section.
   */
  const replaceSection = () => {
    const projectName = getProjectName();

    document
      .querySelector(".project-view")
      .replaceWith(createSection(projectName));
    Utility.changeDocumentTitle(projectName);
  };

  /**
   * Gets the name of the current project.
   *
   * @returns {string} The project name.
   */
  const getProjectName = () => {
    return document.querySelector(".nav-item.selected > .project-name")
      ?.textContent;
  };

  /**
   * Gets the title of the task associated with the specified element.
   *
   * @param {HTMLElement} ele - The element associated with the task.
   * @returns {string} The title of the task.
   */
  const getTaskTitle = (ele) => {
    return ele.closest(".task").querySelector(".task-title").textContent;
  };

  return {
    createSection,
    replaceSection,
    getProjectName,
  };
})();
