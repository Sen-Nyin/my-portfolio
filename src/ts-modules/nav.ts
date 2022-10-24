class Nav {
  #parentElement = document.querySelector('[data-nav-main]') as HTMLElement;

  #menuBtn = document.querySelector('[data-main-menu]') as HTMLButtonElement;

  handleMenuBtnClick(handler: Function): void {
    this.#menuBtn.addEventListener('click', handler.bind(this));
  }

  eventMenuBtnClick(): void {
    this.#menuBtn.ariaExpanded = this.#menuBtn.ariaExpanded === 'true' ? 'false' : 'true';
  }
}

export default new Nav();
