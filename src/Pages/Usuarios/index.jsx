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
    <section className="containerUsuarios">
      <p className="descricaoUsuarios">Membros ativos na jornada do respeito, foco e evolução.</p>
      <h1>LISTA DE USUÁRIOS</h1>

      {usuarios.map((usuario) => (
        <article className="content-usuarios" key={usuario.id}>
            
            <strong>Nome: </strong>{usuario.nome}
            <br/>
            <strong>Telefone: </strong> 11 {usuario.telefone}
            <br/>
            <strong>Email: </strong> {usuario.email}
            <br/>

            <button 
              className="delete" 
              onClick={() => deleteUsuarios(usuario.id)}>
              Deletar
            </button>
        </article>
      ))}

    </section>
  )
}
