'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice'); 
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden'); // Hides the dice at the start of the game

//Rolling dice functionality
btnRoll.addEventListener('click', function(){
    // 1.Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    //2. Display dice
        diceEl.classList.remove('hidden');
        diceEl.src = `img/dice-${dice}.png`;


        

    //3. Check for rolled 1: If true switch to next player 

})









