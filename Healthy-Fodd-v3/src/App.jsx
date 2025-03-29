import { useState } from "react";
import "./App.css";
import Container from "./components/Container";
import Heading from "./components/Heading";
import InputBox from "./components/InputBox";
import ErrorMessage from "./components/ErrorMessage";
import FoodList from "./components/FoodList";

function App() {
  let [foodItem, setFoodItem] = useState([]);

  let keyOnDown = (event) => {
    if (event.key === "Enter") {
      let valueOfEvent = event.target.value;
      let arrValue = [...foodItem, valueOfEvent];
      event.target.value = "";
      setFoodItem(arrValue);
    }
  };

  let removeItem = (event) => {
    console.log(event.nativeEvent.pointerId) 
  };

  return (
    <Container>
      <Heading />
      <InputBox keyOnDown={keyOnDown} />
      <ErrorMessage foodItem={foodItem} />
      <FoodList foodItem={foodItem} removeItem={removeItem} />
    </Container>
  );
}

export default App;
