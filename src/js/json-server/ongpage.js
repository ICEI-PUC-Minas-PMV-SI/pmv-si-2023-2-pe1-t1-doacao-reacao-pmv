const ongpageURL = 'http://localhost:3001/ongpages'
const loggedOngPage = './ongpage.html?ongid=4'


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
img1.id = image1; // como faz pra dizer da onde vem a imagem?
img1Div.appendChild(img1);

var centeredDiv = document.createElement('div');
centeredDiv.className = 'centered';
img1Div.appendChild(centeredDiv);
//como faz pra dizer de onde vem o texto q fica aqui?

var head1Div = document.createElement('div');
head1Div.className = 'text-one';
boxDiv.appendChild(head1Div);
//texto tbm

var wrapperDiv = document.createElement('div');
wrapperDiv.className = 'content-wrapper';
boxDiv.appendChild(wrapperDiv);

var img2Div = document.createElement('div');
img2Div.className = 'image-container2';
wrapperDiv.appendChild(img2Div);

var img2 = document.createElement('img');
img2.className = 'square-one';
img2Div.appendChild(img2); //imagem

var img3Div = document.createElement('div');
img3Div.className = 'image-container2';
wrapperDiv.appendChild(img3Div);

var img3 = document.createElement('img');
img3.className = 'square-two';
img3Div.appendChild(img3); //imagem

var img4Div = document.createElement('div');
img4Div.className = 'image-container2';
wrapperDiv.appendChild(img4Div);

var img4 = document.createElement('img');
img4.className = 'square-three';
img4Div.appendChild(img4); //imagem

var head2Div = document.createElement('div');
head2Div.className = 'text-one';
boxDiv.appendChild(head2Div); //texto

var bloco1Div = document.createElement('div');
bloco1Div.className = 'text-three';
boxDiv.appendChild(bloco1Div); //texto, dois parágrafos

var head3Div = document.createElement('div');
head3Div.className = 'text-one1';
boxDiv.appendChild(head3Div); //texto

const emptyDiv = document.createElement('div');
boxDiv.appendChild(emptyDiv);

var bloco2Div = document.createElement('div');
bloco2Div.className = 'text-three';
emptyDiv.appendChild(bloco2Div); //texto

var img5Div = document.createElement('div');
emptyDiv.appendChild(img5Div);

var img5 = document.createElement('img');
img5Div.appendChild(img5); //imagem

var bloco3Div = document.createElement('div');
bloco3Div.className = 'text-four';
emptyDiv.appendChild(bloco3Div); //texto

var img6Div = document.createElement('div');
emptyDiv.appendChild(img6Div);

var img6 = document.createElement('img');
img5Div.appendChild(img6); //imagem

var head4Div = document.createElement('div');
head4Div.className = 'text-one';
boxDiv.appendChild(head4Div); //texto

var bloco4Div = document.createElement('div');
bloco4Div.className = 'finalp';
boxDiv.appendChild(bloco4Div); //texto, três parágrafos



