/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//for first assingment
//import Heading from './Heading'     //Importing and creating components in react

/*function App() {
  return (
  <div className='App'>
    This is my first lab.
  <Heading />
  </div>
  );
}

export default App;
//import "./App.css";

//2nd react assingment of creaing cards
import Card from './Card';
function App() {
  return (
    <div style={{display: "flex" , flexDirection: "column", alignItems: "center"}}> 
      <h1 >Task: Add three Card elements</h1>
      <Card h2 = "First card's h2" h3 = "First card's h3" />
      <Card h2 = "Second card's h2" h3= "Second card's h3"/>
      <Card h2="Third card's h2" h3="Third card's h3" />

    </div>
  );
}

export default App;
import React from 'react';
import './App.css';
function App() {
  const handleClick = () => {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt("Type a number:")
    alert(`Computer number: ${randomNum} , Your Guess: ${userInput} `);
  }
  return (
    <div className='container'>
      <h1>Task: Add a button and handle a click event</h1>
      <button onClick={handleClick}>Guess the number between 1 and 3.</button>
    </div>
  );
}

export default App;*/
 //Assignment Login and Logout Buttons


 /*import Homepage from './Homepage';
import LoginButton from './LoggedinButton';
import LogoutButton from './LoggedoutButton';
import  { useState } from 'react';
import './App.css';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const login = () => setLoggedIn(true);
  const logout = () => setLoggedIn(false);
  return (
    <>
      {loggedIn ?
       ( <div>
          <Homepage />
          <LogoutButton logout={logout} />
        </div> )
      : ( <LoginButton login = {login} /> ) }
    </>
    

  );
   
}

export default App;*/

/*import ReactPlayer from "react-player";

function App() {

  const bird1 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3"
  );

  const bird2 = new Audio(
    "https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3"
  );

  function toggle1() {
    if (bird1.paused) {
      bird1.play();
    } else {
      bird1.pause();
    }
  };
  function toggle2() {
    if (bird2.paused) {
      bird2.play();

    }else {
      bird2.pause();
    }
  }

  return (
    <div>
      <h1> Welcome to the Collection of Bird Vocallizations!</h1>
      <button onClick={toggle1}>Caspian Tern 1</button>
      <button onClick={toggle2}>Caspian Tern 2</button>
    </div>
  );
}

export default App;*/


import { useState, useRef } from "react"; 
import "./App.css";

function App() { 
  const inputRef = useRef(null); 
  const [result, setResult] = useState(null); 
  const lastOperationRef = useRef(null); // <- needed for keyboard support

  function plus(e) {
    e.preventDefault();
    const input = Number(inputRef.current.value);
    setResult((prevResult) => prevResult === null ? input : prevResult + input);
    lastOperationRef.current = plus;
  }

  function minus(e) {
    e.preventDefault();
    const input = Number(inputRef.current.value);
    setResult((prevResult) => prevResult === null ? input : prevResult - input);
    lastOperationRef.current = minus;
  }

  function times(e) {
    e.preventDefault();
    const input = Number(inputRef.current.value);
    setResult((prevResult) => prevResult === null ? input : prevResult * input);
    lastOperationRef.current = times;
  }

  function divide(e) {
    e.preventDefault();
    const input = Number(inputRef.current.value);
    if (input === 0) {
      alert('Cannot divide by zero');
    } else {
      setResult((prevResult) => prevResult === null ? input : prevResult / input);
    }
    lastOperationRef.current = divide;
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(null);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      if (lastOperationRef.current) {
        lastOperationRef.current(e);
      } else {
        plus(e); // Default to addition if no operation was clicked yet
      }
    }
  }

  return ( 
    <div className="App"> 
      <h1>Simplest Working Calculator</h1> 
      <form>
        <p><strong>Result:</strong> {result !== null ? result : "N/A"}</p>
        <input
          ref={inputRef}
          type="number"
          placeholder="Type a number"
          onKeyDown={handleKeyDown}
          aria-label="Number input"
        />
        <button onClick={plus}>Add</button>
        <button onClick={minus}>Subtract</button>
        <button onClick={times}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
      </form>
    </div> 
  ); 
}

export default App;

 