class Nav {
  #menuBtn = document.querySelector('[data-main-menu]') as HTMLButtonElement;

  addMenuButtonHandler(handler: Function): void {
    this.#menuBtn.addEventListener('click', handler.bind(this));
  }

  toggleNav(): void {
    this.#menuBtn.ariaExpanded = this.#menuBtn.ariaExpanded === 'true' ? 'false' : 'true';
  }
}

export default new Nav();
