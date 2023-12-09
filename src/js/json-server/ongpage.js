const ongpageURL = 'http://localhost:3001/ongpages'
const loggedOngPage = './ongpage.html?ongid=4'

fetch(
    ongpageURL,
    {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'GET',
    body: JSON.stringify({
    ongname: "QuatroPatas",
    heading1: "",
    heading2: "",
    heading3: "",
    bio1: "",
    bio2: "",
    bio3: "",
    bio4: "",
    donationinfo: "",
    belongsTo: ""
    }),
).then(postResponse => postResponse.json()).then(postResponse => console.log(postResponse))




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
centeredDiv.textContent = ongname;
img1Div.appendChild(centeredDiv);

var head1Div = document.createElement('div');
head1Div.className = 'text-one';
head1Div.textContent = heading1;
boxDiv.appendChild(head1Div);

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
head2Div.textContent = heading2;
boxDiv.appendChild(head2Div); 

var bloco1Div = document.createElement('div');
bloco1Div.className = 'text-three';
bloco1Div.textContent = bio1; bio2;
boxDiv.appendChild(bloco1Div); //texto, dois parágrafos

var head3Div = document.createElement('div');
head3Div.className = 'text-one1';
head3Div.textContent = heading3;
boxDiv.appendChild(head3Div);

const emptyDiv = document.createElement('div');
boxDiv.appendChild(emptyDiv);

var bloco2Div = document.createElement('div');
bloco2Div.className = 'text-three';
bloco2Div.textContent = bio3;
emptyDiv.appendChild(bloco2Div); 
var img5Div = document.createElement('div');
emptyDiv.appendChild(img5Div);

var img5 = document.createElement('img');
img5Div.appendChild(img5); //imagem

var bloco3Div = document.createElement('div');
bloco3Div.className = 'text-four';
bloco3Div.textContent = bio4;
emptyDiv.appendChild(bloco3Div); 

var img6Div = document.createElement('div');
emptyDiv.appendChild(img6Div);

var img6 = document.createElement('img');
img5Div.appendChild(img6); //imagem

var head4Div = document.createElement('div');
head4Div.className = 'text-one';
head4Div.textContent = donationinfo;
boxDiv.appendChild(head4Div); 

var bloco4Div = document.createElement('div');
bloco4Div.className = 'finalp';
bloco4Div.textContent = donationinfo;
boxDiv.appendChild(bloco4Div); //texto, três parágrafos



