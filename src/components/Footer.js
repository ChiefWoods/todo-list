import { Main } from './Main.js';
import github from '../icons/github.svg';

export const Footer = (() => {
  const createFooter = () => {
    const footer = document.createElement('footer');
    const span = Main.createText('span', ['made-by'], `Copyright @ ${new Date().getFullYear()} ChiefWoods`);

    const a = Main.createText('a', ['github-link'], '');
    a.href = 'https://github.com/ChiefWoods/todo-list';
    a.target = '_blank';

    const img = Main.createImg(github, ['github-icon'], 'GitHub');

    a.append(img);
    footer.append(span, a);

    return footer;
  }

  return { createFooter };
})();
