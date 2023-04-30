import { createText, createImg } from './index.js';
import github from './icons/github.svg';

export function createFooter() {
  const footer = document.createElement('footer');
  const span = createText('span', `Copyright @ ${new Date().getFullYear()} ChiefWoods`, 'made-by');

  const a = document.createElement('a');
  a.className = 'github-link';
  a.href = 'https://github.com/ChiefWoods/todo-list';
  a.target = '_blank';

  const img = createImg(github, 'GitHub', 'github-icon');

  a.appendChild(img);
  footer.append(span, a);

  return footer;
}
