import React, { useState }  from 'react'
import './posts.css'
import {BsFillChatLeftTextFill} from "react-icons/bs"
import {BsFillShareFill} from "react-icons/bs"
import Modal2 from '../Modal2/modal2'
import Modal3 from '../Modal-confirmacao/modal-confirmacao'
import { GoMegaphone } from "react-icons/go";
const Posts = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [modal, setModal] = useState(false);
    const handleModal = (state) => {
        setModal(state)
      }
console.log(props);

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
                        <GoMegaphone className='megaphone' onClick={() => {setModal(true)}}/>
                    </div>
                    <div className='descricao'>
                    <p className='descrison'>{props.descricao}</p>
                    </div>
                    <div className='imgbox'>
                        <div className='propriafoto' style={{background: `url(${props.imgURL}) no-repeat center center/cover`}}>
                        </div>
                    </div>
                    <div className='footerbox'>
                    <div className='ascoisas'onClick={() => {setModalOpen(true)}}>
                    <BsFillChatLeftTextFill className='iconbox' />
                    <div className='textbox'>Comente</div>
                    </div>
                    <div className='ascoisas2'>
                    <BsFillShareFill className='iconbox'/>
                    <button 
                        className='textbox'
                            onClick={
                                () => { 
                                    navigator.share({
                                    title: 'Share', 
                                    text:  'whatevs'   ,                  
                                    url: this.state.link
                                }
                            )}
                        }>
                        Compartilhar
                    </button>
                    </div>
                    </div>
                    <div className='comentario'></div>
                </div>
                {modalOpen && <Modal2 setOpenModal={setModalOpen} />}
                {modal &&(<Modal3 handleModal={handleModal}/>)} 
               
                </div>
              
                </div>
               
                <div>
        
      </div>
                </> 
    )
}

export default Posts