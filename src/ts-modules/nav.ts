class Nav {
  #parentElement = document.querySelector('[data-nav-main]') as HTMLElement;

  #menuBtn = document.querySelector('[data-main-menu]') as HTMLButtonElement;

  // burger menu button handling
  handleMenuBtnClick(handler: Function): void {
    this.#menuBtn.addEventListener('click', handler.bind(this));
  }

  handleMenuItemClick(handler: Function): void {
    this.#parentElement.addEventListener('click', handler.bind(this));
  }

  // menu item click handling in mobile view
  eventMenuClick(): void {
    this.#menuBtn.ariaExpanded = this.#menuBtn.ariaExpanded === 'true' ? 'false' : 'true';
  }

  eventMenuItemClick(e: Event): void {
    const target = e.target as HTMLElement;
    if (target.closest('li') && this.#menuBtn.ariaExpanded === 'true') {
      this.#menuBtn.ariaExpanded = 'false';
    }
  }
}

export default new Nav();
