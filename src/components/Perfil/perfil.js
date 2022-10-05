import React from 'react'
import './perfilStyles.css'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'
const Perfil = () => {
    return (
        <>
        <Navbar/>
        <div className='perfil'>
          <div className='perfil-container'>
          <div className='box-perfil'>
          <div className='fundo-perfil'>
            <div className='foto-perfil'></div>
          </div>
          </div>
         
          <div className='box-perfil2'>
            
           
            <p className='gustavin'>Gustavin</p>
            <input  type="text" className='inp_perfil' placeholder='Mudar name'></input>
            <input  type="text" className='inp_perfil' placeholder='Mudar username'></input>
            <input  type="text" className='inp_perfil' placeholder='Mudar E-mail'></input>
            <input  type="text" className='inp_perfil' placeholder='Mudar senha'></input>
           
          </div>
          </div>
        </div>
            <Footer/>
        </>
    )
}

export default Perfil
