class Nav {
  #parentElement = document.querySelector('[data-nav-main]') as HTMLElement;

  #menuBtn = document.querySelector('[data-main-menu]') as HTMLButtonElement;

  handleMenuBtnClick(handler: Function): void {
    this.#menuBtn.addEventListener('click', handler.bind(this));
  }

  handleNavLinkClick(handler: Function): void {
    this.#parentElement.addEventListener('click', handler.bind(this));
  }

  eventMenuBtnClick(): void {
    this.#menuBtn.ariaExpanded = this.#menuBtn.ariaExpanded === 'true' ? 'false' : 'true';
  }

  eventNavLinkClick(e: Event): void {
    e.preventDefault();
    const target = e.target as HTMLElement;
    if (target.nodeName !== 'A') return;
  }
}

export default new Nav();
