import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Container from './components/Container';
import Buttons from './components/Buttons';


function App() {
  let calculatoButton = ['c', '1', '2', '+', '3', '4', '-', '5', '6', '*', '7', '8', '/', '=', '9', '0', '.']
  const [calVal, setCalVal] = useState([]);

  let hendelButtonClick = (event) =>{
    let onButtonClick = event.target.innerText;
    if(onButtonClick == 'c'){
      setCalVal('')
    }else if(onButtonClick == '='){
      const result = eval(calVal);
      setCalVal(result);
    }else{
      const newDisplayValue = calVal + onButtonClick;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <>
      <Container>
      <Display displayValue={calVal}/>
      <Container>
      <Buttons calculatoButton={calculatoButton} hendelButtonClick={hendelButtonClick}/>
      </Container>
      </Container>
    </>
  )
}

export default App
