import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './components/Container'
import Heading from './components/Heading'
import FoodItems from './components/FoodItems'

function App() {
  let foodList = ["Rice", "Dal", "Curry", "Dahi", "Salad", "Paneer", "Pizza"];
 let onChangeHandler = (event)=>console.log(event.target.value);
  return (
    <>
      <Container>
        <Heading onChangeHandler={onChangeHandler}/>
        <FoodItems ItemList={foodList}/>
      </Container>
    </>
  )
}

export default App
