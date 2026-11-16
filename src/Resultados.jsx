import React from "react";

function Resultados(props) {

    const usuarios = props.resultado || [];



    return (
        <ul id="resultados">
            {
                usuarios.map((usuario) => (
                    <li key={usuario.id}>
                        <p>Nombre: <b>{usuario.firstName} {usuario.lastName}</b></p>
                        <p>Email:{usuario.email}</p>
                        <img src={usuario.image} alt={usuario.firstName} width="50" />
                    </li>
                ))}

        </ul>
    );
}

export default Resultados;
