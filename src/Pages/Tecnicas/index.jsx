import React from 'react'
import Box from "../../Components/Box"
import BoxTreinamento from "../../Components/BoxTreinamento"

export default function index() {
  return (
    <main className='container'>
      <section className='d-flex secao'>
        
        <div className='tecnicas'>
            <p className='descricaoTecnicas'>Descrição das técnicas de Muay Thai.</p>
            <h1 className='tituloPrincipal'>Técnicas</h1>
        </div>

        <div className='chutes'>
            <h2 className='tituloTecnicas'>Chutes</h2>
        </div>

        <Box
            title="Titulo do componente"
            description="Este é um paragrafo de exemplo para o componente"
            img={img1}
        />

        <div className='socos e golpes'>
            <h2 className='tituloTecnicas'>Socos & Golpes</h2>
        </div>

        <Box
            title="Titulo do componente"
            description="Este é um paragrafo de exemplo para o componente"
            img={img1}
        />

        <div className='joelho & cotovelo'>
            <h2 className='tituloTecnicas'>Joelho & Cotovelo</h2>
        </div>

        <Box
            title="Titulo do componente"
            description="Este é um paragrafo de exemplo para o componente"
            img={img1}
        />

        <div className='tecnicas'>
            <h1 className='tituloPrincipal'>Principios de Treinamento</h1>
        </div>

        <BoxTreinamento
            title="Titulo do componente"
            description="Este é um paragrafo de exemplo para o componente"
        />

        <BoxTreinamento
            title="Titulo do componente"
            description="Este é um paragrafo de exemplo para o componente"
        />

        <BoxTreinamento
            title="Titulo do componente"
            description="Este é um paragrafo de exemplo para o componente"
        />

        <BoxTreinamento
            title="Titulo do componente"
            description="Este é um paragrafo de exemplo para o componente"
        />
        
      </section>
    </main>
  )
}
