import React from 'react'
import "./Usuarios.css"
import { useState, useEffect } from 'react'

export default function index() {
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/usuarios")
            .then((response) => response.json())
            .then((data) => setUsuarios(data))
            .catch((error) => console.error(error));
    }, [])

    const deleteUsuarios = (id) => {
        fetch(`http://localhost:3000/usuarios/${id}`,{
          method: "DELETE"
        })
        .then(() => {
          setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
        })
        .catch((error) => console.error(error))
    }

  return (
    <section className="container usuarios">
      <h1> Lista de Usuarios</h1>

      {usuarios.map((usuario) => (
        <article className="content-usuarios" key={usuario.id}>
            
            <strong>Nome: {usuario.nome} </strong>
            <br/>
            <strong>Telefone: 11 {usuario.telefone} </strong>
            <br/>
            <strong>Email: {usuario.email} </strong>
            <br/>

            <button 
              className="delete" 
              onClick={() => deleteUsuarios(usuario.id)}>
              Deletar
            </button>
            <hr/>
        </article>
      ))}

    </section>
  )
}
