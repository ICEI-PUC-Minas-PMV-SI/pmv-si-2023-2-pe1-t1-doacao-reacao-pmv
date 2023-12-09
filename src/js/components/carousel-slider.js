const ongsUrl = 'http://localhost:3001/ongs';

class CarouselSlider extends HTMLElement {
    //PRECISAREMOS PEGAR DO ONGPAGE, ao invés do ONGS
    async getCarouselSlidesContent() {
        try {
            const response = await fetch(ongsUrl);
            const ongs = await response.json();
            
            const selectedOngs = ongs.sort(() => Math.random() - 0.5).slice(0, 9);
            const slideContent = selectedOngs.map(ong => ({
                title: ong.title,
                href: `./ongpage.html?ongid=${ong.id}`,
                imgSrc: ong.profilePicture,
                text: ong.description
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
        img.src = imgSrc;
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
