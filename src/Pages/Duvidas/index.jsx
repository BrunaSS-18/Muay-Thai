import "./Duvidas.css"
import "../../global.css"
import { useState, useEffect } from 'react'

export default function Index() {
    const [duvidas, setDuvidas] = useState([])
    const [textoDuvida, setTextoDuvida] = useState('')

    useEffect(() => {
        fetch("http://localhost:3000/duvidas")
            .then((response) => response.json())
            .then((data) => setDuvidas(data))
            .catch((error) => console.error(error));
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!textoDuvida.trim()) return

        fetch("http://localhost:3000/duvidas", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ pergunta: textoDuvida, resposta: "Aguardando resposta..." })
        })
        .then((res) => res.json())
        .then((novaDuvida) => {
            setDuvidas([...duvidas, novaDuvida])
            setTextoDuvida('')
        })
        .catch((err) => console.error(err))
    }

    return (
        <section className="duvida-container">
            <div className="duvida-section">
                <p className="descricaoDuvidas">A sua central de ajuda e esclarecimentos</p>
                <h1>DÚVIDAS</h1>
                
                {duvidas.map((duvida) => (
                    <div className="duvida-item" key={duvida.id}>
                        <p className="pergunta">{duvida.pergunta}</p>
                        <p className="resposta">{duvida.resposta}</p>
                    </div>
                ))} 
            </div>  

            <form className="duvida-form" onSubmit={handleSubmit}>
                <label className="duvida" htmlFor="duvida">Digite sua dúvida sobre o Muay thai</label>
                <textarea 
                    id="duvida" 
                    name="duvida" 
                    rows="5" 
                    cols="40" 
                    required
                    value={textoDuvida} 
                    onChange={(e) => setTextoDuvida(e.target.value)}
                ></textarea>
                <button type="submit" className="enviar">Enviar</button>
            </form>
        </section>
    )
}