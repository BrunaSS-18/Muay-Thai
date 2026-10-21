import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import '../../../node_modules/react-toastify/dist/ReactToastify.css'
import "./Cadastro.css"

export default function index() {
  
  const[formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: ""
  })

  //atualiza o estado ao digitar o formulário
  const handleChange = (e) =>{
    const { name, value } = e.target;
    //extrair o valor
    setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
    }))
  }

  //enviar
  const handleSubmit = (e) => {
    e.preventDefault()

  //validação dos campos
  if(formData.nome == "" || formData.telefone == "" || formData.email == "" ){
    toast.error("Todos os campos são obrigatórios!")
    return false
  }  
    
  //dados para o backend como JSON
    fetch("http://localhost:3000/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
    })  
        .then((response) => response.json())
        .then((data) => {
            toast.success("Usuário cadastrado com sucesso")
        //limpa o formulario após o envio
            setFormData({
                nome: "",
                telefone: "",
                email: ""
            })
        }) 
  }

  return (
    <main className='container'>
        <p className='descricaoCadastro'>Faça parte da nossa comunidade e dê o primeiro passo no tatami</p>
        <h1>CADASTRE-SE</h1>
        <form className='formCadastro' onSubmit={handleSubmit}>
            <article className='form-control'>
                <label htmlFor='nome'>Nome</label>
                <input 
                    type='text' 
                    name="nome" 
                    value={formData.nome}
                    onChange={handleChange}
                />
            </article>

            <article className='form-control'>
                <label htmlFor='telefone'>Telefone</label>
                <input 
                    type='text' 
                    name="telefone" 
                    value={formData.telefone}
                    onChange={handleChange}
                />
            </article>

            <article className='form-control'>
                <label htmlFor='email'>Email</label>
                <input 
                    type='text' 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                />
            </article>

            <button className='btnCadastro' type="submit">Confirmar</button>

            <ToastContainer/>
        </form>
    </main>
  )
}
