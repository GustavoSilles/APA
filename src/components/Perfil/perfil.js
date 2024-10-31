import React, { useState, useEffect } from "react";
import {storage} from "../firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {BsCameraFill} from "react-icons/bs";
import './perfilStyles.css';
import Navbar from '../Navbar/navbar';

let loadfeed = 0;

const Perfil = () => {
  const [imgURL2, setImgURL2] = useState("");
  const [loggedUser, setLoggedUser] = useState({});
  const [setProgresspercent2] = useState(0);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => { getPerfil(); }, []);

  const getPerfil = async () => {
    try {
      const response = await fetch('https://apa-server.onrender.com/api/user/' + JSON.parse(localStorage.getItem('vapo')));
      const data = await response.json();
      setLoggedUser(data.data);
      setImgURL2(data.data.imgURL2);
    } catch (error) {
      console.log(error);
    }
  };

  if (loadfeed < 4) {
    loadfeed++;
    getPerfil();
  }

  const formHandler2 = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const storageRef = ref(storage, `perfil/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent2(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgURL2(downloadURL);
        });
      }
    );
  };

  const upPhoto = async () => {
    try {
      const requestOptions = {
        method: 'PUT',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({ imgURL2 })
      };
      await fetch('https://apa-server.onrender.com/api/user/' + loggedUser.id, requestOptions);
      window.location.reload(false);
    } catch (e) {
      alert("erro");
    }
  };

  const upPerfl = async () => {
    try {
      const requestOptions = {
        method: 'PUT',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({
          username,
          name,
          email,
          password,
          imgURL2
        })
      };
      await fetch('https://apa-server.onrender.com/api/user/' + loggedUser.id, requestOptions);
      window.location.reload(false);
    } catch (e) {
      alert("erro");
    }
  };

  return (
    <>
      <Navbar />
      <div className='perfil'>
        <div className='perfil-container'>
          <div className='box-perfil'>
            <div className='fundo-perfil'>
              <div className="foto-perfil">
                {!imgURL2 && <p>{}</p>}
                {imgURL2 && <img className="foto-perfil2" src={imgURL2} alt="Imagem" />}
              </div>
              <form onSubmit={formHandler2} className="">
                <label className="label-file2" htmlFor="input-file2">
                  <BsCameraFill className="iconmodalimg2" size={30} color='#532E1C' />
                </label>
                <input type="file" id='input-file2' onChange={(e) => formHandler2(e)} />
              </form>
            </div>
          </div>
          <div className='box-perfil2'>
            <p className='gustavin'>{loggedUser.username}Gustavo Silles</p>
            <div className='inputes'>
              <div className='inpt'>
                <label className='label'>Alterar nome:</label>
                <input type="text" className='inp_perfil' placeholder="Gustavo Silles" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className='inpt'>
                <label className='label'>Alterar nome de usuário:</label>
                <input type="text" className='inp_perfil' placeholder="Gustavo Silles" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className='inpt'>
                <label className='label'>Alterar e-mail:</label>
                <input type="text" className='inp_perfil' placeholder="sillesgustavo05@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className='inpt'>
                <label className='label'>Alterar senha:</label>
                <input type="password" className='inp_perfil' placeholder='********' value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>
            <div className='cantoEsquerdo'>
              <button className='btn_perfil' onClick={upPhoto}>Salvar Foto</button>
              <button className='btn_perfil' onClick={upPerfl}>Salvar alterações</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Perfil;
