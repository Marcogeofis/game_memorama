const cardArray = [
    {
        name: 'fries',
        img: './images/fries.png'
    },
    {
        name: 'manzana',
        img: './images/fries.png'
    },
    {
        name: 'pera',
        img: './images/fries.png'
    },
    {
        name: 'platano',
        img: './images/fries.png'
    },
    {
        name: 'higo',
        img: './images/fries.png'
    },
    {
        name: 'pizza',
        img: './images/fries.png'
    },
    {
        name: 'fries',
        img: './images/fries.png'
    },
    {
        name: 'manzana',
        img: './images/fries.png'
    },
    {
        name: 'pera',
        img: './images/fries.png'
    },
    {
        name: 'platano',
        img: './images/fries.png'
    },
    {
        name: 'higo',
        img: './images/fries.png'
    },
    {
        name: 'pizza',
        img: './images/fries.png'
    },
];


cardArray.sort(()=> 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');

function createBoard(){
    for (let i = 0; i < 10; i++){
        const card = document.createElement('img');
        card.setAttribute('src', './images/images.png');
        console.log(card, i);
    }
}

createBoard();










