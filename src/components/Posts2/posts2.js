import React, { useState }  from 'react'
import './posts2.css'
import {BsFillChatLeftTextFill} from "react-icons/bs"
import {IoMdTrash} from "react-icons/io"
import {BsFillShareFill} from "react-icons/bs"
import Modal2 from '../Modal2/modal2'
import Modal4 from '../Modal-excluir/modal-excluir'



const Posts2 = () => {
    const [modal, setModal] = useState(false);
    const handleModal = (state) => {
        setModal(state)
      }
    const [modalOpen, setModalOpen] = useState(false);
    return (
       
       <>
      
       <div className='postzao'>
                <div className='posixion'>
                <div className='box'>
                    <div className='navbox2'>
                        <div className='abilio'>
                        <div className='fotopost2'></div>
                        <div className='nominho'>Admin</div>
                        </div><div className='lixoxo'>
                        <IoMdTrash className='lixo' onClick={() => {setModal(true)}}/>
                        </div>
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
                        
                    <div className='ascoisas2'>                    <BsFillShareFill className='iconbox'/>
                    <div className='textbox'>Compartilhe</div>
                    </div>
                    </div>
                    <div className='comentario'></div>
                </div>
                {modalOpen && <Modal2 setOpenModal={setModalOpen} />}
                {modal &&(<Modal4 handleModal={handleModal}/>)} 
                </div>
              
                </div>
               
                <div>
               

       
               
      </div>
     
                </> 
                
                
      
    )
}

export default Posts2






// import React from 'react'
// import './posts.css'
// import {BsFillChatLeftTextFill} from "react-icons/bs"
// import {BsFillShareFill} from "react-icons/bs"

// const Posts = (fotoPerfil, nomeUsuario, descricao, fotoPost) => {
//     return (
//        <>
//        <div className='postzao'>
//                 <div className='posixion'>
//                 <div className='box'>
//                     <div className='navbox'>
//                         <div className='fotopost2'></div>
//                         <div className='nominho'>Gustavin</div>
//                     </div>
//                     <div className='descricao'>
//                         <p className='descrison'>{descricao}</p>
//                     </div>
//                     <div className='imgbox'>
//                         <div className='propriafoto'></div>
//                     </div>
//                     <div className='footerbox'>
//                     <div className='ascoisas'>
//                     <BsFillChatLeftTextFill className='iconbox' />
//                     <div className='textbox'>Comente</div>
//                     </div>
//                     <div className='ascoisas2'>
//                     <BsFillShareFill className='iconbox'/>
//                     <div className='textbox'>Compartilhe</div>
//                     </div>
//                     </div>
//                     <div className='comentario'></div>
//                 </div>
//                 </div>

//                 </div>
//                 </> 
//     )
// }

// export default Posts
