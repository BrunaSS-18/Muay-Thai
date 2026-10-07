import React, { useEffect, useState } from 'react'
import '../../Pages/News/News.css'

export default function Listar() {
    const [usuario, setUsuario] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/news")
        .then((response) => response.json())
        .then((data) => setUsuario(data))
        .catch((error) => console.log(error))
    }, [])
  return (
    <section className='secao-listarUsuarios'>
        <h3 className='titulo-listagem'>Lista de usuários cadastrados</h3>

        {usuario.map((u) => (
            <div key={u.id} className="container-listagem">
                <h2>{u.nome}</h2>
                <p>{u.email}</p>
            </div>
        ))}
    </section>
  )
}
