import React from 'react'
import "./Footer.css"
import imgLogo from "../../assets/img/logoipsum.png"
import img1 from "../../assets/img/icons/instagram.png"
import img2 from "../../assets/img/icons/facebook.png"
import img3 from "../../assets/img/icons/tik-tok.png"


export default function index() {
  return (
    <footer>
        <section className='footer'>
            <img src={imgLogo} className='logo'/>
            <p className='redeSocial'>Redes Sociais</p>
            <div className='icon'>
                <img src={img1}/>
                <img src={img2}/>
                <img src={img3}/>
            </div>
            <p className='footerBy'>Footer by Bruna</p>
        </section>
    </footer>
  )
}
