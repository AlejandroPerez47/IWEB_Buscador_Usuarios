import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Resultados from './Resultados.jsx'
import { mock1 } from './constants/users.js'
import CONFIG from './config/config.js'




function App() {

  const [usuarios, setUsuarios] = useState(mock1.users);

  const descargarTodosLosUsuarios = async () => {

    if (CONFIG.use_server) {

      const respuesta = await fetch(CONFIG.server_url + "?limit=20");
      const datos = await respuesta.json();

      setUsuarios(datos.users);
    } else {
      setUsuarios(mock1);
    }
  };

  return (
    <div>
      <Header />
      <h2 id='buscador'>Buscador de usuarios</h2>
      <input id='query'></input>
      <button id='botonsearch'>Buscar</button>
      <button id='botonall' onClick={descargarTodosLosUsuarios}>Ver todos</button>
      <Resultados resultado={usuarios} />
    </div>
  )
}

export default App
