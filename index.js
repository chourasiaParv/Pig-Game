'use strict';

const player0E1 =document.querySelector('.player--0');
const player1E1 =document.querySelector('.player--1');
const currentE0 = document.querySelector('#current--0');
const currentE1 = document.querySelector('#current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const diceE1 = document.querySelector('.dice');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');

let scores, currentScore, activePlayer, playing;
const init = function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
  
    score0El.textContent = 0;
    score1El.textContent = 0;
    currentE0.textContent = 0;
    currentE1.textContent = 0;
  
    diceE1.classList.add('hidden');
    player0E1.classList.remove('player--winner');
    player1E1.classList.remove('player--winner');
    player0E1.classList.add('player--active');
    player1E1.classList.remove('player--active');
  };
  init();

const switchFun = function(){
    document.querySelector(`#current--${activePlayer}`).textContent =0;
    currentScore =0;
    activePlayer = activePlayer === 0 ? 1 : 0;
   player0E1.classList.toggle('player--active');
   player1E1.classList.toggle('player--active');
};

document.querySelector('#score--0').textContent = 0;
document.querySelector('#score--1').textContent = 0;
document.querySelector('.dice').classList.add('hidden');

document.querySelector('.btn--roll').addEventListener('click',function(){
if(playing ){ 
    const mathNum = Math.trunc(Math.random()*6)+1;
    diceE1.classList.remove('hidden');
    diceE1.src = `dice-${mathNum}.png`;
    
    if(mathNum !==1){
        currentScore +=mathNum;
        // currentE0.textContent =currentScore;
        document.querySelector(`#current--${activePlayer}`).textContent =currentScore;
    }else{
        switchFun();
    }
}
});

btnHold.addEventListener('click',function(){
    if(playing){
scores[activePlayer] += currentScore;
document.querySelector(`#score--${activePlayer
}`).textContent =scores[activePlayer]; 

if(scores[activePlayer]  >=100){
    playing =false;
    diceE1.classList.add('hidden');
    document.querySelector(`.player--${activePlayer}`).classList.add ('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove ('player--active');
}else{
switchFun();
}
    }
});

btnNew.addEventListener('click', init);