const HANDS = ['rock', 'scissor','paper'];


export function RandomHand(){
  const idx = random(HANDS.length);
  return HANDS[idx];
}

function random(n) {
  return Math.floor(Math.random() * n);
}

const WINS = {
  rock: 'scissor',
  scissor: 'paper',
  paper: 'rock',

};


export function getResult(a, b){
  if(WINS[a]===b) return '승리';
  if(WINS[b]===a) return '패배';
  return '무승부';

}