let player = {
    name: "Player",
    chips: 200
}

let computer = {
    name: "Computer",
    cards: [],
    sum: 0,
    hasBlackJack: false,
    isAlive: false
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageAsk = document.getElementById("message-ask")
let messageSum = document.getElementById("message-sum")
let gameCards = document.getElementById("cards")
let computerCards = document.getElementById("computer-cards")
let computerSum = document.getElementById("computer-sum")
let playerSave = document.getElementById("playerSave")
playerSave.textContent = player.name + ": $" + player.chips

const cardImages = [
    "images/ace.png", "images/2.png", "images/3.png", "images/4.png",
    "images/5.png", "images/6.png", "images/7.png", "images/8.png",
    "images/9.png", "images/10.png", "images/ace.png"
];

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 11) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    computer.isAlive = true
    
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    
    let compFirstCard = getRandomCard()
    let compSecondCard = getRandomCard()
    computer.cards = [compFirstCard, compSecondCard]
    computer.sum = compFirstCard + compSecondCard
    
    renderGame()
}

function renderGame() {
    gameCards.innerHTML = "Player Cards:"
    for (let i = 0; i < cards.length; i++) {
        let cardImage = document.createElement("img")
        cardImage.src = cardImages[cards[i] - 1]
        cardImage.style.width = "80px"
        gameCards.appendChild(cardImage)
    }

    computerCards.innerHTML = "Computer Cards:"
    for (let i = 0; i < computer.cards.length; i++) {
        let cardImage = document.createElement("img")
        cardImage.src = cardImages[computer.cards[i] - 1]
        cardImage.style.width = "80px"
        computerCards.appendChild(cardImage)
    }

    messageSum.textContent = "Sum: " + sum
    computerSum.textContent = "Sum: " + computer.sum

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Congratulations! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You lose!"
        isAlive = false
    }
    messageAsk.textContent = message
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
        if (isAlive === false) {
            computerTurn()
        }
    }
}

function stick() {
    if (isAlive === true && hasBlackJack === false) {
        isAlive = false
        computerTurn()
    }
}

function computerTurn() {
    while (computer.sum < 17 && computer.isAlive) {
        let card = getRandomCard()
        computer.cards.push(card)
        computer.sum += card
        if (computer.sum > 21) {
            computer.isAlive = false
        }
    }
    renderGame()
    checkWinner()
}

// updated checkWinner function 
function checkWinner() {
    // Check if player or computer has Blackjack
    if (sum === 21) {
        message = "You win with Blackjack!";
    } else if (computer.sum === 21) {
        message = "Computer wins with Blackjack!";
    // Check if either player exceeds 21
    } else if (sum > 21) {
        message = "Computer wins!";
    } else if (computer.sum > 21) {
        message = "You win!";
    // Check if the player or computer is alive and compare sums
    } else if (!isAlive && !computer.isAlive) {
        message = "Both lose!";
    } else if (sum > computer.sum) {
        message = "You win!";
    } else if (sum < computer.sum) {
        message = "Computer wins!";
    } else {
        message = "It's a tie!";
    }
    messageAsk.textContent = message;
}
