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
         
            <div className='inputes'>
              <div className='inpt'>
              <label className='label'>Alterar name:</label>
            <input  type="text" className='inp_perfil' placeholder='Gustavo Silles'/>
            </div>
            <div className='inpt'>
            <label className='label'>Alterar username:</label>
            <input  type="text" className='inp_perfil' placeholder='Gustavin'/>
            </div>
            <div className='inpt'>
            <label className='label'>Alterar email:</label>
            <input  type="text" className='inp_perfil' placeholder='sillesgustavo05@gmail.com'/>
            </div>
            <div className='inpt'>
            <label className='label'>Alterar password:</label>
            <input  type="password" className='inp_perfil' placeholder='********'/>
            </div>
            </div>
            <div className='cantodolula'>
          <button className='btn_perfil'>Salvar alterações</button>
          </div>
          </div>
        
          </div>
        </div>
            <Footer/>
        </>
    )
}

export default Perfil
