let cards = [] //array - ordered list of items
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let startBtn = document.getElementById("start-btn")
let newcardBtn = document.getElementById("newcard-btn")
newcardBtn.disabled = true
startBtn.addEventListener("click", startGame)
newcardBtn.addEventListener('click', newCard)
console.log(newcardBtn.disabled)

let player =  {
    name: "Adrien",
    chips: 200,
    playerName: function() {
         console.log("Jeannot")
     }
}

 player.playerName(player.name)




 function sumChips() {
 let playerDisplay = document.getElementById("player-el")
 playerDisplay.innerHTML = player.name + ": " + player.chips + "$" 
 if( sum === 21) {
     player.chips += 50
    console.log(player.chips)
 } else if ( sum > 21 && sum != 0) {
	 player.chips -= 5
	 console.log(player.chips)
 }
 }

function getRandomCard() {
	console.log(newcardBtn.disabled)
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber === 1){
       return randomNumber = 11
    } else if (randomNumber > 10) {
       return randomNumber = 10
    } else {
        return randomNumber
    }
}

function startGame() {
    newcardBtn.style.backgroundColor = "goldenrod";
    newcardBtn.style.color = "#016f32";
    newcardBtn.disabled = false
	hasBlackJack = false
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()
    console.log(newcardBtn.disabled)
}

function renderGame() {
    cardsEl.textContent = "Cards: " + " " + cards.join(" ") + " "
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
    console.log(newcardBtn.disabled)
    sumChips()
}


function newCard() {
    if (isAlive === true && hasBlackJack === false) {
     let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
    console.log(newcardBtn.disabled)
    }
}