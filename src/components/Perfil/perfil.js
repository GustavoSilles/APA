import React, { useState } from "react";
import {storage} from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import './perfilStyles.css'
import Navbar from '../Navbar/navbar'

let loadfeed = 0

const Perfil = () => {
  const [imgURL, setImgURL] = useState("");
  const [progressPorcent, setProgresspercent] = useState(0);
  const [users, setUsers] = useState([])

  const getPerfil = async () => {  
    try {
        const  response = await fetch('http://localhost:3001/api/user/' + JSON.parse(localStorage.getItem('id')))
        const data = response.json()
        data.then(
            (val) => setUsers(val.data)
        )   
      }catch( error){
        console.log(error);
        setUsers([])
        
    }
}
if(loadfeed < 7){
loadfeed++
getPerfil()
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
        <>
        <Navbar/>
        <div className='perfil'>
          <div className='perfil-container'>
          <div className='box-perfil'>
          <div className='fundo-perfil'>
           
             <form onSubmit={formHandler}className='seila-container'>   
           
             {!imgURL && <p>{}</p>}
             {imgURL && <img className="foto-perfil2" src={URL.createObjectURL(imgURL)}  alt="Imagem"  value={imgURL} onChange={(e) => setImgURL(e.target.value)}/>}
             <input type="file" className='foto-perfil' onChange={e => setImgURL(e.target.files[0])}></input>
       </form>
           
          </div>
          </div>
         
          <div className='box-perfil2'>
            
           
            <p className='gustavin'>Gustavin</p>
         
            <div className='inputes'>
              <div className='inpt'>
              <label className='label'>Alterar nome:</label>
            <input  type="text" className='inp_perfil' placeholder='Gustavo Silles'/>
            </div>
            <div className='inpt'>
            <label className='label'>Alterar nome de usuário:</label>
            <input  type="text" className='inp_perfil' placeholder='Gustavin'/>
            </div>
            <div className='inpt'>  
            <label className='label'>Alterar e-mail:</label>
            <input  type="text" className='inp_perfil' placeholder='sillesgustavo05@gmail.com'/>
            </div>
            <div className='inpt'>
            <label className='label'>Alterar senha:</label>
            <input  type="password" className='inp_perfil' placeholder='********'/>
            </div>
            </div>
            <div className='cantoEsquerdo'>
          <button className='btn_perfil'>Salvar alterações</button>
          </div>
         
          </div>
          </div>
        </div>
        
        </>
    )
}

export default Perfil
