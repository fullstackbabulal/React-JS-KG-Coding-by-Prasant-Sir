import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppName from './components/AppName'
import EnterTodoApp from './components/EnterTodoApp'
import InputDate from './components/InputDate'
import AddButton from './components/AddButton'

function App() {

  return (
    <>
      <AppName/>
      <EnterTodoApp/>
      <InputDate></InputDate>
      <AddButton></AddButton>
    </>
  )
}

export default App
