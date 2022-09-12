//step 1 Card options
const cardArray = [
    {
        name: 'amigos_fantasmas',
        img: './images/amigos_fantasmas.png'
    },
    {
        name: 'calabasas',
        img: './images/calabasas.png'
    },
    {
        name: 'familia_rivera',
        img: './images/familia_rivera.png'
    },
    {
        name: 'fantasmas',
        img: './images/fantasmas.png'
    },
    {
        name: 'gatito',
        img: './images/gatito.png'
    },
    {
        name: 'familia_cortes',
        img: './images/familia_cortes.png'
    },
    {
        name: 'amigos_fantasmas',
        img: './images/amigos_fantasmas.png'
    },
    {
        name: 'calabasas',
        img: './images/calabasas.png'
    },
    {
        name: 'familia_rivera',
        img: './images/familia_rivera.png'
    },
    {
        name: 'fantasmas',
        img: './images/fantasmas.png'
    },
    {
        name: 'gatito',
        img: './images/gatito.png'
    },
    {
        name: 'familia_cortes',
        img: './images/familia_cortes.png'
    },
];


cardArray.sort(()=> 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultDisplay = document.querySelector('#result');


let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];


// step 2 creat your board
function createBoard(){
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', './images/halloween.png');
        card.setAttribute('data-id', i); 
        card.width = 100;
        card.height = 100;
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}
createBoard();


// check for matches
function checkMatch(){
    const cards = document.querySelectorAll('img');
    const optionsOneId = cardsChosenIds[0];
    const optionsTwoId = cardsChosenIds[1];

    if (optionsOneId == optionsTwoId){
        cards[optionsOneId].setAttribute('src', './images/halloween.png');
        cards[optionsTwoId].setAttribute('src', './images/halloween.png');
        alert('You have clicked the same image!')    
    }

    console.log('check for match!');
    if (cardsChosen[0] == cardsChosen[1]){
        alert('You found a match!!');
        cards[optionsOneId].setAttribute('src', './images/white.png');
        cards[optionsTwoId].setAttribute('src', './images/white.png');
        cards[optionsOneId].removeEventListener('click', flipCard);
        cards[optionsTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen)
    } else {
        cards[optionsOneId].setAttribute('src', './images/halloween.png');
        cards[optionsTwoId].setAttribute('src', './images/halloween.png');
        alert('Sorry try again!')
    }
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];

    if(cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = 'Congratulations you found them all!';
    }


}

// step  3 create flipcard
function flipCard(){
    const cardId = this.getAttribute('data-id');
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    console.log(cardsChosen);
    console.log(cardsChosenIds);
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout ( checkMatch, 500)
    }
}








