import React from 'react'
import './perfilStyles.css'
import Navbar from '../Navbar/navbar'
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
              <label className='label'>Alterar nome:</label>
            <input  type="text" className='inp_perfil' placeholder='Gustavo Silles'/>
            </div>
            <div className='inpt'>
            <label className='label'>Alterar nome de usuário:</label>
            <input  type="text" className='inp_perfil' placeholder='Gustavin'/>
            </div>
            <div className='inpt'>
            <label className='label'>Alterar e-mail:</label>
            <input  type="text" className='inp_perfil' placeholder='sillesgustavo05@gmail.com'/>
            </div>
            <div className='inpt'>
            <label className='label'>Alterar senha:</label>
            <input  type="password" className='inp_perfil' placeholder='********'/>
            </div>
            </div>
            <div className='cantoEsquerdo'>
          <button className='btn_perfil'>Salvar alterações</button>
          </div>
          </div>
        
          </div>
        </div>
           
        </>
    )
}

export default Perfil
