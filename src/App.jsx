import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'


function App() {

  return (
    <div>
      <Header />
      <h2 id='buscador'>"Buscador de usuarios"</h2>
      <input id='query'></input>
      <button id='botonsearch'></button>
    </div >
  )
}

export default App
