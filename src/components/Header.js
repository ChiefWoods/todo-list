import { Utility } from './Utility.js';
import logo from '../icons/clipboard-check-outline.svg';

export const Header = (() => {
  const createHeader = () => {
    const header = document.createElement('header');
    const div = Utility.createText('div', ['container-header']);
    const img = Utility.createImg(logo, ['logo'], 'Logo');
    const span = Utility.createText('span', ['logo-title'], 'Todo List');

    div.append(img, span);
    header.append(div);

    return header;
  }

  return { createHeader };
})();
