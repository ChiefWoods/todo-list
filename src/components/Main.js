import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { Nav } from './Nav.js';
import { Section } from './Section.js';
import { Dialog } from './Dialog.js';
import Storage from '../classes/Storage.js';

export const Main = (() => {
  const initialize = () => {
    Storage.updateAllProjects();

    const main = document.createElement('main');
    const sideNav = Nav.createNav();
    const view = Section.createSection('Today');

    const overlay = createText('div', ['overlay'], '');
    Dialog.addExitHandler(overlay);

    main.append(sideNav, view, overlay);
    document.body.append(Header.createHeader(), main, Footer.createFooter());

    changeDocumentTitle();
  }

  const createText = (element, className, content) => {
    const text = document.createElement(element);
    text.classList.add(...className);
    text.textContent = content;

    return text;
  }

  const createImg = (src, className, alt) => {
    const img = document.createElement('img');
    img.src = src;
    img.classList.add(...className);
    img.alt = alt;

    return img;
  }

  const changeDocumentTitle = () => {
    const projectName = document.querySelector('.project-name').textContent;
    projectName ? document.title = `${projectName} - Todo List` : document.title = 'Todo List';
  }

  return {
    initialize,
    createText,
    createImg,
    changeDocumentTitle
  }
})();
