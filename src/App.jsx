import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import Resultados from './Resultados.jsx'
import { mock1 } from './constants/users.js'
import CONFIG from './config/config.js'




function App() {

  const [usuarios, setUsuarios] = useState(mock1.users);
  const [textoBusqueda, setTextoBusqueda] = useState("");

  const descargarTodosLosUsuarios = async () => {

    if (CONFIG.use_server) {

      const respuesta = await fetch(CONFIG.server_url + "?limit=20");
      const datos = await respuesta.json();

      setUsuarios(datos.users);
    } else {
      setUsuarios(mock1);
    }
  };

  const buscarUsuario = async () => {
    if (CONFIG.use_server) {
      const respuesta = await fetch(CONFIG.server_url + "/search?q=john" + textoBusqueda);
      const datos = await respuesta.json();

      setUsuarios(datos.users);
    } else {
      const usuariosFiltrados = mock1.users.filter(usuario => usuario.firstName.toLowerCase().includes(textoBusqueda.toLowerCase())
      );
      setUsuarios(usuariosFiltrados);
    }
  }

  return (
    <div>
      <Header />
      <h2 id='buscador'>Buscador de usuarios</h2>
      <input id='query'></input>
      <button id='botonsearch' onClick={buscarUsuario}>Buscar</button>
      <button id='botonall' onClick={descargarTodosLosUsuarios}>Ver todos</button>
      <Resultados resultado={usuarios} />
    </div>
  )
}

export default App
