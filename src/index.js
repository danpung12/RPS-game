import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';





function getResult(left, right){
  if (WINS[left] === right) return '승리';
  else if (left === right) return '패배';
  return '무승부';
}


const me = 'rock';
const other = 'scissor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />,
    <h1 id="title">가위바위보</h1>
    <h2>{getResult(me, other)}</h2>

  
    

  </>
);


