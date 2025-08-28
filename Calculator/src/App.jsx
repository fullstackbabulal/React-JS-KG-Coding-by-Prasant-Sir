// Importing 'useState' hook from React.
// Hooks are special functions in React that let us use features like state in functional components.
import { useState } from 'react';

// Importing stylesheet and custom components (Display, Container, Buttons)
import './App.css';
import Display from './components/Display';
import Container from './components/Container';
import Buttons from './components/Buttons';

function App() {
  // List of buttons that will appear on the calculator
  // Includes numbers, operators, decimal point, clear (c), and equals (=)
  let calculatoButton = [
    'c', '1', '2', '+', 
    '3', '4', '-', 
    '5', '6', '*', 
    '7', '8', '/', 
    '=', '9', '0', '.'
  ];

  // 'calVal' is a state variable to store current value (what user types or result)
  // 'setCalVal' is a function to update that value
  // Initially it's empty ([]), meaning nothing is shown on calculator screen
  const [calVal, setCalVal] = useState([]);

  // Function that runs when a button is clicked
  let hendelButtonClick = (event) => {
    // Get the text of the clicked button (for example: '1', '+', '=', 'c')
    let onButtonClick = event.target.innerText;

    // CASE 1: If "c" button is clicked → Clear the display
    if (onButtonClick == 'c') {
      setCalVal(''); // set value back to empty string
    } 
    
    // CASE 2: If "=" button is clicked → Calculate the result
    else if (onButtonClick == '=') {
      // 'eval()' takes a string like "2+3*4" and evaluates it to "14"
      // ⚠️ In real-world apps eval() is unsafe, but okay for a small project/demo
      const result = eval(calVal);
      setCalVal(result); // Update the display with result
    } 
    
    // CASE 3: Any other button (numbers/operators/decimal) → Add it to the display
    else {
      // Combine the previous value with the new button pressed
      const newDisplayValue = calVal + onButtonClick;
      // Update display with the new combined value
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>
      {/* Main container for calculator layout */}
      <Container>
        
        {/* Display component → shows current value or result on screen */}
        <Display displayValue={calVal} />

        {/* Another container for buttons */}
        <Container>
          {/* Buttons component → generates all calculator buttons */}
          {/* Passing 2 things as props:
              1. calculatoButton → list of all button labels
              2. hendelButtonClick → function to run when a button is clicked
          */}
          <Buttons 
            calculatoButton={calculatoButton} 
            hendelButtonClick={hendelButtonClick} 
          />
        </Container>

      </Container>
    </>
  )
}

// Export App component so it can be used in index.js (entry point of React app)
export default App
