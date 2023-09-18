
import { useState } from 'react';
import './App.css';

function App() {

  let [counter, setCounter] = useState(15);

  //add counter button
  const addCounter = () => {
    if (counter !== 20) {
      // counter = counter+1
      setCounter(counter + 1)
      console.log(counter);
    }
  }

  //sub counter button
  const subCounter = () => {
    if (counter !== 0) {
      // counter = counter-1;
      setCounter(counter - 1)
      console.log(counter);
    }
  }

  return (
    <div className='container'>
      <h1>Learned React useState Hook & conditional Rendering</h1>
      <h2>Chai aur react: {counter}</h2>
      <button onClick={addCounter} className='add-btn'>Add Value: {counter}</button>
      <button onClick={subCounter} className='sub-btn'>Remove Value: {counter}</button>
      <p className='para'>Counter : {counter}</p>
    </div>
  );
}

export default App;
