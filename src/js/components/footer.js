class CustomFooter extends HTMLElement {
    companyTitle = 'Empresa'
    companyParagraph = 'O Brasil é um país de doadores. E quanto mais fácil o ato de doar for, mais dinheiro será arrecadado. Nosso projeto busca fortalecer essa cultura ao promover visibilidades das organizações e engajamento da população.  Por meio de nosso site, o usuário poderá encontrar ONG\'s próximas a ele e se informar de forma rápida e fácil'
    usefulLinksTitle = 'Links úteis'
    usefulLinksItens = [
        {
            label: 'Instituto Doar',
            href: 'https://www.institutodoar.org/blog/',
        },
        {
            label: 'Plataforma de Voluntários',
            href: 'https://www.atados.com.br',
        },
        {
            label: 'Prêmio Melhores ONGs',
            href: 'https://doar.pro/melhores',
        },
        {
            label: 'Associação Brasileira de Captadores de Recursos',
            href: 'https://captadores.org.br',
        },
        {
            label: 'Rede Filantropia',
            href: 'https://www.filantropia.ong',
        },
    ];
    contactTitle = 'Contato'
    contactItens = [
        //TODO: Add icons
        {
            label: 'WhatsApp',
            href: '#wa.me',
        },
        {
            label: 'Instagram',
            href: '#instagram/D&R',
        },
        {
            label: 'Twitter/X',
            href: '#Twitter/D&R',
        },
        {
            label: 'Facebook',
            href: '#Facebook/D&R',
        },
        {
            label: 'LinkedIn',
            href: '#LinkedIn/D&R',
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
        //this.appendChild(this.copyrightP());
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
