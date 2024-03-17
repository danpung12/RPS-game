const HANDS = ['rock', 'scissor','paper'];


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