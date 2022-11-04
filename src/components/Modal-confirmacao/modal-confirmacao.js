
import "./modal-confirmacao.css";
import React from "react";
import {CgClose} from 'react-icons/cg'

const Modal3 =({ setOpenModal }) => {
   

   
  return (
   
    <div className="modalBackground3">
     
      <div className="modalContainer3">
      <div className="fadeIn">
      <div className="navmodal">
        <p className="titlemodal">Realmente deseja realizar essa ação?</p>
     
        <CgClose size={22} color='#532E1C' onClick={() => {setOpenModal(false) }} id="cancelBtn" className="iconmodal"/>
      </div>
      
        <div className="footermodal">
        <button className="btn-confirmacao"onClick={() => {setOpenModal(false) }}>Não</button>
        <button className="btn-confirmacao2">Sim</button>
       </div>
       
      
     
      </div>
      </div>
    </div>
  );
}

export default Modal3;








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
