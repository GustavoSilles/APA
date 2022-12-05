import React, {useState} from "react";
import "./cadastro.css";
import {Link} from 'react-router-dom'
// import Modal3 from '../Modal-confirmacao/modal-confirmacao'
// let loadfeed = 0

const Cadastro = () => {
    const [users, setUsers] = useState([])
    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


  //   const callAgentFinder = async() => {
  //     try{
  //         const response = await fetch('http://localhost:3001/api/user')
  //         const data = response.json()
  //         data.then(
  //             (val) => {setUsers(val.data)

  //             }
  //         )
  //     }catch(error){
  //     }
  // }
    const postUser = async () => {
      if (username !== "" && name !=="" && email !== "" && password !== "") {
        if(email.match(/([a-zA-Z0-9]+)([.{1}])?([a-zA-Z0-9]+)@gmail([.])com/g)){
              if(password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)){    
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
                  window.location.href= "./login"
                }catch( error){
                  console.log(error)
                  setUsername('')
                  setName('')
                  setEmail('')
                  setPassword('')
                }
            }else{alert("vazio")}
          }else{alert("email errado")}
            }else{alert("senha fraca")}
      }
    //   if(loadfeed < 4){
    //     loadfeed++
    //     callAgentFinder()
    // }
    return (
      <div className="cadastro">
        <div className="container-cadastro">
          <div className="wrap-login">
            <form className="login-form">
              <span className="login-form-title"> Cadastro </span>

              <div className="wrap-input">
                <input
                required 
                type="text"
                  className={username !== "" ? "has-val input" : "input"}  
                  value={username}
                    onChange={(e) => setUsername(e.target.value)}
                /> 
                <span className="focus-input" data-placeholder="Username"></span>
              </div>

              <div className="wrap-input">
                <input
                required 
                   type="text"
                  className={name !== "" ? "has-val input" : "input"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Name"></span>
              </div>
  
              <div className="wrap-input">
                <input
                required 
                  className={email !== "" ? "has-val input" : "input"}
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Email"></span>
              </div>
  
              <div className="wrap-input">
                <input
                required 
                  className={password !== "" ? "has-val input" : "input"}
                  minlength="8"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="focus-input" data-placeholder="Password"></span>
              </div>
  
              <div className="container-login-form-btn">
                <button type="submit"  onClick={postUser} className="login-form-btn">Cadastre-se</button>
              </div>
  
              <div className="text-center2">
              {/* {modal &&(<Modal3 handleModal={handleModal}/>)}  */}
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