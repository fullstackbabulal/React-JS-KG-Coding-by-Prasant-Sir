import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './components/Heading';
import {Slogan} from './components/Slogan';
import CurrentDateTime from './components/CurrentDateTime';

function App() {

  return (
    <>
    <Heading/>
    <Slogan/>
    <CurrentDateTime></CurrentDateTime>
    </>
  )
}

export default App
