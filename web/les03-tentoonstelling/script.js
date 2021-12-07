const myImage = document.getElementById('myImage');
const mytitle = document.getElementById('myTitle');
const myTekst = document.getElementById('myTekst');


let paintings = [
"img/painting0.jpg", 
"img/painting1.jpg", 
"img/painting2.jpg",
"img/painting3.jpg", 
"img/painting4.jpg",
"img/painting5.jpg"
];

let titles = [
    "De schilderijen van van Gogh ",
    "De rode wijngaard",
    "De sterrennacht",
    "Sterrennacht boven de Rh�ne",
    "Zonnebloemen",
    "Boerderij in de Provence"
    
];

let tekst = [
    "Dit is een schilderij van Gogh",
    "november 1888 Pesjkinmuseum Moskouw",
    "juni 1889 Museum of Modern Art New York",
    "september 1888 Mus�e d'Orsay Parijs",
    "januari 1889 Neue Pinakothek Munchen",
    "september 1888 National Gallery of Art Washington D.C."
];



function changeImage(index){
    mytitle.innerHTML = titles[index];
    myImage.src = paintings[index];
    myTekst.innerHTML = tekst[index];
}
