class Nav {
  #menuBtn = document.querySelector('[data-main-menu]');

  addMenuButtonHandler(handler) {
    this.#menuBtn.addEventListener('click', handler.bind(this));
  }

  toggleNav() {
    this.#menuBtn.ariaExpanded = this.#menuBtn.ariaExpanded === 'true' ? 'false' : 'true';
  }
}

export default new Nav();
