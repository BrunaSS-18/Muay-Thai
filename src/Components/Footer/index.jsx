import "./Footer.css"
import imgLogo from "../../assets/imgGolpes/imgLogo.jpg";
import img1 from "../../assets/img/icons/instagram.png"
import img2 from "../../assets/img/icons/facebook.png"

export default function index() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <img src={imgLogo} alt="Muay Thai Logo" className="logo" />

        <div className="redes-sociais">
          <div className="item-rede">
            <img src={img1} alt="Instagram" className="icon-rede" />
            <span className="redeSocial">@muaythai_2024</span>
          </div>

          <div className="item-rede">
            <img src={img2} alt="Facebook" className="icon-rede" />
            <span className="redeSocial">@muaythai_2024</span>
          </div>
        </div>

      </div>

      <div className="footerBy">
        <p>Site by Bruna</p>
      </div>
    </footer>
  )
}