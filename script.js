let hasBlackJack = false;
var sum = 0;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let btnEl = document.getElementById("start-btn-el");
let cardsEl = document.querySelector("#cards-el");
let newcardEl = document.querySelector("#newcard-btn-el")
let cardsmsg = ""; // Declare cardsmsg without initialization
var cards = [];
let isAlive = true;

function startGame() {
    sumEl.textContent = "Sum: ";
    while (cards.length > 0) {
        console.log("removing element");
        cards.pop();
    }
    cardsEl.textContent = "Cards: ";
    sum = 0;
    var firstCard = getRandom();
    var secondCard = getRandom();
    sum = firstCard + secondCard;
    cards.push(firstCard);
    cards.push(secondCard);
    isAlive = true;
    hasBlackJack = false;
    renderGame();
}


function renderGame() {
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    if (sum < 21) {
        message = "Do you want to draw another card?";
    } else if (sum === 21) {
        hasBlackJack = true;
        message = "WoHoooo! You've got the BlackJack";
    } else {
        message = "Alas! You're out of the game";
        isAlive = false;
    }
    messageEl.textContent = message;
    console.log(message);
}

function newCardFunction() { 
    console.log("drawing new card");
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandom();
        cards.push(card)
        sum += card;
        renderGame();
    }
}

function getRandom() {
    let cardnumber = Math.floor(Math.random() * 9) + 1;
    return cardnumber;
}



