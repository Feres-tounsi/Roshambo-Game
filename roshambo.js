// Here we're declaring the constant and the variable of our code to let them in the HTML
// code each element is geted by his ID or name or selector
const PC = document.getElementById('pc')
const Player = document.getElementById('player')
const resultDisplay = document.getElementById('result')
const theChoices = document.querySelectorAll('button')
const userScoreDisplay=document.getElementById('user_score')
const pcScoreDisplay=document.getElementById('pc_score')
let userChoice
let computerChoice
let result
let userScore=0
let pcScore=0

theChoices.forEach(choice => choice.addEventListener('click', (i) => {
  userChoice = i.target.id
  Player.innerHTML = userChoice
  generatePC()
  getResult()
}))

// this function will generate a random number to the computer
// so i let the numbers between 1 and 3 equal to the action of the computer

function generatePC() {
  const randomNumber = Math.floor(Math.random() * 3) + 1

  if (randomNumber === 1) {
    computerChoice = 'rock'
  }
  if (randomNumber === 2) {
    computerChoice = 'scissors'
  }
  if (randomNumber === 3) {
    computerChoice = 'paper'
  }
  PC.innerHTML = computerChoice
}

// in this function we will get the results of the game between the computer and the user
// i let the if conditions to describe the actions of the players in each of the 3 cases

function getResult() {
  if (computerChoice === userChoice) {
    result = 'Oh, draw!'
  }
  if (computerChoice === 'rock' && userChoice === "paper") {
    result = 'Its Amazing! You did it  😃'
    userScore++
  }
  if (computerChoice === 'rock' && userChoice === "scissors") {
    result = 'Oh Noo !🙁'
    pcScore++
  }
  if (computerChoice === 'paper' && userChoice === "scissors") {
    result = 'Its Amazing! You did it  😃'
    userScore++
  }
  if (computerChoice === 'paper' && userChoice === "rock") {
    result = 'Oh Noo !🙁'
    pcScore++
  }
  if (computerChoice === 'scissors' && userChoice === "rock") {
    result = 'Its Amazing! You did it  😃'
    userScore++
  }
  if (computerChoice === 'scissors' && userChoice === "paper") {
    result = 'Oh Noo !🙁'
    pcScore++
  }
  resultDisplay.innerHTML = result
  userScoreDisplay.innerHTML = userScore
  pcScoreDisplay.innerHTML = pcScore 
}
// The innerHTML property returns the HTML content (innerHTML) of an element