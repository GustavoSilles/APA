import "./modal-perfil.css";
import React, { useState } from "react";
import {MdArrowForwardIos} from 'react-icons/md'
import {MdOutlineLogout} from 'react-icons/md'
import {IoMdTrash} from "react-icons/io"
import {Link} from 'react-router-dom'

let loadfeed = 0
const logout = () => {
  localStorage.removeItem('vapo')
  window.location.href= "./login"

}

const ModalPerfil =(props) => {
   const { handleModal } = props
   const [loggedUser, setLoggedUser] = useState({})
   const getPerfil = async () => {  
    try {
        const  response = await fetch('http://localhost:3001/api/user/' + JSON.parse(localStorage.getItem('vapo')))
        const data = response.json()
        data.then(
            (val) => setLoggedUser(val.data)
        )   
      }catch( error){
        console.log(error);
        
    }
}
if(loadfeed < 7){
loadfeed++
getPerfil()
}
   
  return (
   
    <div className="modalBackgroundPerfil">
     
      <div className="modalContainerPerfil">
      <div className="fadeIn">
      <div className="navmodalPerfil">
      <Link to='/perfil'className="boxzinha"> 
            <div className="cosas">
           <div className="img-modal"><img className='fotonav' src={loggedUser.imgURL2}></img></div>
            <div className="nome">{loggedUser.username}</div>
            </div>
        <MdArrowForwardIos size={22} color='#532E1C' onClick={() => {handleModal(false) }} id="cancelBtn" className="iconmodal"/> 
        </Link>
       
        <div className="sair">
        <MdOutlineLogout className="iconSair" height={60}/>
        <div className="vaza" onClick={() => logout()}>Sair</div>
       
      </div>
      
      </div>
    
      
       
       
      
     
      </div>
      </div>
    </div>
  );
}

export default ModalPerfil;








// import React, {useState} from "react";
// import "./modal.css";
// import {CgClose} from 'react-icons/cg'
// import {HiPhotograph} from "react-icons/hi"

// export const Modal = ({ setOpenModal, onAddPost }) => {
  
   
//   const [fotoPerfil, setFotoPerfil] = useState('')
//   const [nomeUsuario, setNomeUsuario] = useState('')
//   const [descricao, setDescricao] = useState('')
//   const [fotoPost, setFotoPost] = useState('')

//   function handleSavePost(){
//       const data = {
//           fotoPerfil, 
//           nomeUsuario, 
//           descricao,
//           fotoPost 
//       }
//       console.log(data)
//       onAddPost(data)
//   }
  
  
//   return (
   
//     <div className="modalBackground">
     
//       <div className="modalContainer">
//       <div className="fadeIn">
//       <div className="navmodal">
//         <p className="titlemodal">Criar publicação</p>
     
//         <CgClose size={22} color='#532E1C' onClick={() => {setOpenModal(false) }} id="cancelBtn" className="iconmodal"/>
//       </div>
//       <div className="descricaomodal">
//       <textarea  cols="250" rows="50"  placeholder="No que voce esta pensando?" className="inpmodal"
//                  value={descricao}
//                  onChange={e => setDescricao(e.target.value)}>
//       </textarea>
//       </div>
//       <div className="imgcontainer">
//       <div className="imgmodal"  
//             // value={fotoPost}
//             // onChange={e => setFotoPost(e.target.value)} 
//             >
//       </div>
//       </div>
      
//       <div className="footermodal">
//        <HiPhotograph className = 'iconmodalimg'size={22} color='#532E1C' /> 
//       <button className="btnpostar" onClick={handleSavePost}>Postar</button>
//        </div>
     
//       </div>
//       </div>
//     </div>
//   );
// }

// export default Modal;
