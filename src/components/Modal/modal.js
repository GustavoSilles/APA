
import "./modal.css";
import {CgClose} from 'react-icons/cg'
import {HiPhotograph} from "react-icons/hi"
import React, { useState } from "react";
import {storage} from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const Modal =({ setOpenModal }) => {
    const [descricao, setDescricao] = useState("");
    const [imgURL, setImgURL] = useState("");
    const [progressPorcent, setProgresspercent] = useState(0);

    const postPostagem = async () => {  

      if (imgURL && descricao != "") {
          try {
              const requestOptions = {
                  method: 'POST',
                  headers: { 'Content-type': 'application/json' },
                  body: JSON.stringify({
                      imgURL: imgURL,
                      descricao: descricao,
                  })
              }
              await fetch('http://localhost:3001/api/post', requestOptions)
              //await fetch('https://jovens-db.herokuapp.com/pessoa', requestOptions)
              window.location.reload();
            }catch( error){
              setImgURL('')
              setDescricao('')
              
          }
      }else{
        alert("preencha todos os campos")
          }
      }
  const formHandler = (e) => {
    e.preventDefault()
    const file = e.target[0]?.files[0]

    if(!file) return; 
    

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
     () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgURL(downloadURL)
        });
        
      }
    );
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
        <textarea placeholder="No que voce esta pensando?" className="inpmodal"  value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
      </div>
      <div className="imgcontainer">
      {!imgURL && <p>{}</p>}
      {imgURL && <img className="imgmodal" src={URL.createObjectURL(imgURL)}  alt="Imagem"  value={imgURL} onChange={(e) => setImgURL(e.target.value)}/>}
      </div>
      
      
        <form onSubmit={formHandler}className="footermodal">
        <label className="label-file" for="input-file">
          <HiPhotograph className="iconmodalimg"size={22} color='#532E1C' />
        </label>
      <input type="file" id='input-file' onChange={e => setImgURL(e.target.files[0])}/> 
      <button type="submit" onClick={postPostagem} className="btnpostar">Postar</button> 
       </form>
       
      
     
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
