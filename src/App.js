import { useState } from 'react';
import React from 'react';
import './App.css';

function App() {
  const [inputA, setInputA] = useState('');
  const [inputB, setInputB] = useState('');
  const [result, setResult] = useState('');

  const clear = () =>{
    setInputA(' ');
    setInputB(' ');
    setResult(' ');
  };
  const calculate = () =>{
    try{
      setResult(eval(inputA + inputB));
    }
    catch(e){
      setResult(e);
    }
    
  }

  return (
    <>
        <input type='number'  value={inputA}
          onChange={e => setInputA(parseInt(e.target.value))}></input> +
         <input type='number'  value={inputB}
          onChange={e => setInputB(parseInt(e.target.value))}></input>= {result} <br></br><br></br>
        <button onClick={calculate}>Calculate</button>  <button onClick={clear}>Clear Fields</button>
    </>
  )

}

export default App;
