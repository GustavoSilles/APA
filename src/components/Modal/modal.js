import "./modal.css";
import {CgClose} from 'react-icons/cg'
import {HiPhotograph} from "react-icons/hi"
import React, { useState } from "react";
import {storage} from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";


const Modal =({ setOpenModal }) => {
    const [descricao, setDescricao] = useState("");
    const [imgURL, setImgURL] = useState("");
    const [localizacao, setLocalizacao] = useState("");
    const [,setProgresspercent] = useState(0);

    const [loggedUser, setLoggedUser] = useState({})
    console.log(loggedUser);
    const getUsers = async () => {

        try{
                const responseUser = await fetch('http://localhost:3001/api/user/' + JSON.parse(localStorage.getItem('vapo')))
                const dataUser = responseUser.json()
                dataUser.then(
                    (val) => {
                        setLoggedUser(val.data) 
                    }
                )
            
        }catch(e){
            console.log("erro");
        }
    }

  const formHandler = (e) => {
    const file = e.target.files[0]

    if(!file) return; 
    

    const storageRef = ref(storage, `post/${file.name}`);
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

    const postPostagem = async (e) => {
      if (descricao !== "" && imgURL !== "" && localizacao !== "") {
          try {
              const requestOptions = {
                  method: 'POST',
                  headers: { 'Content-type': 'application/json' },
                  body: JSON.stringify({
                      imgURL: imgURL,
                      descricao: descricao,
                      localizacao: localizacao,
                      usuario: loggedUser.username
                  })
              }
             await fetch('http://localhost:3001/api/post', requestOptions)
            }catch(error){
              setImgURL('')
              setDescricao('')
              setLocalizacao('')
              
          }
      }else{
        alert("preencha todos os campos")
          }
      }    
        getUsers()
  return (
   
    <div className="modalBackground">
     
      <div className="modalContainer">
      <div className="fadeIn">
      <div className="navmodal">
        <p className="titlemodal">Criar publicação</p>
     
        <CgClose size={22} color='#532E1C' onClick={() => {setOpenModal(false) }} id="cancelBtn" className="iconmodal"/>
      </div>
      <div className="textWrapper">
        <textarea placeholder="Qual a localização do animal?" className="inpmodal"  value={localizacao} onChange={(e) => setLocalizacao(e.target.value)}/>
        <textarea placeholder="No que voce esta pensando?" className="inpmodal"  value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
      </div>
      <div className="imgcontainer">
      {!imgURL && <p>{}</p>}
      {imgURL && <img className="imgmodal" src={imgURL}  alt="Imagem"  value={imgURL} onChange={(e) => setImgURL(e.target.value)}/>}
      </div>
      
      
        <form onSubmit={formHandler}className="footermodal">
        <label className="label-file" for="input-file">
          <HiPhotograph className="iconmodalimg"size={22} color='#532E1C' />
        </label>
      <input type="file" id='input-file' onChange={(e) => formHandler(e)}/> 
      <button type="submit" onClick={postPostagem} className="btnpostar">Postar</button> 
       </form>
       
      
     
      </div>
      </div>
    </div>
  );
}

export default Modal;