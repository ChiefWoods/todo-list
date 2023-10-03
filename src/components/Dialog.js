import { format } from 'date-fns';
import { Utility } from './Utility.js';
import { Nav } from './Nav.js';
import { Section } from './Section.js';
import Storage from '../classes/Storage.js';
import exit from '../icons/close-white.svg';

export const Dialog = (() => {
  const showDeleteModal = (projectName, taskTitle = null) => {
    const dialog = Utility.createText('dialog', ['modal-delete']);
    dialog.open = true;

    const modalTop = Utility.createText('div', ['modal-delete-top']);
    const span = Utility.createText('span', '', 'Confirm Delete');
    const button = document.createElement('button');
    const exitIcon = createExitIcon('delete');

    button.append(exitIcon);
    modalTop.append(span, button);

    const modalBottom = Utility.createText('div', ['modal-delete-bottom']);

    let spanConfirm = null;
    taskTitle
      ? spanConfirm = Utility.createText('span', [], 'Are you sure you want to delete this task?')
      : spanConfirm = Utility.createText('span', [], `Are you sure you want to delete project ${projectName}? Warning: this is irreversible!`);

    const div = Utility.createText('div', ['container-confirm']);

    const deleteButton = Utility.createText('button', ['delete-confirm-button'], 'Delete');
    taskTitle ? addDeleteTaskHandler(deleteButton, projectName, taskTitle) : addDeleteProjectHandler(deleteButton, projectName);

    div.append(deleteButton);
    modalBottom.append(spanConfirm, div);
    dialog.append(modalTop, modalBottom);
    document.querySelector('main').append(dialog);

    toggleOverlay();
  }

  const showViewModal = (projectName, task) => {
    const dialog = Utility.createText('dialog', ['modal-view']);
    dialog.open = true;

    const modalTop = Utility.createText('div', ['modal-view-top']);
    const span = Utility.createText('h1', ['view-title'], task.getTitle());
    const button = document.createElement('button');
    const exitIcon = createExitIcon('view');

    button.append(exitIcon);
    modalTop.append(span, button);

    const modalBottom = Utility.createText('div', ['modal-view-bottom']);
    const desc = Utility.createText('p', ['view-desc'], task.getDescription());
    const project = Utility.createText('p', ['view-project'], `Project: ${projectName}`);
    const date = Utility.createText('p', ['view-date'], `Due Date: ${task.getDueDate() ? dayMonthYear(task.getDueDate()) : '-'}`);
    const priority = Utility.createText('p', ['view-priority'], 'Priority: ');
    const priorityLevel = Utility.createText('span', ['view-priority-level', `view-${task.getPriority()}`], capitalize(task.getPriority()));

    priority.append(priorityLevel);
    modalBottom.append(desc, project, date, priority);
    dialog.append(modalTop, modalBottom);
    document.querySelector('main').append(dialog);

    toggleOverlay();
  }

  const showCreateEditModal = (projectName, task, mode) => {
    const dialog = Utility.createText('dialog', [`modal-${mode}`]);
    dialog.open = true;

    const modalTop = Utility.createText('div', [`modal-${mode}-top`]);
    const span = Utility.createText('span', '', `${capitalize(mode)} Task`);
    const button = document.createElement('button');
    const exitIcon = createExitIcon(mode);

    button.append(exitIcon);
    modalTop.append(span, button);

    const form = Utility.createText('form', [`modal-${mode}-bottom`]);
    form.method = 'dialog';

    const inputText = Utility.createText('input', [`${mode}-task-title`]);
    inputText.type = 'text';
    inputText.placeholder = 'Title';
    inputText.required = true;
    if (task) inputText.value = task.getTitle();

    const textarea = Utility.createText('textarea', [`${mode}-task-desc`]);
    textarea.placeholder = 'Description';
    textarea.required = true;
    if (task) textarea.textContent = task.getDescription();

    const divDate = Utility.createText('div', ['container-date']);

    const label = Utility.createText('label', [], 'Due Date :');
    label.htmlFor = `${mode}-task-date`;

    const inputDate = document.createElement('input');
    inputDate.type = 'date';
    inputDate.id = `${mode}-task-date`;
    if (task) inputDate.value = task.getDueDate();

    divDate.append(label, inputDate);

    const divPriority = Utility.createText('div', ['container-priority']);
    const spanPriority = Utility.createText('span', [], 'Priority :');

    divPriority.append(spanPriority);

    const divPriorityLvl = Utility.createText('div', ['container-priority-level']);

    ['low', 'medium', 'high'].forEach(level => {
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `${mode}-task-priority`;
      input.id = `${mode}-${level}`;
      input.value = level;
      if ((task && task.getPriority() === level) || (!task && level === 'low')) input.checked = true;

      const label = Utility.createText('label', [`label-${level}`], capitalize(level));
      label.htmlFor = `${mode}-${level}`;

      divPriorityLvl.append(input, label);
    })

    divPriorityLvl.querySelector('input[value="low"]').required = true;

    const addEditButton = Utility.createText('button', !task ? ['create-add-button'] : ['edit-change-button'], !task ? 'Add' : 'Edit');
    addEditButton.type = 'submit';

    !task ? addCreateHandler(form, projectName) : addEditHandler(form, projectName, task);

    divPriority.append(divPriorityLvl, addEditButton);
    form.append(inputText, textarea, divDate, divPriority);
    dialog.append(modalTop, form);
    document.querySelector('main').append(dialog);

    toggleOverlay();
  }

  const createExitIcon = mode => {
    const exitIcon = Utility.createImg(exit, [`${mode}-exit`, 'exit-button'], 'Exit');
    addExitHandler(exitIcon);

    return exitIcon;
  }

  const addExitHandler = element => {
    element.addEventListener('click', removeDialog);
  }

  const addDeleteProjectHandler = (icon, projectName) => {
    icon.addEventListener('click', () => {
      removeDialog();

      Storage.deleteProject(projectName);

      for (const span of document.querySelectorAll('.nav-span')) {
        if (span.textContent === projectName) {
          Nav.removeProjectLi(span.closest('li'));
          Nav.updateTaskCount();
          if (span.closest('.project').classList.contains('selected')) {
            Section.replaceSection();
            Utility.changeDocumentTitle();
          } else {
            const currentView = document.querySelector('.project-name').textContent;
            Section.replaceSection(currentView);
          }
          break;
        }
      }
    });
  }

  const addDeleteTaskHandler = (button, projectName, taskTitle) => {
    button.addEventListener('click', () => {
      removeDialog();

      Storage.deleteTask(projectName, taskTitle);
      Nav.updateTaskCount();

      const currentView = document.querySelector('.project-name').textContent;
      Section.replaceSection(currentView);
    });
  }

  const addCreateHandler = (form, projectName) => {
    form.addEventListener('submit', e => {
      const properties = getTaskProperties(form, 'create');

      e.preventDefault();
      removeDialog();

      Storage.addTask(projectName, ...Object.values(properties), Storage.getIndexCount(projectName));
      Nav.updateTaskCount();
      const currentView = document.querySelector('.project-name').textContent;
      Section.replaceSection(currentView);
    })
  }

  const addEditHandler = (form, projectName, task) => {
    form.addEventListener('submit', e => {
      const properties = getTaskProperties(form, 'edit');

      e.preventDefault();
      removeDialog();

      const oldTitle = task.getTitle();

      Storage.updateTask(projectName, oldTitle, ...Object.values(properties));
      Nav.updateTaskCount();
      const currentView = document.querySelector('.project-name').textContent;
      Section.replaceSection(currentView);
    })
  }

  const removeDialog = () => {
    document.querySelector('dialog').remove();
    toggleOverlay();
  }

  const toggleOverlay = () => {
    const overlay = document.querySelector('.overlay');
    overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
  }

  const getTaskProperties = (form, mode) => {
    const title = form.querySelector(`.${mode}-task-title`).value;
    const desc = form.querySelector(`.${mode}-task-desc`).value;
    const dateValue = form.querySelector(`#${mode}-task-date`).value;
    const date = dateValue || null;
    const priority = form.querySelector(`input[name="${mode}-task-priority"]:checked`).value;

    return { title, desc, date, priority };
  }

  const capitalize = word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  const dayMonthYear = date => {
    return date ? format(new Date(date), 'dd/MM/yyyy') : '';
  }

  return {
    showDeleteModal,
    showViewModal,
    showCreateEditModal,
    addExitHandler
  }
})();
