class CarouselSlider extends HTMLElement{
    //no projeto dinâmico provavelmente o array será construído com um filter+forEach dentro do JSON de ONGS, no momento usaremos o objeto a seguir como holder
    carouselSlidesContent = [
        {
            href: '#',
            imgSrc: 'https://via.placeholder.com/150',
            title: 'Lorem ipsum dolor',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        },
        {
            href: '#',
            imgSrc: 'https://via.placeholder.com/150',
            title: 'Lorem ipsum dolor',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        },
        {
            href: '#',
            imgSrc: 'https://via.placeholder.com/150',
            title: 'Lorem ipsum dolor',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        },
        {
            href: '#',
            imgSrc: 'https://via.placeholder.com/300/450',
            title: 'Lorem ipsum dolor',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        },
        {
            href: '#',
            imgSrc: 'https://via.placeholder.com/150',
            title: 'Lorem ipsum dolor',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        },        
        {
            href: '#',
            imgSrc: 'https://via.placeholder.com/150',
            title: 'Lorem ipsum dolor',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        },
        {
            href: '#',
            imgSrc: 'https://via.placeholder.com/150',
            title: 'Lorem ipsum dolor',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        }
    ]

    constructor(){ 
        super()
    }

    makeA(title, href){
        let a = document.createElement('a')
        a.textContent = title
        a.href = href
        return a;
    }

    makeSlideImg(imgSrc){
        let img = document.createElement('img')
        img.src = imgSrc
        return img;
    }

    makeSlideH1(title, href){
        let h1 = document.createElement('h2')
        h1.appendChild(this.makeA(title, href))
        return h1;
    }

    makeSlideP(text){
        let p = document.createElement('p')
        p.textContent = text
        return p;
    }

    makeSlideContent(slide_params){
        let div = document.createElement('div')
        div.classList.add('slide-content')
        div.appendChild(this.makeSlideImg(slide_params.imgSrc))
        div.appendChild(this.makeSlideH1(slide_params.title, slide_params.href))
        div.appendChild(this.makeSlideP(slide_params.text))
        return div;
    }

    makeSlideDiv(slide_params){
        let slide = document.createElement('div')
        slide.classList.add('slide')
        slide.appendChild(this.makeSlideContent(slide_params))
        return slide;
    }

    makeSlider(){
        let div = document.createElement('div')
        div.id = 'slider'
        this.carouselSlidesContent.forEach((slide)=>{
            div.appendChild(this.makeSlideDiv(slide))
        })
        return div;
    }

    connectedCallback(){
        this.appendChild(this.makeSlider())
    }
}

window.customElements.define('carousel-slider', CarouselSlider)