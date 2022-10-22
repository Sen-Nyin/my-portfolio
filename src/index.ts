import './styles.scss';
import nav from './ts-modules/nav';

(() => {
  nav.addMenuButtonHandler(nav.toggleNav);
})();
