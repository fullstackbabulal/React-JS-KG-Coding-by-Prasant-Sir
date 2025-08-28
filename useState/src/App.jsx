// ✅ Importing the useState hook from React
// This hook lets you add state to functional components
import { useState } from "react";

// ✅ Defining a static array of food items
// This could be used to display a list or dropdown in the UI
const foodItems = ["Sabzi", "Green Vegetable", "Roti", "Salt"];

// ✅ Initializing state using useState
// useState returns an array with two elements:
// [0] → the current state value
// [1] → a function to update that value
let textStateArr = useState("Food Item Entered by user"); // Initial value is a string
let textState = textStateArr[0];       // This holds the current value of the state
let setTextState = textStateArr[1];    // This is the function used to update the state

// ✅ Logging the current state value to the console
// This helps you debug and see what the initial value is
console.log(`Current value of textState: ${textState}`);

// ✅ Defining a function to handle changes in an input field
// This function will be triggered whenever the user types something
const handleOnChange = (event) => {
  console.log(event.target.value);     // Logs the value typed by the user

  // ❌ This line assigns the input value to a variable called textToShow
  // BUT textToShow is not defined anywhere, and it's not connected to state
  // ✅ Instead, you should use setTextState to update the state like this:
  // setTextState(event.target.value);
  textToShow = event.target.value;
};

// ✅ JSX return block (not shown here)
// This is where you'd use textState to display the current value
// and connect handleOnChange to an input field like:
// <input type="text" onChange={handleOnChange} />
return (
  <>
  
  </>
);
