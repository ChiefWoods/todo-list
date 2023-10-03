import { format, isPast } from 'date-fns';
import { Utility } from './Utility.js';
import { Dialog } from './Dialog.js';
import Storage from '../classes/Storage.js';
import edit from '../icons/square-edit-outline.svg';
import trash from '../icons/delete.svg';
import add from '../icons/plus.svg';

export const Section = (() => {
  const createSection = projectName => {
    const section = Utility.createText('section', ['container-project']);
    const h1 = Utility.createText('h1', ['project-name'], projectName);
    const menu = Utility.createText('menu', ['task-list']);

    section.append(h1, menu);

    if (Storage.isProjectEmpty(projectName)) {
      h1.insertAdjacentElement('afterend', createEmptyTask());
    } else {
      const allTasks = Storage.getAllTasks(projectName);
      menu.append(...allTasks.map(task => createTaskLi(task)));
    }

    if (!['Today', 'This week', 'Important'].includes(projectName)) {
      menu.append(createAddTaskLi());
    }

    return section;
  }

  const createEmptySection = () => {
    const section = Utility.createText('section', ['container-project']);
    const h1 = Utility.createText('h1', ['project-name'], 'Select a project');

    section.append(h1);

    return section;
  }

  const createEmptyTask = () => {
    return Utility.createText('h2', ['empty-task'], "It's quite empty here...")
  }

  const createTaskLi = task => {
    const li = document.createElement('li');
    const button = Utility.createText('button', ['task', `task-${task.getPriority()}`]);
    addViewHandler(button);

    const label = document.createElement('label');
    label.htmlFor = `checkbox${task.getIndex()}`;

    const input = Utility.createText('input', ['task-checkbox']);
    input.type = 'checkbox';
    input.id = `checkbox${task.getIndex()}`;
    input.checked = task.getCompleted();
    addCheckHandler(input);

    const div = Utility.createText('div', ['checkbox-div']);

    label.append(input, div);

    const h2 = Utility.createText('h2', isTaskCompleted(task.getCompleted()), task.getTitle());
    const span = Utility.createText('span', isTaskExpired(task.getDueDate()), dayMonthYear(task.getDueDate()));

    const editIcon = Utility.createImg(edit, ['task-icon', 'task-edit-button'], 'Edit');
    addEditHandler(editIcon);

    const trashIcon = Utility.createImg(trash, ['task-icon', 'task-trash-button'], 'Trash');
    addTrashHandler(trashIcon);

    button.append(label, h2, span, editIcon, trashIcon);
    li.append(button);

    return li;
  }

  const createAddTaskLi = () => {
    const li = document.createElement('li');
    const button = Utility.createText('button', ['task', 'add-task']);
    const img = Utility.createImg(add, '', 'Add');
    const span = Utility.createText('span', [], 'Add Task');

    button.append(img, span);
    li.append(button);
    addNewTaskHandler(li);

    return li;
  }

  const removeTaskLi = li => {
    li.remove();

    const h1 = document.querySelector('.project-name');

    if (Storage.isProjectEmpty(h1.textContent)) {
      h1.insertAdjacentElement('afterend', createEmptyTask());
    }
  }

  const addNewTaskHandler = li => {
    li.addEventListener('click', () => {
      const projectName = document.querySelector('.project-name').textContent;

      Dialog.showCreateEditModal(projectName, null, 'create');
    })
  }

  const addViewHandler = ele => {
    ele.addEventListener('click', e => {
      if (['task-checkbox', 'checkbox-div'].includes(e.target.className)) return;

      const taskTitle = e.target.closest('.task').querySelector('.task-title').textContent;
      const projectName = Storage.getProjectName(taskTitle);

      Dialog.showViewModal(projectName, Storage.getTask(projectName, taskTitle));
    })
  }

  const addCheckHandler = input => {
    input.addEventListener('click', e => {
      const taskHeader = e.target.closest('.task').querySelector('.task-title');
      const projectName = Storage.getProjectName(taskHeader.textContent);

      taskHeader.classList.toggle('completed');

      Storage.toggleTaskCompleted(projectName, taskHeader.textContent);
    });
  }

  const addEditHandler = icon => {
    icon.addEventListener('click', e => {
      e.stopPropagation();

      const taskTitle = e.target.closest('.task').querySelector('.task-title').textContent;
      const projectName = Storage.getProjectName(taskTitle);

      Dialog.showCreateEditModal(projectName, Storage.getTask(projectName, taskTitle), 'edit');
    })
  }

  const addTrashHandler = icon => {
    icon.addEventListener('click', e => {
      e.stopPropagation();

      const taskTitle = e.target.closest('.task').querySelector('.task-title').textContent;
      const projectName = Storage.getProjectName(taskTitle);

      Dialog.showDeleteModal(projectName, taskTitle);
    })
  }

  const replaceSection = projectName => {
    projectName ? document.querySelector('.container-project').replaceWith(createSection(projectName))
      : document.querySelector('.container-project').replaceWith(createEmptySection());
  }

  const dayMonthYear = date => {
    return date ? format(new Date(date), 'dd/MM/yyyy') : '-';
  }

  const isTaskCompleted = completed => {
    return completed ? ['task-title', 'completed'] : ['task-title'];
  }

  const isTaskExpired = date => {
    return isPast(new Date(date)) && date ? ['task-date', 'expired'] : ['task-date'];
  }

  return {
    createSection,
    createEmptySection,
    removeTaskLi,
    replaceSection
  }
})();
