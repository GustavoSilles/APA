import React, {useState} from "react";
import "./cadastro.css";
import {Link} from 'react-router-dom'
import Modal3 from '../Modal-confirmacao/modal-confirmacao'

const Cadastro = () => {

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [modal, setModal] = useState(false)
   
    const handleModal = (state) => {
      setModal(state)
    }

    const postUser = async () => {
      if (username != "" && name !="" && email != "" && password != "") {
        console.log("n ta vazio");
        try {
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                      username: username,
                      name: name,
                      email: email,
                      password: password
                    })
                  }
                  await fetch('http://localhost:3001/api/user', requestOptions)
                  //await fetch('https://jovens-db.herokuapp.com/pessoa', requestOptions)
                  window.location.href= "./login"
                }catch( error){
                  console.log(error)
                  setUsername('')
                  setName('')
                  setEmail('')
                  setPassword('')
                }
              }else{
                setModal(true) 
                
              }
      }
    return (
      <div className="cadastro">
        <div className="container-cadastro">
          <div className="wrap-login">
            <form className="login-form">
              <span className="login-form-title"> Cadastro </span>

              <div className="wrap-input">
                <input
                  className={username !== "" ? "has-val input" : "input"}  
                  value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /> 
                <span className="focus-input" data-placeholder="User name"></span>
              </div>

              <div className="wrap-input">
                <input
                  className={name !== "" ? "has-val input" : "input"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Name"></span>
              </div>
  
              <div className="wrap-input">
                <input
                  className={email !== "" ? "has-val input" : "input"}
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Email"></span>
              </div>
  
              <div className="wrap-input">
                <input
                  className={password !== "" ? "has-val input" : "input"}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Password"></span>
              </div>
  
              <div className="container-login-form-btn">
                <button  onClick={postUser} className="login-form-btn">Cadastre-se</button>
              </div>
  
              <div className="text-center2">
              {modal &&(<Modal3 handleModal={handleModal}/>)} 
              <div className="possui">
                <span className="txt1">já possui conta? </span>
                <Link to='/login'> <p className="txt2">Fazer login</p></Link>
                </div>
              </div>
             
            </form>
          

           
          </div>
        </div>
      </div>
    );
    }
export default Cadastro;