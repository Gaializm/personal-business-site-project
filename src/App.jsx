import { useState } from 'react'
import { HashRouter, Routes, Route } from "react-router-dom";
import BelleApp from "./temps/BelleApp";
import GaiaApp from "./temps/GaiaApp";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <HashRouter>
      <header>
      </header>
      <main>
        <BelleApp />
        <GaiaApp />
      </main>
    </HashRouter>
  )
}

export default App
