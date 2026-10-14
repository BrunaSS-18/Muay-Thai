import { Link } from 'react-router-dom'
import "./Nav.css"
import imgLogo from "../../assets/imgLogo.jpg"

export default function index() {
    return (
        
    <nav>
        <img src={imgLogo} className='logo'/>
        
        <ul className='menu'>

            <li>
                <Link to="/">
                    Home
                </Link>
            </li>

            <li>
                <Link to="/tecnicas">
                    Técnicas
                </Link>
            </li>

            <li>
                <Link to="/duvidas">
                    Dúvidas
                </Link>
            </li>

            <li>
                <Link to="/cadastro">
                    Cadastro
                </Link>
            </li>

            <li>
                <Link to="/usuarios">
                    Usuarios
                </Link>
            </li>

        </ul>
    </nav>

  )
}
