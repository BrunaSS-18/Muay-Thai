import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"

export default function index() {
    return (
    <nav>
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
                <Link to="/usuarios">
                    Usuarios
                </Link>
            </li>

             <li>
                <Link to="/cadastro">
                    Cadastro
                </Link>
            </li>

        </ul>
    </nav>

  )
}
