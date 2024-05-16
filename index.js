let firstCard = 10
let secondCard = 4
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

let messageAsk = document.getElementById("message-ask")
console.log(messageAsk)

function startGame() {
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

