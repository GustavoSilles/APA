
import "./modal-perfil.css";
import React from "react";
import {MdArrowForwardIos} from 'react-icons/md'
import {MdOutlineLogout} from 'react-icons/md'
import {IoMdTrash} from "react-icons/io"
import {Link} from 'react-router-dom'
const ModalPerfil =(props) => {
   const { handleModal } = props

   
  return (
   
    <div className="modalBackgroundPerfil">
     
      <div className="modalContainerPerfil">
      <div className="fadeIn">
      <div className="navmodalPerfil">
      <Link to='/perfil'className="boxzinha"> 
            <div className="cosas">
           <div className="img-modal"></div>
            <div className="nome">Gustavin</div>
            </div>
        <MdArrowForwardIos size={22} color='#532E1C' onClick={() => {handleModal(false) }} id="cancelBtn" className="iconmodal"/> 
        </Link>
       
        <div className="sair">
        <MdOutlineLogout className="iconSair" height={60}/>
        <div className="vaza">Sair</div>
       
      </div>
      <div className="sair">
        <IoMdTrash className="iconSair" height={60}/>
        <div className="vaza">Excluir conta</div>
       
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
