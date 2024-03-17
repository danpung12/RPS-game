import Button from './Button';
import HandButton from './HandButton';
import HandIcon from './HandIcon';
import { getResult, RandomHand } from './utils';
import {useState} from 'react';



function App() {

  const [hand, setHand] = useState('rock');
  const [otherHand, setOtherHand] = useState('rock');
  const [total, setTotal] = useState([]);

  function handleButtonClick(nextHand){
    const nextOtherHand = RandomHand();
    const nextHistory = getResult(hand, otherHand);
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    setTotal([...total, nextHistory]);
  }

  function handleClear(){
    setTotal([]);
  }
  return (
    <div>
      <Button onClick={handleClear}> 처음부터 </Button>
      <p>{getResult(hand, otherHand)}</p>
      <div>
        <HandIcon value={hand}/>
        VS
        <HandIcon value={otherHand}/>

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
