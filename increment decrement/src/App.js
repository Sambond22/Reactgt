import { useState } from 'react';
import './App.css';
import { FaMinus } from 'react-icons/fa';
import { FaPlus } from 'react-icons/fa';


function App() {
 
// let x=0;
// they only change the value on console so use usestate
// function plushandler(){
  //   x=x+1;
  //   console.log(x);
  //   console.log("first");
  // }
  // function minushandler(){
  //   x=x-1;
  //   console.log(x);
  // }

  const [x,setvalue]=useState(0);
  function plushandler(){
      setvalue(x+1);
    }
    function minushandler(){
      setvalue(x-1);
    }
    function reset(){
      setvalue(0);
    }
  return (
    <div>
 
    <div className="App">
 
    <div className='wrapper'>
   
    <button onClick={plushandler} className='plus'><FaPlus className='mina'></FaPlus></button>
      <div className='displaay'>{x}</div>
      <button  onClick={minushandler} className='minus'><FaMinus className='mina'></FaMinus></button>
     
    </div>
    <button onClick={reset} className='resett'>Reset</button>
    </div>
    </div>
  );


}

export default App;
