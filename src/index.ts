import './styles.scss';
import nav from './ts-modules/nav';

(() => {
  nav.handleMenuBtnClick(nav.eventMenuBtnClick);
  nav.handleNavLinkClick(nav.eventNavLinkClick);
})();
