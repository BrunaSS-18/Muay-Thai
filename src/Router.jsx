import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Tecnicas from "./Pages/Tecnicas"
import NotFound from "./Pages/NotFound"
import Nav from "./Components/Nav"
import Duvidas from "./Pages/Duvidas"
import Usuarios from "./Pages/Usuarios"
import Cadastro from "./Pages/Cadastro"

export default function Router() {
  return (
    <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/tecnicas" element={<Tecnicas/>}/>
            <Route path="/usuarios" element={<Usuarios/>}/>
            <Route path="/cadastro" element={<Cadastro/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="/duvidas" element={<Duvidas/>}/>
        </Routes>
    </BrowserRouter>
  )
}
