
import "./modal.css";
import {CgClose} from 'react-icons/cg'
import {HiPhotograph} from "react-icons/hi"
import React, { useState } from "react";
import {storage} from "../firebase";

const Modal =({ setOpenModal }) => {
  const [progress, setProgress] = useState(0)
  const formHandler = (e) => {
    e.preventDefault()
    const file = e.target[0].file[0]
    uploadFiles(file)
  }
  const uploadFiles = (file) => {
    const uploadTask = storage.ref(`files/${file.name}`).put(file)
    uploadTask.on(
      "state_changed",
      (snapshot) =>{
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100)
          setProgress(prog)
      },
      (error) => console.log(error),
      () => {
        storage
        .ref("files")
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          console.log(url)
        });
      }
    )
  }
  return (
   
    <div className="modalBackground">
     
      <div className="modalContainer">
      <div className="fadeIn">
      <div className="navmodal">
        <p className="titlemodal">Criar publicação</p>
     
        <CgClose size={22} color='#532E1C' onClick={() => {setOpenModal(false) }} id="cancelBtn" className="iconmodal"/>
      </div>
      <div className="textWrapper">
        <textarea placeholder="No que voce esta pensando?" className="inpmodal"/>
      </div>
      <div className="imgcontainer">
      <div className="imgmodal"></div>
      </div>
      
      <div className="footermodal">
        <form onSubmit={formHandler}>
       <HiPhotograph type="file" className = 'iconmodalimg'size={22} color='#532E1C' /> 
       <HiPhotograph type="submit" className = 'iconmodalimg'size={22} color='#532E1C' /> 
       </form>
       
      <button className="btnpostar">Postar</button>
       </div>
     
      </div>
      </div>
    </div>
  );
}

export default Modal;








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
