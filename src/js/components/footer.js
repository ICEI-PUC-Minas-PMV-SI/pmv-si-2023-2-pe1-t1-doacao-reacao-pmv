class CustomFooter extends HTMLElement {
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
        //TODO: Add icons
        {
            label: 'Link1',
            href: '#home',
        },
        {
            label: 'Link2',
            href: '#home',
        },
        {
            label: 'Link3',
            href: '#home',
        },
        {
            label: 'Link4',
            href: '#home',
        },
        {
            label: 'Link5',
            href: '#home',
        },
    ];
    copyrightText = '© 2023 Copyright doacaoreacao.com';

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
        h1.textContent = this.usefulLinksTitle;
        return h1;
    };

    linksUl = () => {
        const ul = document.createElement('ul');
        this.makeListItems(ul);
        return ul;
    };

    contactH1 = () => {
        let h1 = document.createElement('h1');
        h1.textContent = this.contactTitle;
        return h1;
    };

    contactUl = () => {
        const ul = document.createElement('ul');
        this.makeIconedListItems(ul);
        return ul;
    };

    copyrightP = () => {
        let p = document.createElement('p');
        p.textContent = this.copyrightText;
        return p;
    };

    constructor() {
        super();
    }

    makeFooter() {
        this.classList.add('custom-footer');
        this.id = 'cfoot';

        this.appendChild(this.makeWrapperDiv());
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

    makeCompanyDiv() {
        const div = document.createElement('div');
        div.appendChild(this.companyH1());
        div.appendChild(this.companyP());
        return div;
    }

    makeUsefulLinksDiv() {
        const div = document.createElement('div');
        div.classList.add('useful-links');
        div.appendChild(this.linksH1());
        div.appendChild(this.linksUl());
        return div;
    }

    makeContactDiv() {
        const div = document.createElement('div');
        div.classList.add('contact');
        div.appendChild(this.contactH1());
        div.appendChild(this.contactUl());
        return div;
    }

    makeWrapperDiv() {
        const div = document.createElement('div');
        div.classList.add('wrapper');
        div.appendChild(this.makeCompanyDiv());
        div.appendChild(this.makeUsefulLinksDiv());
        div.appendChild(this.makeContactDiv());
        return div;
    }

    connectedCallback() {
        this.makeFooter();
    }
}

window.customElements.define('custom-footer', CustomFooter);
