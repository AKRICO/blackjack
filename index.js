let player = {
    name: "Player",
    chips: "222"
}

let cards = []
let sum = 0
let message = ""
let hasBlackJack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("card-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent =player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random()*13) + 1

    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}


function startGame() {
    isAlive = true
    let firstCard = getRandomCard() 
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()
    
}

function renderGame() {
sumEl.textContent = "Sum: " + sum
cardEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }

if (sum <= 20){
    message = "Do you want to draw a new card?"
} else if (sum === 21){
    message = "You've got Blackjack"
    hasBlackJack = true
} else {
    message = "You're out of the game"
    isAlive = false
}

messageEl.textContent = message


}


function newcard() {
    if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}
    }
    


