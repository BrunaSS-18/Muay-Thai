import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import '../../../node_modules/react-toastify/dist/ReactToastify.css'
import "./Cadastro.css"

export default function index() {
  //Estado para armazenar os dados do formulário
  
  const[formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: ""
  })

  //Função para atualizar o estado ao digitar o formulário
  const handleChange = (e) =>{
    //Obter o elemento de entrada atual
    const { name, value } = e.target;
    //Extrair o valor e o nome do campo de entrada
    setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value
    }))
  }

  //Função para enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault()

  //Validação dos campos
  if(formData.nome == "" || formData.telefone == "" || formData.email == "" ){
    //alert("Todos os campos são obrigatórios!")
    toast.error("Todos os campos são obrigatórios!") //toast é um alerta de forma bonita
    return false
  }  
    
  //Enviando os dados para o backend como JSON
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
        //Limpa o formulario após o envio
            setFormData({
                nome: "",
                telefone: "",
                email: ""
            })
        }) 
  }

  return (
    <main className='container'>
        <h1>Cadastro de Usuários</h1>
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

            <button className='btnCadastro' type="submit">Cadastrar</button>

            <ToastContainer/>
        </form>
    </main>
  )
}
