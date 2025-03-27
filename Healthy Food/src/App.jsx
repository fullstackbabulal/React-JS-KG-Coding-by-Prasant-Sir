import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/Heading'
import FoodItem from './components/FoodItem'
import Items from './components/Items'

function App() {
  let foodItems = ["Dal", "Rice", "Milk", "Ghee"];

  //let emptyMassage = foodItems.length === 0 ? <h3>I am still hungry.</h3> : null;
  return (
    <>
      <Heading />
      <Items foodItem={foodItems}></Items>
    </>
  );
}

export default App;

