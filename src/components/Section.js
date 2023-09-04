import { format } from 'date-fns';
import { Main } from './Main.js';
import { Dialog } from './Dialog.js';
import Storage from '../classes/Storage.js';
import edit from '../icons/square-edit-outline.svg';
import trash from '../icons/delete.svg';
import add from '../icons/plus.svg';

export const Section = (() => {
  const createSection = projectName => {
    const section = Main.createText('section', ['container-project'], '');
    const h1 = Main.createText('h1', ['project-name'], projectName);
    const menu = Main.createText('menu', ['task-list'], '');

    section.append(h1, menu);

    if (Storage.isProjectEmpty(projectName)) {
      h1.insertAdjacentElement('afterend', createEmptyTask());
    } else {
      const allTasks = Storage.getTodoList().getProject(projectName).getTasks();
      menu.append(...allTasks.map(task => createTaskLi(task)));
    }

    if (!['Today', 'This week', 'Important'].includes(projectName)) {
      menu.append(createAddTaskLi());
    }

    return section;
  }

  const createEmptySection = () => {
    const section = Main.createText('section', ['container-project'], '');
    const h1 = Main.createText('h1', ['project-name'], 'Select a project');

    section.append(h1);

    return section;
  }

  const createEmptyTask = () => {
    return Main.createText('h2', ['empty-task'], 'It\'s quite empty here...')
  }

  const createTaskLi = task => {
    const li = document.createElement('li');
    const button = Main.createText('button', ['task', `task-${task.getPriority()}`], '');
    addViewHandler(button);

    const label = document.createElement('label');
    label.htmlFor = `checkbox${task.getIndex()}`;

    const input = Main.createText('input', ['task-checkbox'], '');
    input.type = 'checkbox';
    input.id = `checkbox${task.getIndex()}`;
    input.checked = task.getCompleted();
    addCheckHandler(input);

    const div = Main.createText('div', ['checkbox-div'], '');

    label.append(input, div);

    const h2 = Main.createText('h2', lineThroughTitle(task.getCompleted()), task.getTitle());
    const span = Main.createText('span', ['task-date'], dayMonthYear(task.getDueDate()));

    const editIcon = Main.createImg(edit, ['task-icon', 'task-edit-button'], 'Edit');
    addEditHandler(editIcon);

    const trashIcon = Main.createImg(trash, ['task-icon', 'task-trash-button'], 'Trash');
    addTrashHandler(trashIcon);

    button.append(label, h2, span, editIcon, trashIcon);
    li.append(button);
    
    return li;
  }

  const createAddTaskLi = () => {
    const li = document.createElement('li');
    const button = Main.createText('button', ['task', 'add-task'], '');
    const img = Main.createImg(add, '', 'Add');
    const span = Main.createText('span', '', 'Add Task');

    button.append(img, span);
    li.append(button);
    addNewTaskHandler(li);

    return li;
  }

  const removeEmptyMessage = () => {
    const emptyMessage = document.querySelector('.empty-task');
    if (emptyMessage) emptyMessage.remove();
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

      const projectName = document.querySelector('.project-name').textContent;
      const taskTitle = e.target.closest('.task').querySelector('.task-title').textContent;

      Dialog.showViewModal(projectName, Storage.getTodoList().getProject(projectName).getTask(taskTitle));
    })
  }

  const addCheckHandler = input => {
    input.addEventListener('click', e => {
      const projectName = document.querySelector('.project-name').textContent;
      const taskHeader = e.target.closest('.task').querySelector('.task-title');

      taskHeader.classList.toggle('completed');

      Storage.toggleTaskCompleted(projectName, taskHeader.textContent);
    });
  }

  const addEditHandler = icon => {
    icon.addEventListener('click', e => {
      e.stopPropagation();

      const projectName = document.querySelector('.project-name').textContent;
      const taskTitle = e.target.closest('.task').querySelector('.task-title').textContent;

      Dialog.showCreateEditModal(projectName, Storage.getTodoList().getProject(projectName).getTask(taskTitle), 'edit');
    })
  }

  const addTrashHandler = icon => {
    icon.addEventListener('click', e => {
      e.stopPropagation();

      const projectName = document.querySelector('.project-name').textContent;
      const taskTitle = e.target.closest('.task').querySelector('.task-title').textContent;

      Dialog.showDeleteModal(projectName, taskTitle);
    })
  }

  const addTask = task => {
    removeEmptyMessage();

    document.querySelector('.add-task').parentNode.insertAdjacentElement('beforebegin', createTaskLi(task));
  }

  const editTask = (task, oldTitle) => {
    for (const title of document.querySelectorAll('.task-title')) {
      if (title.textContent === oldTitle) {
        title.closest('li').replaceWith(createTaskLi(task));
        break;
      }
    }
  }

  const dayMonthYear = date => {
    return date === null ? '-' : format(new Date(date), 'dd/MM/yyyy');
  }

  const lineThroughTitle = completed => {
    return completed ? ['task-title', 'completed'] : ['task-title'];
  }

  return {
    createSection,
    createEmptySection,
    removeTaskLi,
    addTask,
    editTask
  }
})();
