import Utility from "./Utility.js";
import Nav from "./Nav.js";
import Section from "./Section.js";
import Storage from "../classes/Storage.js";
import exit from "../icons/close-white.svg";

export default (() => {
  const priorityLevels = ["low", "medium", "high"];

  /**
   * Creates a dialog box depending on the type of action.
   * @param {string} type - The type of dialog box to be created.
   * @param {Task} task - The task object to be displayed.
   * @param {string} projectName - The name of the project.
   * @param {string} selectedTaskTitle - The title of the selected task.
   */
  const createDialog = (
    type,
    task = null,
    projectName = null,
    selectedTaskTitle = null,
  ) => {
    const dialog = Utility.createText("dialog", [`dialog-${type}`]);

    dialog.addEventListener("click", (e) => {
      if (e.clientX !== 0 && e.clientY !== 0) {
        const dimensions = dialog.getBoundingClientRect();

        if (
          e.clientX < dimensions.left ||
          e.clientX > dimensions.right ||
          e.clientY < dimensions.top ||
          e.clientY > dimensions.bottom
        ) {
          dialog.remove();
        }
      }
    });

    switch (type) {
      case "view":
        dialog.append(
          createDialogHeader(task.getTitle(), dialog),
          createDialogViewMain(
            task.getDescription(),
            projectName,
            task.getDueDate(),
            task.getPriority(),
          ),
        );
        break;
      case "add":
      case "edit":
        dialog.append(
          createDialogHeader(`${capitalizeFirstLetter(type)} Task`, dialog),
          createDialogForm(
            type,
            dialog,
            task?.getTitle() ?? "",
            task?.getDescription() ?? "",
            task?.getDueDate() ?? "",
            task?.getPriority() ?? "",
            selectedTaskTitle,
          ),
        );
        break;
      case "delete":
        dialog.append(
          createDialogHeader(
            `Delete ${selectedTaskTitle ? "Task" : "Project"}`,
            dialog,
          ),
          createDialogDeleteMain(dialog, projectName, selectedTaskTitle),
        );
    }

    document.querySelector("#body").append(dialog);

    dialog.showModal();
  };

  /**
   * Creates a dialog header with the specified title.
   * @param {string} title - The title of the dialog box.
   * @param {HTMLDialogElement} dialog - The dialog box element.
   * @returns {HTMLDivElement} The dialog header element.
   */
  const createDialogHeader = (title, dialog) => {
    const dialogHeader = Utility.createText("div", ["dialog-header"]);

    const exitBtn = Utility.createText("button", ["exit-btn"]);
    exitBtn.type = "reset";
    exitBtn.addEventListener("click", () => dialog.remove());

    const exitIcon = Utility.createImg(exit, ["exit-icon"], "Exit Dialog");
    exitBtn.append(exitIcon);

    dialogHeader.append(
      Utility.createText("h4", ["dialog-title"], title),
      exitBtn,
    );

    return dialogHeader;
  };

  /**
   * Creates a dialog main element for viewing a task.
   * @param {string} desc - The task description.
   * @param {string} project - The project name.
   * @param {string} date - The task due date.
   * @param {string} priority - The task priority.
   * @returns {HTMLDivElement} The dialog main element.
   */
  const createDialogViewMain = (desc, project, date, priority) => {
    const dialogMain = Utility.createText("div", ["dialog-main"]);

    const taskPriority = Utility.createText(
      "p",
      ["task-priority"],
      "Priority : ",
    );

    taskPriority.append(
      Utility.createText(
        "span",
        [`priority-${priority}`],
        capitalizeFirstLetter(priority),
      ),
    );

    dialogMain.append(
      Utility.createText("p", ["task-desc"], desc.replace(/\n/g, "<br>")),
      Utility.createText("p", ["task-project"], `Project : ${project}`),
      Utility.createText(
        "p",
        ["task-date"],
        `Due Date : ${Utility.formatDate(date)}`,
      ),
      taskPriority,
    );

    return dialogMain;
  };

  /**
   * Creates a dialog main element for adding or editing a task.
   * @param {string} type - The type of task to be created.
   * @param {HTMLDialogElement} dialog - The dialog box element.
   * @param {string} title - The task title.
   * @param {string} desc - The task description.
   * @param {string} date - The task due date.
   * @param {string} priority - The task priority.
   * @param {string} selectedTaskTitle - The title of the selected task.
   * @returns {HTMLFormElement} The dialog main element.
   */
  const createDialogForm = (
    type,
    dialog,
    title,
    desc,
    date,
    priority,
    selectedTaskTitle,
  ) => {
    const dialogMain = Utility.createText("form", ["dialog-main"]);

    dialogMain.addEventListener("submit", (e) => {
      e.preventDefault();
      dialog.remove();

      const formData = new FormData(dialogMain);
      const { title, desc, priority } = Object.fromEntries(formData.entries());
      const dueDate =
        formData.get("due-date") === "" ? null : formData.get("due-date");

      const projectName = Section.getProjectName();

      type === "add"
        ? Storage.addTask(projectName, title, desc, dueDate, priority)
        : Storage.updateTask(
            Storage.getProjectName(selectedTaskTitle),
            selectedTaskTitle,
            title,
            desc,
            dueDate,
            priority,
          );

      Nav.updateTaskCount();
      Section.replaceSection();
    });

    const titleInput = Utility.createFormControl("text", "title", title, true);
    titleInput.placeholder = "Title";
    titleInput.autofocus = true;

    const descTextarea = Utility.createFormControl("textarea", "desc", desc);
    descTextarea.placeholder = "Description";

    const dateDiv = Utility.createText("div", ["date-container"]);

    const dateLabel = Utility.createText("label", [], "Due By :");
    dateLabel.htmlFor = "dialog-due-date";

    const dateInput = Utility.createFormControl("date", "due-date", date);
    dateInput.id = "dialog-due-date";
    dateInput.addEventListener("click", () => dateInput.showPicker());

    dateDiv.append(dateLabel, dateInput);

    const fieldset = Utility.createText("fieldset", ["priority-container"]);
    const legend = Utility.createText("legend", [], "Priority :");

    const radioGroup = priorityLevels.map((level) => {
      const label = Utility.createText(
        "label",
        ["dialog-priority", `priority-${level}`],
        capitalizeFirstLetter(level),
      );

      label.htmlFor = level;

      const input = Utility.createFormControl(
        "radio",
        "priority",
        level,
        level === "low",
      );
      input.name = "priority";
      input.id = level;
      input.checked = level === priority;

      label.append(input);

      return label;
    });

    const primaryBtn = createDialogPrimaryBtn(type);
    primaryBtn.type = "submit";

    const innerContainer = Utility.createText("div", [
      "inner-priority-container",
    ]);
    innerContainer.append(
      ...radioGroup,
      createDialogBtnGroup([createDialogCancelBtn(dialog), primaryBtn]),
    );

    fieldset.append(legend, innerContainer);
    dialogMain.append(titleInput, descTextarea, dateDiv, fieldset);

    return dialogMain;
  };

  /**
   * Creates a dialog main element for deleting a task or project.
   * @param {HTMLDialogElement} dialog - The dialog box element.
   * @param {string} projectName - The name of the project.
   * @param {string} selectedTaskTitle - The title of the selected task.
   * @returns {HTMLDivElement} The dialog main element.
   */
  const createDialogDeleteMain = (dialog, projectName, selectedTaskTitle) => {
    const dialogMain = Utility.createText("div", ["dialog-main"]);

    const confirmation = Utility.createText(
      "p",
      ["prompt"],
      `Are you sure you want to delete ${selectedTaskTitle ? "this task" : "project " + projectName}?`,
    );

    if (!selectedTaskTitle) {
      confirmation.append(
        Utility.createText(
          "span",
          ["warning"],
          " Warning: this is irreversible!",
        ),
      );
    }

    const primaryBtn = createDialogPrimaryBtn("delete");
    primaryBtn.type = "button";

    primaryBtn.addEventListener("click", () => {
      dialog.remove();

      if (selectedTaskTitle) {
        Storage.deleteTask(
          Storage.getProjectName(selectedTaskTitle),
          selectedTaskTitle,
        );
      } else {
        Storage.deleteProject(projectName);
        Nav.removeNavBtn(projectName);
        Nav.showNav();
      }

      Nav.updateTaskCount();
      Section.replaceSection();
    });

    dialogMain.append(
      confirmation,
      createDialogBtnGroup([createDialogCancelBtn(dialog), primaryBtn]),
    );

    return dialogMain;
  };

  /**
   * Creates a primary button for the dialog box.
   * @param {string} content - The content of the button.
   * @returns {HTMLButtonElement} The primary button element.
   */
  const createDialogPrimaryBtn = (content) => {
    return Utility.createText(
      "button",
      ["primary-btn"],
      capitalizeFirstLetter(content),
    );
  };

  /**
   * Creates a cancel button for the dialog box.
   * @param {HTMLDialogElement} dialog - The dialog box element.
   * @returns {HTMLButtonElement} The cancel button element.
   */
  const createDialogCancelBtn = (dialog) => {
    const cancelBtn = Utility.createText("button", ["cancel-btn"], "Cancel");
    cancelBtn.type = "reset";
    cancelBtn.addEventListener("click", () => dialog.remove());

    return cancelBtn;
  };

  /**
   * Creates a button group for the dialog box.
   * @param {HTMLButtonElement[]} btns - The buttons to be added to the group.
   * @returns {HTMLDivElement} The button group element.
   */
  const createDialogBtnGroup = (btns) => {
    const btnGroup = Utility.createText("div", ["btn-container"]);

    btnGroup.append(...btns);

    return btnGroup;
  };

  /**
   * Capitalizes the first letter of a word.
   * @param {string} word - The word to be capitalized.
   * @returns {string} The word with the first letter capitalized.
   */
  const capitalizeFirstLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  return {
    createDialog,
  };
})();
