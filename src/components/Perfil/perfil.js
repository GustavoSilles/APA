import React, { useState } from "react";
import {storage} from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {BsCameraFill} from "react-icons/bs"
import './perfilStyles.css'
import Navbar from '../Navbar/navbar'

let loadfeed = 0

const Perfil = () => {
  const [imgURL2, setImgURL2] = useState("");
  const [loggedUser, setLoggedUser] = useState({})
  const [, setProgresspercent2] = useState(0);
   const [users, setUsers] = useState([])
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(imgURL2);
  
  const getPerfil = async () => {  
    try {
        const  response = await fetch('http://localhost:3001/api/user/' + JSON.parse(localStorage.getItem('vapo')))
        const data = response.json()
        data.then(
            (val) => setLoggedUser(val.data)
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
console.log(imgURL2);


const formHandler2 = (e) => {
  const file = e.target.files[0]

  if(!file) return; 
  

  const storageRef = ref(storage, `perfil/${file.name}`);
  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on("state_changed",
    (snapshot) => {
      const progress =
        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      setProgresspercent2(progress);
    },
    (error) => {
      alert(error);
    },
   () => {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setImgURL2(downloadURL)
        
      });
      
    }
  );
}

const postPhoto = async (e) => {
  if (imgURL2 !== "") {
      try {
          const requestOptions = {
              method: 'POST',
              headers: { 'Content-type': 'application/json' },
              body: JSON.stringify({
                  imgURL: imgURL2
              })
          }
          await fetch('http://localhost:3001/api/post', requestOptions)
        }catch(error){
          setImgURL2('')
      }
  }else{
    alert("preencha todos os campos")
      }
  }    

    
    const upPerfl = async() => { 
              try{
                  const requestOptions = {
                      method: 'PUT',
                      headers: {'Content-type': 'application/json'},
                      body: JSON.stringify({
                        username: username,
                        name: name,
                        email: email,
                        password: password
                      })
                      
                  }
                  await fetch('http://localhost:3001/api/user/' + loggedUser.id,  requestOptions)
                  //postPhoto()
                  }catch(e){
                    alert("erro")
                }
              }
    return (
        <>
        <Navbar/>
        <div className='perfil'>
          <div className='perfil-container'>
          <div className='box-perfil'>
          <div className='fundo-perfil'>
          <div className="foto-perfil">
          {!imgURL2 && <p>{}</p>}
      {imgURL2 && <img className="foto-perfil2" src={imgURL2}  alt="Imagem"  value={imgURL2} onChange={(e) => setImgURL2(e.target.value)}/>}
          </div>
          <form onSubmit={formHandler2}className="">
        <label className="label-file2" for="input-file2">
          <BsCameraFill className="iconmodalimg2"size={30} color='#532E1C' />
        </label>
      <input type="file" id='input-file2' onChange={(e) => formHandler2(e)}/> 
       </form>

           
          </div>
          </div>
         
          <div className='box-perfil2'>
            
           
            <p className='gustavin'>{loggedUser.username}</p>
         
            <div className='inputes'>
              <div className='inpt'>
              <label className='label'>Alterar nome:</label>
            <input  type="text" className='inp_perfil' placeholder={loggedUser.name}  value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className='inpt'>
            <label className='label'>Alterar nome de usuário:</label>
            <input  type="text" className='inp_perfil' placeholder={loggedUser.username}  value={username} onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div className='inpt'>  
            <label className='label'>Alterar e-mail:</label>
            <input  type="text" className='inp_perfil' placeholder={loggedUser.email}  value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className='inpt'>
            <label className='label'>Alterar senha:</label>
            <input  type="password" className='inp_perfil' placeholder='********'  value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            </div>
            <div className='cantoEsquerdo'>
          <button className='btn_perfil' onClick={upPerfl}>Salvar alterações</button>
          </div>
         
          </div>
          </div>
        </div>
        
        </>
    )
}

export default Perfil
