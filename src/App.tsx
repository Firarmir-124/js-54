import React, {useState} from 'react';
import './App.css';
import OnCell from "./Components/OnCell/OnCell";
import Tries from "./Components/Tries/Tries";
import Btn from "./Components/Btn/Btn";


interface ary {
  id: string;
  hasItem: boolean;
  clicked: boolean;
  className: string[];
}

function App() {

  const createBlock = () => {
    const aryItems:ary[] = [];

    for(let i = 0; i < 36; i++) {
      const item = {
        id: `b${Math.floor(Math.random() * Date.now())}`,
        hasItem: false,
        clicked: false,
        className: ['onCell'],
      };
      aryItems.push(item)
    }

    const randomIndex = Math.floor(Math.random() * aryItems.length);
    aryItems[randomIndex].hasItem = true;

    return aryItems;
  }

  const [counter, serCounter] = useState(0);
  const [ary, setAry] = useState(createBlock);


  const victory = () => {
    const modalVictory = window.confirm('Победа, алмаз нашёлся !');
    if(modalVictory || !modalVictory) {
      reset();
    }
  }

  const clickItem = (id:string) => {
    serCounter(counter + 1);
    const copy = [...ary];
    const index = copy.findIndex(b => b.id === id);
    const completed = {...ary[index]};
    completed.clicked = true;
    completed.className.push('active')

    if (completed.hasItem) {
      completed.className.push('red');
      setTimeout(victory, 100)
    }

    copy[index] = completed;
    setAry(copy)
  }

  const reset = () => {
    const reset = createBlock();
    serCounter(0)
    setAry(reset)
  }

  return (
    <div className="App">
      <div className="grid">
        {
          ary.map((name, number) => (
            <OnCell className={ary[number].className.join(' ')} key={name.id} clickBlock={() => clickItem(name.id)}/>
          ))
        }

      </div>
      <Tries name={'tries: ' + counter}/>
      <Btn button={reset} name='Сбросить'/>
    </div>
  );
}

export default App;
