import Button from './Button';
import HandButton from './HandButton';
import HandIcon from './HandIcon';
import { getResult, RandomHand } from './utils';
import {useState} from 'react';

const INITIAL_VALUE = 'rock';

function App() {

  const [hand, setHand] = useState('rock');
  const [otherHand, setOtherHand] = useState('rock');
  const [total, setTotal] = useState([]);
  const [bet, setBet] = useState(0);
  const [score, setScore] = useState(0);
  const [otherscore, setOtherScore] = useState(0);

  function handleButtonClick(nextHand){
    const nextOtherHand = RandomHand();
    const nextHistory = getResult(hand, otherHand);
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setTotal([...total, nextHistory]);
    if (nextHistory=='승리') setScore(score+bet);
    if (nextHistory=='패배') setOtherScore(otherscore+bet);
  }

  function handleClear(){
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    setTotal([]);
  }

  function handleBetChange(e){
      setBet(Number(e.target.value));
      
  }
  return (
    <div>
      <Button onClick={handleClear}> 처음부터 </Button>
    
      <div>
        {score} : {otherscore}
      </div>
      <div>
        <HandIcon value={hand}/>
        VS
        <HandIcon value={otherHand}/>

      </div>
      <div>
      <input type="number" value={bet} min={1} max={9} onChange={handleBetChange}/>;
        
        
      </div>
      <p>승부 기록: {total.join(', ')}</p>
      <div>
        <HandButton value ="rock" onClick={handleButtonClick}></HandButton>
        <HandButton value ="scissor" onClick={handleButtonClick}></HandButton>
        <HandButton value ="paper" onClick={handleButtonClick}></HandButton>

      </div>
    </div>
  );
}

export default App;
