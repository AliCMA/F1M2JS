console.log("Scipt is geladen!");

const groentevak = document.getElementById('groente');
const fruitvak = document.getElementById('fruit');

function zetInFruitLa(fruit){
    console.log('Er is gekozen voor fruit!');


    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = fruit;
    nieuwElement.className = 'rood';
    fruitvak.appendChild(nieuwElement);
}

function ZetInGroenteLa(groente){
    console.log('Er is gekozen voor groente!');

    const nieuwElement = document.createElement('h2');
    nieuwElement.innerHTML = groente;
    nieuwElement.className = 'geel';
    groentevak.appendChild(nieuwElement);
}


