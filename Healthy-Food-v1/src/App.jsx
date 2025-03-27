import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './components/Container'
import Heading from './components/Heading'
import { FoodList } from './components/FoodList'





function App() {
let FoodItems = ["Rice", "Dal", "Curry", "Dahi", "Salad", "Paneer", "Pizza"];
  return (
    <Container>
    <Heading/>
    <FoodList ItemList={FoodItems}/>
    </Container>
  );
};

export default App;
