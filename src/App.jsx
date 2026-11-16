import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Resultados from './Resultados.jsx'
import { mock1 } from './constants/users.js'




function App() {

  return (
    <div>
      <Header />
      <h2 id='buscador'>Buscador de usuarios</h2>
      <input id='query'></input>
      <button id='botonsearch'></button>
      <Resultados resultado={mock1.users} />
    </div >
  )
}

export default App
