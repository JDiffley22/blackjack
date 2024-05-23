let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageAsk = document.getElementById("message-ask")
let messageSum = document.getElementById("message-sum")
let gameCards = document.getElementById("cards")

console.log(cards)

function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
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
    gameCards.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        gameCards.textContent += cards[i] + " "
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