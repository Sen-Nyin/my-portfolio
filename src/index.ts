import './styles.scss';
import nav from './ts-modules/nav';

(() => {
  nav.handleMenuBtnClick(nav.eventMenuClick);
  nav.handleMenuItemClick(nav.eventMenuItemClick);
})();
