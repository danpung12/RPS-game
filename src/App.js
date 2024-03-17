import Button from './Button';
import HandButton from './HandButton';
import { getResult } from './utils';
import {useState} from 'react';

function getResult(me, other){
  const comparison = compareHand(me,other);
  if (comparison)

}


function App() {

  const [hand, setHand] = useState('rock');
  const [otherHand, setOtherHand] = useState('scissor');

  function handleClick(value) { console.log(value)};
  return (
    <div>
      <Button> 처음부터 </Button>
      <HandButton value="rock" onClick={handleClick} />
      <HandButton value="scissor" onClick={handleClick} />
      <HandButton value="paper" onClick={handleClick} />
    </div>
  );
}

export default App;
