let player = {
    name: "Player",
    chips: 200
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageAsk = document.getElementById("message-ask")
let messageSum = document.getElementById("message-sum")
let gameCards = document.getElementById("cards")
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
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    gameCards.innerHTML = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        let cardImage = document.createElement("img")
        cardImage.src = cardImages[cards[i] - 1]
        cardImage.style.width = "80px"
        gameCards.appendChild(cardImage)
    }

    messageSum.textContent = "Sum: " + sum
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
        sum+=card
        cards.push(card)
        renderGame()
    }

}