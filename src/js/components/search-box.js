class SearchBox extends HTMLElement {
  constructor() {
    super();
  }

  makeInput() {
    const input = document.createElement('input');
    input.id = 'navbar-search-input';
    input.type = 'text';
    input.placeholder = 'Buscar';
    return input;
  }

  makeButton() {
    const button = document.createElement('p');
    button.id = 'navbar-search-button';
    button.textContent = '🔎';
    return button;
  }

  connectedCallback() {
    this.classList.add('search-container');
    const input = this.makeInput();
    const button = this.makeButton();
    this.appendChild(input);
    this.appendChild(button);
  }
}

window.customElements.define('search-box', SearchBox);
