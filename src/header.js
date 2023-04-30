import { createText, createImg } from './index.js';
import logo from './icons/clipboard-check-outline.svg';

export function createHeader() {
  const header = document.createElement('header');
  const div = document.createElement('div');

  const img = createImg(logo, 'Logo', 'logo');
  const span = createText('span', 'Todo List', 'logo-title');

  div.append(img, span);
  header.appendChild(div);

  return header;
}
