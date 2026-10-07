import Box from "../../Components/Box"

export default function index() {
  return (
    <main className='container'>
      <section className='d-flex secao'>
        <img src={'https://hubconteudo.dasa.com.br/wp-content/uploads/2022/11/muay_thai.jpg'} alt="Muay Thai" className='imgFundoHome'/>

        <div className='home'>
          <h1 className='tituloHome'>Muay Thai</h1>
          <p className='descricaoHome'>lore ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className='paragrafoHome'>
          <p className='paragrafoUm'>lore ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className='paragrafoDois'>lore ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className='paragrafoUm'>lore ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p className='paragrafoDois'>lore ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <Box
          title="Titulo do componente"
          description="Este é um paragrafo de exemplo para o componente"
          img={"../../assets/img/icons/tik-tok.png"}
        />

        <Box
          title="Titulo do componente dois"
          description="Este é um paragrafo de exemplo"
          img={"../../assets/img/icons/tik-tok.png"}
        />

        <Box
          title="Titulo do componente tres"
          description="Este é um paragrafo de exemplo"
          img={"../../assets/img/icons/tik-tok.png"}
        />
        
      </section>
    </main>
  )
}
