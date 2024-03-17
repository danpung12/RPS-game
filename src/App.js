import Button from './Button';
import HandButton from './HandButton';
import HandIcon from './HandIcon';
import { getResult, RandomHand } from './utils';
import {useState} from 'react';



function App() {

  const [hand, setHand] = useState('rock');
  const [otherHand, setOtherHand] = useState('rock');

  function handleButtonClick(nextHand){
    const nextOtherHand = RandomHand();
    setHand(nextHand);
    setOtherHand(nextOtherHand);
  }
  return (
    <div>
      <Button> 처음부터 </Button>
      <p>{getResult(hand, otherHand)}</p>
      <div>
        <HandIcon value={hand}/>
        VS
        <HandIcon value={otherHand}/>

      </div>
      <div>
        <HandButton value ="rock" onClick={handleButtonClick}></HandButton>
        <HandButton value ="scissor" onClick={handleButtonClick}></HandButton>
        <HandButton value ="paper" onClick={handleButtonClick}></HandButton>

      </div>
    </div>
  );
}

export default App;
