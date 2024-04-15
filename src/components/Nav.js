import Utility from "./Utility.js";
import Section from "./Section.js";
import Dialog from "./Dialog.js";
import Storage from "../classes/Storage.js";
import today from "../icons/calendar-today.svg";
import week from "../icons/calendar-week.svg";
import important from "../icons/calendar-alert.svg";
import list from "../icons/format-list-bulleted.svg";
import close from "../icons/close.svg";
import add from "../icons/plus.svg";

export default (() => {
  const mobileBreakpoint = 992;

  let nav;
  let mobileView = window.innerWidth < mobileBreakpoint;

  /**
   * Creates the navigation element.
   *
   * @returns {HTMLElement} The navigation element.
   */
  const createNav = (header, main) => {
    nav = document.createElement("nav");

    nav.addEventListener("focusout", (e) => {
      if (!nav.contains(e.relatedTarget)) {
        hideNav();
      }
    });

    const closeBtn = Utility.createText("button", ["close-btn", "action-btn"]);
    closeBtn.append(Utility.createImg(close, ["action-icon"], "Close"));

    closeBtn.addEventListener("click", hideNav);

    nav.append(
      closeBtn,
      createNavMenu("default", [
        createNavBtn("Today", today),
        createNavBtn("This week", week),
        createNavBtn("Important", important),
      ]),
      Utility.createText("h2", [], "Projects"),
      createNavMenu("user", [
        ...Storage.getAllProjects()
          .filter((project) => !Storage.defaults.includes(project.getName()))
          .map((project) => createNavBtn(project.getName())),
        createNavBtn(),
      ]),
    );

    window.addEventListener("resize", () => {
      if (window.innerWidth < mobileBreakpoint && !mobileView) {
        header.append(document.adoptNode(nav));
        mobileView = true;
      } else if (window.innerWidth > mobileBreakpoint && mobileView) {
        main.insertAdjacentElement("afterbegin", document.adoptNode(nav));
        mobileView = false;
      }
    });

    return nav;
  };

  /**
   * Creates a navigation menu with the specified type and buttons.
   *
   * @param {string} type - The type of navigation menu to create.
   * @param {HTMLElement[]} btns - The buttons to add to the navigation menu.
   * @returns {HTMLElement} The navigation menu.
   */
  const createNavMenu = (type, btns) => {
    const menu = Utility.createText("menu", [`${type}-projects`]);

    menu.append(...btns);

    return menu;
  };

  /**
   * Creates a navigation button with the specified project name and icon. If no project name is provided, an "Add Project" button is created.
   *
   * @param {string} [projectName=null] - The name of the project.
   * @param {string} [icon=null] - The icon to display on the button.
   * @returns {HTMLElement} The navigation button.
   */
  const createNavBtn = (projectName = null, icon = null) => {
    const li = document.createElement("li");
    const navBtn = Utility.createText("button", [
      "nav-item",
      `${projectName ? "project" : "add"}`,
    ]);

    if (projectName) {
      navBtn.addEventListener("click", () => {
        document.querySelector(".selected")?.classList.remove("selected");

        navBtn.classList.add("selected");

        Section.replaceSection();
        hideNav();
      });

      navBtn.append(
        Utility.createImg(icon ?? list, ["nav-icon"]),
        Utility.createText("p", ["project-name"], projectName),
        Utility.createText("span", ["task-count"], getTaskCount(projectName)),
      );

      if (!Storage.defaults.includes(projectName)) {
        const deleteBtn = Utility.createText("button", ["project-delete-btn"]);

        deleteBtn.addEventListener("click", (e) => {
          e.stopPropagation();

          const projectName =
            e.target.parentNode.querySelector(".project-name").textContent;

          Dialog.createDialog("delete", null, projectName);
          hideNav();
        });

        deleteBtn.append(
          Utility.createImg(close, ["nav-icon"], "Delete Project"),
        );

        navBtn.append(deleteBtn);
      }
    } else {
      navBtn.addEventListener("click", () => {
        navBtn.parentNode.replaceWith(createInputProject());
        document.querySelector("input.nav-item").focus();
      });

      navBtn.append(
        Utility.createImg(add, ["nav-icon"]),
        Utility.createText("p", ["project-name"], "Add Project"),
      );
    }

    li.append(navBtn);

    return li;
  };

  /**
   * Creates an input form to add a new project.
   *
   * @returns {HTMLFormElement} The input form.
   */
  const createInputProject = () => {
    const form = Utility.createText("form", ["add-project"]);

    const input = Utility.createFormControl("text", "project-name");
    input.className = "nav-item";
    input.placeholder = "Enter project name";

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      createNewProject(form, input.value);
    });

    const div = document.createElement("div");

    const cancelBtn = Utility.createText(
      "button",
      ["nav-item", "project-cancel"],
      "Cancel",
    );
    cancelBtn.type = "button";

    cancelBtn.addEventListener("click", () => {
      form.replaceWith(createNavBtn());
    });

    const addBtn = Utility.createText(
      "button",
      ["nav-item", "project-add"],
      "Add",
    );
    addBtn.type = "submit";

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        createNewProject(form, e.target.value);
      } else if (e.key === "Escape") {
        form.replaceWith(createNavBtn());
      }
    });

    div.append(cancelBtn, addBtn);
    form.append(input, div);

    return form;
  };

  /**
   * Creates a new project with the specified name, and replaces the input form with the "Add Project" button.
   *
   * @param {HTMLFormElement} form - The form element to replace.
   * @param {string} projectName - The name of the project.
   */
  const createNewProject = (form, projectName) => {
    if (!projectName) {
      alert("Project name cannot be empty!");
    } else if (Storage.containsProject(projectName)) {
      alert("Project name already exists!");
    } else {
      Storage.addProject(projectName);

      form.replaceWith(createNavBtn(projectName), createNavBtn());
    }
  };

  /**
   * Removes the navigation button with the specified project name.
   *
   * @param {string} projectName - The name of the project to remove.
   */
  const removeNavBtn = (projectName) => {
    document.querySelectorAll(".nav-item").forEach((btn) => {
      if (btn.querySelector(".project-name").textContent === projectName) {
        btn.parentNode.remove();
        return;
      }
    });
  };

  /**
   * Gets the number of tasks in the specified project.
   *
   * @param {string} projectName - The name of the project.
   * @returns {string} The number of tasks in the project in string format.
   */
  const getTaskCount = (projectName) => {
    const taskCount = Storage.getAllTasks(projectName).length;
    return taskCount ? taskCount.toString() : "";
  };

  /**
   * Updates the task count for each project button.
   */
  const updateTaskCount = () => {
    const projectBtns = document.querySelectorAll(".project");

    projectBtns.forEach((btn) => {
      const projectName = btn.querySelector(".project-name").textContent;
      btn.querySelector(".task-count").textContent = getTaskCount(projectName);
    });
  };

  /**
   * Shows the navigation menu.
   */
  const showNav = () => {
    if (mobileView && !document.querySelector(".selected")) {
      nav.classList.add("active");
    }
  };

  /**
   * Hides the navigation menu.
   */
  const hideNav = () => {
    nav.classList.remove("active");
  };

  return {
    createNav,
    removeNavBtn,
    updateTaskCount,
    showNav,
    hideNav,
  };
})();
