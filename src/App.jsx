import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './component/Counter'
import AnotherCounter from './component/AnotherCounter'
import Counter3 from './component/Counter3'

function App() {

  return (
    <>
      <Counter  />
      <AnotherCounter/>
      <Counter3/>
    </>
  )
}

export default App
