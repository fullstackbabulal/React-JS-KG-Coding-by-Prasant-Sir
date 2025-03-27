import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// Importing the CSS file for App's styling.
import './App.css'

// Importing the Container component to wrap other components with a styled container.
import Container from './components/Container'

// Importing the Heading component to display a heading in the app.
import Heading from './components/Heading'

// Importing the FoodItems component to display a list of food items.
import FoodItems from './components/FoodItems'

// Defining the App functional component.
function App() {
  // Defining a state 'foodList' with a list of food items, and a function 'setFoodList' to update it.
  let [foodList, setFoodList] = useState(["Rice", "Dal", "Curry", "Dahi", "Salad", "Paneer", "Pizza"]);
  
  // Defining the onChangeHandler function to add a new food item to the list when the 'Enter' key is pressed.
  let onChangeHandler = (event)=>{
    if(event.key === "Enter"){  // Checks if the 'Enter' key is pressed.
      let newFoodItem = event.target.value; // Gets the value from the input field.
      event.target.value=''; // Clears the input field after adding the food item.
      let newItems =[...foodList, newFoodItem]; // Creates a new list with the added food item.
      setFoodList(newItems); // Updates the foodList state with the new list.
    }
  }

  // Returning the JSX structure to render.
  return (
    <>
      {/* Wrapping Heading and FoodItems components with the Container component */}
      <Container>
        {/* Passing the onChangeHandler function as a prop to the Heading component */}
        <Heading onChangeHandler={onChangeHandler}/>
        {/* Passing the foodList state as a prop 'ItemList' to the FoodItems component */}
        <FoodItems ItemList={foodList}/>
      </Container>
    </>
  )
}

// Exporting the App component as the default export.
export default App

