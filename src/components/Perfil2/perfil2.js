import React from 'react'
import './perfil2.css'
import Navbar2 from '../Navbar2/navbar2'

const Perfil2 = () => {
    return (
        <>
        <Navbar2/>
        <div className='perfil'>
          <div className='perfil-container'>
          <div className='box-perfil'>
          <div className='fundo-perfil'>
            <div className='foto-perfil3'></div>
          </div>
          </div>
         
          <div className='box-perfil2'>
            
           
            <p className='gustavin2'>Admin</p>
         
            <div className='inputes'>
              <div className='inpt'>
              <label className='label'>Alterar nome:</label>
            <input  type="text" className='inp_perfil' placeholder='Adm'/>
            </div>
            <div className='inpt'>
            <label className='label'>Alterar nome de usuário:</label>
            <input  type="text" className='inp_perfil' placeholder='Admin'/>
            </div>
            <div className='inpt'>
            <label className='label'>Alterar e-mail:</label>
            <input  type="text" className='inp_perfil' placeholder='adm@gmail.com'/>
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
export default Perfil2