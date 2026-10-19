import Box from "../../Components/Box"
import "./Home.css"

import img1 from "../../assets/imgGolpes/imgTeep.jpg"
import img2 from "../../assets/imgGolpes/imgAparador.jpg"
import img3 from "../../assets/imgGolpes/imgCotovelada.png"

export default function index() {
  return (
    <main className='container-principal'>
      <section className='secao-home'>
        
        <div className='banner'>
          <img 
            src={'https://hubconteudo.dasa.com.br/wp-content/uploads/2022/11/muay_thai.jpg'} 
            alt="Muay Thai" 
            className='imgFundoHome'
          />
          <div className='home'>
            <h1 className='tituloHome'>Muay Thai</h1>
            <p className='descricaoHome'>A Arte das Oito Armas: disciplina, força e superação para transformar o seu corpo e a sua mente.</p>
          </div>
        </div>

        <div className='paragrafoHome'>
          <p className='paragrafoUm'>Transforme o seu corpo, fortaleça a sua mente e domine a arte do Muay Thai</p>
          <p className='paragrafoDois'>Aulas completas para todos os níveis, do iniciante ao avançado, com foco na técnica, saúde e disciplina.</p>
          
          <p className='paragrafoUm'>Disciplina, Técnica e Superação</p>
          <p className='paragrafoDois'>O Muay Thai não ensina você a buscar o combate, mas a não se curvar quando ele for inevitável. Quando você pisa no tatame ou sobe no ringue, não está ali para provar algo aos outros, mas para confrontar seus próprios medos, sua preguiça e suas incertezas. A arte das oito armas é a disciplina de transformar o corpo em fortaleza e a mente em escudo.</p>
        </div>

        <div className='container-boxes'>
          <Box
            title=""
            description="Não lute para ser melhor do que o seu adversário, lute para ser mais forte do que a sua melhor desculpa."
            img={img1}
          />

          <Box
            title=""
            description="A canelada calejada não vem do talento, vem de milhares de repetições no silêncio do treino diário."
            img={img2}
          />

          <Box
            title=""
            description="Mais do que calejamento físico, a Arte das Oito Armas constrói uma mente blindada contra a desistência."
            img={img3}
          />
        </div>
        
      </section>
    </main>
  )
}