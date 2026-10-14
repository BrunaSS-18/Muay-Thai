import Box from "../../Components/Box"
import BoxTreinamento from "../../Components/BoxTreinamento"
import img1 from "../../assets/img/icons/tik-tok.png"
import "./Tecnicas.css"

export default function index() {
  return (
    <main className='container'>
      <section className='secao-tecnicas'>
        
        <div className='tecnicas-header'>
            <p className='descricaoTecnicas'>Conheça os fundamentos e refinamentos que fazem do Muay Thai a Arte das Oito Armas.</p>
            <h1 className='tituloPrincipal'>TÉCNICAS</h1>
        </div>

        <div className='faixa-categoria'>
            <h2 className='tituloTecnicas'>Chutes</h2>
        </div>

        <div className='box-cards'>
            <Box
                title="Teep"
                description="Golpe fundamental de empurrão usado para manter a distância do adversário, quebrar o ritmo de ataque e criar oportunidades de contra-ataque."
                img={img1}
            />
            <Box
                title="Low Kick"
                description="Golpe de perna baixa usado para atacar o tronco do adversário, realizado com a perna flexionada e o pé apontado para frente."
                img={img1}
            />
            <Box
                title="High Kick"
                description="Golpe de perna alta usado para atacar a cabeça ou o tronco do adversário, realizado com a perna estendida e o pé apontado para cima."
                img={img1}
            />
        </div>

        <div className='faixa-categoria'>
            <h2 className='tituloTecnicas'>Socos & Golpes</h2>
        </div>

        <div className='box-cards'>
            <Box
                title="Jab"
                description="Golpe de punho frontal, geralmente é usado para manter a distância do adversário e criar oportunidades de ataque."
                img={img1}
            />
            <Box
                title="Direto"
                description="Golpe de punho direto, geralmente desferido com a mão traseira, visando atingir o adversário com força e precisão."
                img={img1}
            />
            <Box
                title="Uppercut"
                description="Golpe de punho ascendente, usado para atingir o queixo do adversário, geralmente desferido de baixo para cima."
                img={img1}
            />
        </div>

        <div className='faixa-categoria'>
            <h2 className='tituloTecnicas'>Joelho & Cotovelo</h2>
        </div>

        <div className='box-cards'>
            <Box
                title="Joelhada em Clinch"
                description="Executada durante o domínio do pescoço do adversário, aplicando joelhadas potentes na zona das costelas e tronco."
                img={img1}
            />
            <Box
                title="Cotovelo"
                description="Golpe de cotovelo, usado para atingir o tronco ou a cabeça do adversário, geralmente desferido com força e precisão."
                img={img1}
            />
            <Box
                title="Joelhada Frontal"
                description="Golpe de joelho desferido frontalmente, usado para atingir o tronco ou a cabeça do adversário, realizado com força e precisão."
                img={img1}
            />
        </div>

        <div className='tecnicas-header'>
            <h1 className='tituloPrincipal'>Princípios de Treinamento</h1>
        </div>

        <div className='box-treinamento-container'>
            <BoxTreinamento
                title="Rotação de Quadril"
                description="Todo golpe no Muay Thai é impulsionado pela rotação do quadril. Sem ela, você desfere golpes de braço ou perna que carregam apenas uma fração de sua força potencial."
            />
            <BoxTreinamento
                title="Condicionamento da Canela"
                description="O chute circular é desferido com a canela, não com o pé. O treino diário no saco de pancadas e o trabalho com aparadores de chute calcificam gradualmente o osso, aumentando a resistência ao impacto."
            />
            <BoxTreinamento
                title="Guarda e Timing"
                description="A pontuação no Muay Thai valoriza a técnica limpa e o dano causado. Um lutador que desfere socos com a guarda baixa ficará exposto a contragolpes que anulam sua própria ofensiva."
            />
            <BoxTreinamento
                title="Fluxo de Combinação"
                description="As técnicas individuais são aprendidas isoladamente, mas aplicadas em combinações. Pratique as transições entre socos, chutes, cotoveladas e o clinch até que sejam fluidas."
            />
        </div>

      </section>
    </main>
  )
}