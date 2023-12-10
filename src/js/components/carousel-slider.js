const JSONServerURL = 'https://api-pmv-si-2023-2-pe1-t1-doacao-reacao-pmv-json-server.vercel.app'
const ongpagesURL = `${JSONServerURL}/ongpages`

class CarouselSlider extends HTMLElement {
    //PRECISAREMOS PEGAR DO ONGPAGE, ao invés do ONGS
    async getCarouselSlidesContent() {
        try {
            const response = await fetch(ongpagesURL);
            const ongpages = await response.json();
            console.log(ongpages)
            
            const selectedOngs = ongpages.sort(() => Math.random() - 0.5).slice(0, 9);
            const slideContent = selectedOngs.map(ongpage => ({
                title: ongpage.ongname,
                href: `./ongpage.html?ongid=${ongpage.id}`,
                imgSrc: ongpage.img1,
                text: ongpage.bio1.slice(0,20) + '...'
            }));
            return slideContent;
        } catch (error) {
            console.error('Error fetching data:', error);
            return [];
        }
    }

    constructor() {
        super();
    }

    makeA(title, href) {
        let a = document.createElement('a');
        a.textContent = title;
        a.href = href;
        return a;
    }

    makeSlideImg(imgSrc) {
        let img = document.createElement('img');
        img.src = imgSrc || 'https://placehold.co/600x400';
        return img;
    }

    makeSlideH1(title, href) {
        let h1 = document.createElement('h2');
        h1.appendChild(this.makeA(title, href));
        return h1;
    }

    makeSlideP(text) {
        let p = document.createElement('p');
        p.textContent = text;
        return p;
    }

    makeSlideContent(slide_params) {
        let div = document.createElement('div');
        div.classList.add('slide-content');
        div.appendChild(this.makeSlideImg(slide_params.imgSrc));
        div.appendChild(this.makeSlideH1(slide_params.title, slide_params.href));
        div.appendChild(this.makeSlideP(slide_params.text));
        return div;
    }

    makeSlideDiv(slide_params) {
        let slide = document.createElement('div');
        slide.classList.add('slide');
        slide.appendChild(this.makeSlideContent(slide_params));
        return slide;
    }

    async makeSlider() {
        let div = document.createElement('div');
        div.id = 'slider';
        
        const carouselSlidesContent = await this.getCarouselSlidesContent();
        
        carouselSlidesContent.forEach((slide) => {
            div.appendChild(this.makeSlideDiv(slide));
        });
        return div;
    }

    async connectedCallback() {
        this.appendChild(await this.makeSlider());
    }
}

window.customElements.define('carousel-slider', CarouselSlider);
