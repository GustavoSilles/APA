import React from 'react'
import './posts.css'
import {BsFillChatLeftTextFill} from "react-icons/bs"
import {BsFillShareFill} from "react-icons/bs"

const Posts = (fotoPerfil, nomeUsuario, descricao, fotoPost) => {
    return (
       
       <>
       <div className='postzao'>
                <div className='posixion'>
                <div className='box'>
                    <div className='navbox'>
                        <div className='fotopost2'></div>
                        <div className='nominho'>Gustavin</div>
                    </div>
                    <div className='descricao'>
                        <p className='descrison'>{descricao}</p>
                    </div>
                    <div className='imgbox'>
                        <div className='propriafoto'></div>
                    </div>
                    <div className='footerbox'>
                    <div className='ascoisas'>
                    <BsFillChatLeftTextFill className='iconbox' />
                    <div className='textbox'>Comente</div>
                    </div>
                    <div className='ascoisas2'>
                    <BsFillShareFill className='iconbox'/>
                    <div className='textbox'>Compartilhe</div>
                    </div>
                    </div>
                    <div className='comentario'></div>
                </div>
                </div>

                </div>
                </> 
                
      
    )
}

export default Posts
