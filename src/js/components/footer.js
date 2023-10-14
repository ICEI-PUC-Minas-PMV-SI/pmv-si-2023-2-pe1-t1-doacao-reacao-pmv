class Footer extends HTMLElement {
    companyTitle = 'Empresa'
    companyParagraph = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
    usefulLinksTitle = 'Links úteis'
    usefulLinksItens = [
        {
            label: 'Link1',
            href: '#home',
        },
        {
            label: 'Link2',
            href: '#about',
        },
        {
            label: 'Link3',
            href: '#services',
        },
        {
            label: 'Link4',
            href: '#work',
        },
        {
            label: 'Link5',
            href: '#contact',
        },
    ];
    contactTitle = 'Contato'
    contactItens = [
        {
            label: 'Link1',
            href: '#home',
            icon: 'file.png'
        },
        {
            label: 'Link2',
            href: '#home',
            icont: 'file.png'
        },
        {
            label: 'Link3',
            href: '#home',
            icont: 'file.png'
        },
        {
            label: 'Link4',
            href: '#home',
            icont: 'file.png'
        },
        {
            label: 'Link5',
            href: '#home',
            icont: 'file.png'
        },
    ];

    copyrightText = '© 2023 Copyright doacaoreacao.com'

    companyH1 = () => {
        let h1 = document.createElement('h1');
        h1.textContent = this.companyTitle;
        return h1;
    };

    companyP = () => {
        let p = document.createElement('p');
        p.textContent = this.companyParagraph;
        return p;
    };

    linksH1 = () => {
        let h1 = document.createElement('h1');
        h1.textContent = this.linksH1;
        return h1;
    };

    linksUl = () => {
        const ul = document.createElement('ul');
        this.makeListItems(ul);
        return ul;
    };

    contactH1 = () => {
        const ul = document.createElement('ul');
        this.makeIconedListItems(ul);
        return ul;
    }

    contactUl = () => {
        const ul = document.createElement('ul');
        this.makeIconedListItems(ul);
        return ul;
    }

    copyrightP = () => {
        let p = document.createElement('p');
        p.textContent = this.copyrightText;
        return p;
    };

    constructor() {
        super();
    }

    makeFooter() {
        this.classList.add('footer');
        this.id = 'footer';

        this.appendChild(this.companyH1());
        this.appendChild(this.companyP());
        this.appendChild(this.linksH1());
        this.appendChild(this.linksUl());
        this.appendChild(this.contactH1());
        this.appendChild(this.contactUl());
        this.appendChild(this.copyrightP());
    }

    makeListItems(ul) {
        this.usefulLinksItens.forEach((item) => {
            const li = document.createElement('li');
            const a = document.createElement('a');

            a.href = item.href;
            a.textContent = item.label;
            li.appendChild(a);
            ul.appendChild(li);
        });
    }

    makeIconedListItems(ul) {
        this.contactItens.forEach((item) => {
            const li = document.createElement('li');
            const a = document.createElement('a');

            a.href = item.href;
            a.textContent = item.label;
            li.appendChild(a);
            ul.appendChild(li);
        });
    }

    connectedCallback() {
        this.makeFooter();
    }
}

window.customElements.define('foooter', Footer);
