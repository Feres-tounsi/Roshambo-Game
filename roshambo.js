const PC = document.getElementById('pc')
const Player = document.getElementById('player')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
const userScoreDisplay=document.getElementById('user_score')
const pcScoreDisplay=document.getElementById('pc_score')
let userChoice
let computerChoice
let result
let userScore=0
let pcScore=0

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  Player.innerHTML = userChoice
  generatePC()
  getResult()
}))

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