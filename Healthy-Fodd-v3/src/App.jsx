// Import React 'useState' hook for managing state inside the component
import { useState } from "react";

// Importing CSS file for styling
import "./App.css";

// Importing custom components for building the app
import Container from "./components/Container";     // Wrapper component for layout
import Heading from "./components/Heading";         // Displays the app heading/title
import InputBox from "./components/InputBox";       // Input field for typing new food items
import ErrorMessage from "./components/ErrorMessage"; // Shows error if no items are available
import FoodList from "./components/FoodList";       // Displays list of food items

function App() {
  // 'foodItem' is an array that stores all food items
  // 'setFoodItem' is the function used to update that array
  // Initially, it's empty ([])
  let [foodItem, setFoodItem] = useState([]);

  // Function that runs when a key is pressed inside the input box
  let keyOnDown = (event) => {
    // If the pressed key is "Enter"
    if (event.key === "Enter") {
      // Get the text typed in the input box
      let valueOfEvent = event.target.value;

      // Create a new array with old items + new item (spread operator)
      let arrValue = [...foodItem, valueOfEvent];

      // Clear the input box after pressing Enter
      event.target.value = "";

      // Update the state with the new array
      setFoodItem(arrValue);
    }
  };

  /*
  // Alternate removeItem function (without confirmation)
  // Removes an item based on its index
  let removeItem = (index) => {
    let newArry = foodItem.filter((item, i) => i !== index);
    setFoodItem(newArry);
  };
  */

  // Function to remove an item from the list
  let removeItem = (index) => {
    // Ask the user for confirmation before deleting
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this item?"
    );

    // If user confirms deletion
    if (isConfirmed) {
      // Filter out the item at the given index
      let newArry = foodItem.filter((item, i) => i !== index);

      // Update the state with the new array (without deleted item)
      setFoodItem(newArry);
    }
  };

  return (
    // Main container that holds everything
    <Container>
      {/* Heading component → shows the title of the app */}
      <Heading />

      {/* InputBox component → user types new food items here */}
      {/* 'keyOnDown' is passed as a prop so InputBox can call it when Enter is pressed */}
      <InputBox keyOnDown={keyOnDown} />

      {/* ErrorMessage component → shows message if no food items are in the list */}
      <ErrorMessage foodItem={foodItem} />

      {/* FoodList component → displays all food items */}
      {/* 'foodItem' (data) and 'removeItem' (delete function) are passed as props */}
      <FoodList foodItem={foodItem} removeItem={removeItem} />
    </Container>
  );
}

// Export App component so it can be used in index.js (React entry file)
export default App;
