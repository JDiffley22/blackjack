let firstCard = 10
let secondCard = 9
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
let messageAsk = document.getElementById("message-ask")
let messageSum = document.getElementById("message-sum")

let gameCards = document.getElementById("cards")

function startGame() {

    gameCards.textContent = "Cards: " + firstCard + " " + secondCard
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

