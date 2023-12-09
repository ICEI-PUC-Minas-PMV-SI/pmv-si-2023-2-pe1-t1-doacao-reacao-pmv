const ongpageURL = 'http://localhost:3001/ongpages'
const loggedOngPage = './ongpage.html?ongid=4'

const getResultsFromQueryParams = () => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
      })
      return params.ongid
}

const ongid = getResultsFromQueryParams()


fetch(
    `${ongpageURL}/${ongid}`,
    {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'GET',
}
).then(onginfo => onginfo.json()).then(onginfo => { 


let ongpage = document.getElementById('ongpage');   

var mainDiv = document.createElement('div');
mainDiv.id = 'main';
document.body.appendChild(mainDiv);

var boxDiv = document.createElement('div');
boxDiv.className = 'box';
mainDiv.appendChild(boxDiv);

var navDiv = document.createElement('div');
navDiv.style = 'heigth: 10vh';
boxDiv.appendChild(navDiv);

var img1Div = document.createElement('div');
img1Div.className = 'image-container';
boxDiv.appendChild(img1Div);

var img1 = document.createElement('img');
img1.src = onginfo.img1; // como faz pra dizer da onde vem a imagem?
img1Div.appendChild(onginfo.img1);

var centeredDiv = document.createElement('div');
centeredDiv.className = 'centered';
img1Div.appendChild(centeredDiv);

var centered = document.createElement('h2');
centered.textContent = onginfo.ongname;
centeredDiv.appendChild(centered);

var head1Div = document.createElement('div');
head1Div.className = 'text-one';
boxDiv.appendChild(head1Div);

var head1 = document.createElement('h2');
head1.textContent = onginfo.heading1;
head1Div.appendChild(head1);

var wrapperDiv = document.createElement('div');
wrapperDiv.className = 'content-wrapper';
boxDiv.appendChild(wrapperDiv);

var img2Div = document.createElement('div');
img2Div.className = 'image-container2';
wrapperDiv.appendChild(img2Div);

var img2 = document.createElement('img');
img2.className = 'square-one';
img2.src = onginfo.img2;
img2Div.appendChild(onginfo.img2); //imagem

var img3Div = document.createElement('div');
img3Div.className = 'image-container2';
wrapperDiv.appendChild(img3Div);

var img3 = document.createElement('img');
img3.className = 'square-two';
img3.src = onginfo.img3;
img3Div.appendChild(onginfo.img3); //imagem

var img4Div = document.createElement('div');
img4Div.className = 'image-container2';
wrapperDiv.appendChild(img4Div);

var img4 = document.createElement('img');
img4.className = 'square-three';
img4.src = onginfo.img4;
img4Div.appendChild(onginfo.img4); //imagem

var head2Div = document.createElement('div');
head2Div.className = 'text-one';
boxDiv.appendChild(head2Div); 

var head2 = document.createElement('h2');
head2.textContent = onginfo.heading2;
head2Div.appendChild(head2);

var bloco1Div = document.createElement('div');
bloco1Div.className = 'text-three';
boxDiv.appendChild(bloco1Div);

var bloco1 = document.createElement('p')
bloco1.textContent = onginfo.bio1;
bloco1Div.appendChild(bloco1);

var bloco2 = document.createElement('p')
bloco2.textContent = onginfo.bio2;
bloco1Div.appendChild(bloco2);

var head3Div = document.createElement('div');
head3Div.className = 'text-one1';
boxDiv.appendChild(head3Div);

var head3 = document.createElement('h2');
head3.textContent = onginfo.heading3;
head3Div.appendChild(head3);

const emptyDiv = document.createElement('div');
boxDiv.appendChild(emptyDiv);

var bloco2Div = document.createElement('div');
bloco2Div.className = 'text-three';
emptyDiv.appendChild(bloco2Div);

var bloco2 = document.createElement('p');
bloco2.textContent = onginfo.bio3;
bloco2Div.appendChild(bloco2);

var img5Div = document.createElement('div');
emptyDiv.appendChild(img5Div);

var img5 = document.createElement('img');
img5.src = onginfo.img5;
img5Div.appendChild(onginfo.img5); //imagem

var bloco3Div = document.createElement('div');
bloco3Div.className = 'text-four';
emptyDiv.appendChild(bloco3Div); 

var bloco3 = document.createElement('p');
bloco3.textContent = onginfo.bio4;
bloco3Div.appendChild(bloco3);

var img6Div = document.createElement('div');
emptyDiv.appendChild(img6Div);

var img6 = document.createElement('img');
img6.src = onginfo.img6;
img5Div.appendChild(img6); //imagem

var head4Div = document.createElement('div');
head4Div.className = 'text-one';
boxDiv.appendChild(head4Div); 

var head4 = document.createElement('h2');
head4.textContent = 'Apoie nossa causa';
head4Div.appendChild(head4);

var bloco4Div = document.createElement('div');
bloco4Div.className = 'finalp';
boxDiv.appendChild(bloco4Div); 

var bloco4 = document.createElement('p');
bloco4.textContent = onginfo.donationinfo;
bloco4Div.appendChild(bloco4);

ongpage.appendChild(mainDiv);
})


