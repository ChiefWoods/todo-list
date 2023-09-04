import { Main } from './Main.js';
import logo from '../icons/clipboard-check-outline.svg';

export const Header = (() => {
  const createHeader = () => {
    const header = document.createElement('header');
    const div = Main.createText('div', ['container-header'], '');
    const img = Main.createImg(logo, ['logo'], 'Logo');
    const span = Main.createText('span', ['logo-title'], 'Todo List');

    div.append(img, span);
    header.append(div);

    return header;
  }

  return { createHeader };
})();
