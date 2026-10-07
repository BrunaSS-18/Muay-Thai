import "./Duvidas.css"
import "../../global.css"
import { useState, useEffect } from 'react'

export default function index() {
    const [duvidas, setDuvidas] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/duvidas")
            .then((response) => response.json())
            .then((data) => setDuvidas(data))
            .catch((error) => console.error(error));
    }, [])

  return (
    <section className="duvida-container">
        <div className="duvida-section">
            <h2>Perguntas Frequentes</h2>
            
        {duvidas.map((duvida) => (
            <div className="duvida-item" key={duvida.id}>
                <p className="pergunta">{duvida.pergunta}</p>
                <p className="resposta">{duvida.resposta}</p>
            </div>
        ))} 

        </div>  

        <form className="duvida-form" onSubmit={(e) => e.preventDefault()}>
            <label className="duvida" for="duvida">Digite sua dúvida:</label>
            <textarea id="duvida" name="duvida" rows="5" cols="40" required></textarea>
            <button type="submit" className="enviar">Enviar</button>
        </form>
    </section>
  )
}