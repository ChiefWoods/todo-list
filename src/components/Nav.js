import { Utility } from './Utility.js';
import { Section } from './Section.js';
import { Dialog } from './Dialog.js';
import Storage from '../classes/Storage.js';
import today from '../icons/calendar-today.svg';
import week from '../icons/calendar-week.svg';
import important from '../icons/calendar-alert.svg';
import list from '../icons/format-list-bulleted.svg';
import close from '../icons/close.svg';
import add from '../icons/plus.svg';

export const Nav = (() => {
  const createNav = () => {
    const nav = document.createElement('nav');
    const navTop = Utility.createText('menu', ['nav-top']);

    const navTopLi = [
      createProjectLi(
        ['nav-button', 'project', 'selected'],
        Utility.createImg(today, ['nav-icon'], 'Today'),
        Utility.createText('span', ['nav-span'], 'Today'),
        Utility.createText('span', ['task-count'], getTaskCountString('Today'))
      ),
      createProjectLi(
        ['nav-button', 'project'],
        Utility.createImg(week, ['nav-icon'], 'This week'),
        Utility.createText('span', ['nav-span'], 'This week'),
        Utility.createText('span', ['task-count'], getTaskCountString('This week'))
      ),
      createProjectLi(
        ['nav-button', 'project'],
        Utility.createImg(important, ['nav-icon'], 'Important'),
        Utility.createText('span', ['nav-span'], 'Important'),
        Utility.createText('span', ['task-count'], getTaskCountString('Important'))
      )
    ]

    navTop.append(...navTopLi);

    const div = Utility.createText('div', ['nav-bottom']);
    const h1 = Utility.createText('h1', '', 'Projects');
    const navProjects = Utility.createText('menu', ['nav-projects']);
    const allProjects = Storage.getAllProjects().filter(project => !['Today', 'This week', 'Important'].includes(project.getName()));

    const navProjectsLi = allProjects.map(project =>
      createProjectLi(
        ['nav-button', 'project'],
        Utility.createImg(list, ['nav-icon'], 'List'),
        Utility.createText('span', ['nav-span'], project.getName()),
        Utility.createText('span', ['task-count'], getTaskCountString(project.getName())),
        createDeleteIcon()
      )
    )

    navProjects.append(...navProjectsLi, createAddProjectLi());
    div.append(h1, navProjects);
    nav.append(navTop, div);

    return nav;
  }

  const createProjectLi = (className, img, name, taskCount = null, deleteIcon = null) => {
    const li = document.createElement('li');
    const button = Utility.createText('button', className);

    !deleteIcon ? button.append(img, name, taskCount) : button.append(img, name, taskCount, deleteIcon);
    li.append(button);

    addSelectProjectHandler(li);

    return li;
  }

  const createAddProjectLi = () => {
    const li = document.createElement('li');
    const button = Utility.createText('button', ['nav-button', 'add-project']);
    const img = Utility.createImg(add, ['nav-icon'], 'Add');
    const span = Utility.createText('span', ['nav-span'], 'Add Project');

    button.append(img, span);
    li.append(button);

    addNewProjectHandler(li);

    return li;
  }

  const createDeleteIcon = () => {
    const img = Utility.createImg(close, ['nav-icon', 'project-delete'], 'Delete');
    addDeleteHandler(img);

    return img;
  }

  const createInputProject = () => {
    const container = Utility.createText('div', ['container-add-project']);

    const input = Utility.createText('input', ['input-project']);
    input.type = 'text';

    const div = document.createElement('div');

    const addButton = Utility.createText('button', ['project-add'], 'Add');

    addButton.addEventListener('click', () => {
      createNewProject(input.value);
    })

    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        createNewProject(input.value);
      }
    })

    const cancelButton = Utility.createText('button', ['project-cancel'], 'Cancel');

    cancelButton.addEventListener('click', () => {
      cancelNewProject();
    })

    input.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        cancelNewProject();
      }
    })

    div.append(addButton, cancelButton);
    container.append(input, div);

    return container;
  }

  const removeProjectLi = li => {
    li.remove();
  }

  const addSelectProjectHandler = li => {
    li.addEventListener('click', e => {
      const selectedButton = document.querySelector('.selected');

      if (selectedButton) selectedButton.classList.remove('selected');

      const projectButton = e.target.closest('.nav-button');
      projectButton.classList.add('selected');

      const projectName = projectButton.querySelector('.nav-span').textContent;

      document.querySelector('.container-project').replaceWith(Section.createSection(projectName));

      Utility.changeDocumentTitle();
    })
  }

  const addNewProjectHandler = li => {
    li.addEventListener('click', e => {
      e.target.parentNode.remove();

      document.querySelector('.nav-bottom').append(createInputProject());
      document.querySelector('.input-project').focus();
    })
  }

  const addDeleteHandler = icon => {
    icon.addEventListener('click', e => {
      e.stopPropagation();

      const projectButton = e.target.closest('.project');
      const projectName = projectButton.querySelector('.nav-span').textContent;

      Dialog.showDeleteModal(projectName);
    })
  }

  const createNewProject = projectName => {
    if (projectName === '') {
      alert('Project name cannot be empty');
    } else if (Storage.containsProject(projectName)) {
      alert('Project name already exists');
    } else {
      Storage.addProject(projectName);

      const li = createProjectLi(
        ['nav-button', 'project'],
        Utility.createImg(list, ['nav-icon'], 'List'),
        Utility.createText('span', ['nav-span'], projectName),
        Utility.createText('span', ['task-count']),
        createDeleteIcon()
      )

      document.querySelector('.container-add-project').remove();
      document.querySelector('.nav-projects').append(li, createAddProjectLi());
    }
  }

  const cancelNewProject = () => {
    document.querySelector('.container-add-project').remove();
    document.querySelector('.nav-projects').append(createAddProjectLi());
  }

  const getTaskCountString = projectName => {
    const taskCount = Storage.getTaskCount(projectName);
    return taskCount === 0 ? '' : taskCount.toString();
  }

  const updateTaskCount = () => {
    const projectButtons = document.querySelectorAll('.project');

    projectButtons.forEach(button => {
      const projectName = button.querySelector('.nav-span').textContent;
      button.querySelector('.task-count').textContent = getTaskCountString(projectName);
    })
  }

  return {
    createNav,
    removeProjectLi,
    updateTaskCount
  }
})();
