import React, { useState }  from 'react'
import './posts.css'
import {BsFillChatLeftTextFill} from "react-icons/bs"
import {BsFillShareFill} from "react-icons/bs"
import Modal2 from '../Modal2/modal2'
import Modal3 from '../Modal-confirmacao/modal-confirmacao'

const Posts = (descricao, imgURL) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalOpen2, setModalOpen2] = useState(false);
    
    return (
       
       <>
      
       <div className='postzao'>
                <div className='posixion'>
                <div className='box'>
                    <div className='navbox'>
                        <div className='pika'>
                        <div className='fotopost2'></div>
                        <div className='nominho'>Gustavin</div>
                        </div>
                        <p className='denunciar' onClick={() => {setModalOpen2(true)}}>Denunciar</p>
                    </div>
                    <div className='descricao'>
                        <p className='descrison'>oia que gatinho bunitu</p>
                    </div>
                    <div className='imgbox'>
                        <div className='propriafoto'></div>
                    </div>
                    <div className='footerbox'>
                    <div className='ascoisas'onClick={() => {setModalOpen(true)}}>
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
                {modalOpen && <Modal2 setOpenModal={setModalOpen} />}
                {modalOpen2 && <Modal3  setOpenModal={setModalOpen2} />}
                </div>
              
                </div>
               
                <div>
        
      </div>
                </> 
    )
}

export default Posts