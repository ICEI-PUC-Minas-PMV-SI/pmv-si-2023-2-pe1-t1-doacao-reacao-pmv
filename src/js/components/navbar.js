class NavigationBar extends HTMLElement {
  defaultNavItems = [
    {
      label: 'Página Inicial',
      href: './index.html',
    },
    {
      label: 'Mapa de Ongs',
      href: './ongs-map.html',
    },
    //ao fazer conteúdo dinâmico, não queremos que o cliente logado veja esse elemento
    {
      label: 'Entrar',
      href: './login.html',
    },
    {
      label: 'Cadastrar-se',
      href: './sign-up.html',
    },
  ];

  loggedNavItems = [
    {
      label: 'Página Inicial',
      href: './home-logged.html',
    },
    {
      label: 'Mapa de Ongs',
      href: './ongs-map.html',
    },
    {
      label: 'Cadastrar ONG',
      href: './link-social.html',
    },
  ];

  constructOngOwnerItems = (ong_id) => {
    return [
      {
        label: 'Página Inicial',
        href: './home-logged.html',
      },
      {
        label: 'Mapa de Ongs',
        href: './ongs-map.html',
      },
      {
        label: 'Minha Ong',
        href: `./ongpage.html?ongid=${ong_id}`,
      }
    ]
  }

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
    img.src = './assets/logo.jpg';
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

  buildNavbar(barItems, ul) {
    return barItems.forEach((item) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = item.href;
      a.textContent = item.label;
      li.appendChild(a);
      ul.appendChild(li);
    });
  }

  makeListItems(ul) {
    const user_id = localStorage.getItem("user_id")
    const ong_id = localStorage.getItem("ong_id")
    let barItems
    if (user_id) {
      if (ong_id) {
        barItems = this.constructOngOwnerItems(ong_id)
      } else {
        barItems = this.loggedNavItems
      }
      this.buildNavbar(barItems, ul)
    } else {
      barItems = this.defaultNavItems
      this.buildNavbar(barItems, ul)
    }
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