class NavigationBar extends HTMLElement {
  navTitle = 'Doação & Reação';
  navItems = [
    {
      label: 'Home',
      href: '#home',
    },
    {
      label: 'About',
      href: '#about',
    },
    {
      label: 'Services',
      href: '#services',
    },
    {
      label: 'Work',
      href: '#work',
    },
    {
      label: 'Contact',
      href: '#contact',
    },
  ];

  ul = () => {
    const ul = document.createElement('ul');
    this.makeListItems(ul);
    return ul;
  };

  h1 = () => {
    let h1 = document.createElement('h1');
    h1.textContent = this.navTitle;
    return h1;
  };

  toggle = () => {
    const div = document.createElement('div');
    div.classList.add('toggle');
    div.appendChild(document.createElement('span'));
    div.appendChild(document.createElement('span'));
    div.appendChild(document.createElement('span'));
    return div;
  };

  searchBox = () => document.createElement('search-box');

  constructor() {
    super();
  }

  makeNavbar() {
    this.classList.add('nav');
    this.id = 'navigation-bar';

    this.appendChild(this.ul());
    this.appendChild(this.h1());
    this.appendChild(this.searchBox());
    this.appendChild(this.toggle());
  }

  makeListItems(ul) {
    this.navItems.forEach((item) => {
      const li = document.createElement('li');
      const a = document.createElement('a');

      a.href = item.href;
      a.textContent = item.label;
      li.appendChild(a);
      ul.appendChild(li);
    });
  }

  connectedCallback() {
    this.makeNavbar();
  }
}

window.customElements.define('navigation-bar', NavigationBar);
