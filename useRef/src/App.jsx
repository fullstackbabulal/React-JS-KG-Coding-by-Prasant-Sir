import { useReducer, useRef} from 'react'
import './App.css'
import { Container } from './Component/Container'
import { Heading } from './Component/Heading'
import { InputText } from './Component/InputText'
import { DueDate } from './Component/DueDate'
import { AddButton } from './Component/AddButton'

function App() {
  const [newTodoItems, dispatchTodoItems] = useReducer();

  return (
    <>
      <Container>
      <Heading/>
      <InputText/>
      <DueDate/>
      <AddButton/>
      </Container>
    </>
  )};
export default App;
