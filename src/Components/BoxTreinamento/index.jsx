import React from 'react'
import "./BoxTreinamento.css"

export default function index(props) {
  return (
    <section className='container-box'>
        <h1 className='title-box'>{props.title}</h1>
        <p className='description'>
            {props.description}
        </p>
    </section>
  )
}
