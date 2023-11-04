class NavigationBar extends HTMLElement {
  navItems = [
    {
      label: 'Home',
      href: './index.html',
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

  navTitle = () => {
    if (window.innerWidth <= 600) return 'D&R';
    return 'Doação & Reação';
  };

  menuContainer = () => {
    const div = document.createElement('div');
    div.classList.add('menu-container');
    div.appendChild(this.img());
    div.appendChild(this.ul());
    return div;
  };

  img = () => {
    const img = document.createElement('img');
    img.src = './pictures/logo.jpg';
    img.alt = 'logo';
    return img;
  };

  ul = () => {
    const ul = document.createElement('ul');
    ul.id = 'menu';
    this.makeListItems(ul);
    return ul;
  };

  h1 = () => {
    let h1 = document.createElement('h1');
    h1.textContent = this.navTitle();
    return h1;
  };

  toggle = () => {
    const div = document.createElement('div');
    div.classList.add('toggle');
    div.appendChild(document.createElement('span'));
    div.appendChild(document.createElement('span'));
    div.appendChild(document.createElement('span'));
    div.onclick = this.toggleMenu;
    return div;
  };

  searchBox = () => document.createElement('search-box');

  constructor() {
    super();
  }

  makeNavbar() {
    this.classList.add('nav');
    this.id = 'navigation-bar';

    this.appendChild(this.menuContainer());
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

  toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  }

  connectedCallback() {
    this.makeNavbar();
  }
}

window.customElements.define('navigation-bar', NavigationBar);

addEventListener('resize', () => {
  const nav = document.getElementById('navigation-bar');
  nav.querySelector('h1').textContent = nav.navTitle();
});
