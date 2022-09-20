import React, {useState} from "react";
import "./cadastro.css";
import {Link} from 'react-router-dom'

const Cadastro = () => {

    const [username, setUsername] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = username => setUsername(username)
    const handleNameChange = name => setName(name)
    const handleEmailChange = email=> setEmail(email)
    const handlePasswordChange = password => setPassword(password)

    const postUser = async () => {  

      if (username && name && email && password != "") {
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
              await fetch('http://localhost:3000/api/user', requestOptions)
         
             
          }catch( error){
              console.log(error)
              setUsername('')
              setName('')
              setEmail('')
              setPassword('')
          }
      }else{
          <Alert severity="error">Erro!","Não foi possivel efetuar o cadastro!</Alert>
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
                  type="user name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onChangeText={handleUsernameChange}
                />
                <span className="focus-input" data-placeholder="User name"></span>
              </div>

              <div className="wrap-input">
                <input
                  className={name !== "" ? "has-val input" : "input"}
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onChangeText={handleNameChange}
                />
                <span className="focus-input" data-placeholder="Name"></span>
              </div>
  
              <div className="wrap-input">
                <input
                  className={email !== "" ? "has-val input" : "input"}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onChangeText={handleEmailChange}
                />
                <span className="focus-input" data-placeholder="Email"></span>
              </div>
  
              <div className="wrap-input">
                <input
                  className={password !== "" ? "has-val input" : "input"}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onChangeText={handlePasswordChange}
                />
                <span className="focus-input" data-placeholder="Password"></span>
              </div>
  
              <div className="container-login-form-btn">
                <button  onClick={postUser} className="login-form-btn">Cadastre-se</button>
              </div>
  
              <div className="text-center">
                <span className="txt1">já possui conta? </span>
                <Link to='/login'> <p className="txt2">Fazer login</p></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
    }
export default Cadastro;


































































// import React, { useState } from "react"

// const CadastroUsuario = () =>{
//     const [nome_completo, setNome_completo] = useState('')
//     const [nome_usuario, setNome_usuario] = useState('')
//     const [foto, setFoto] = useState('')
//     const [email, setEmail] = useState('')
//     const [senha, SetSenha] = useState('')

//     const handleNome_completoChange = nome_completo => setNome_completo(nome_completo)
//     const handleNome_usuarioChange = nome_usuario => setNome_usuario(nome_usuario)
//     const handleFotoChange = foto => setFoto(foto)
//     const handleEmailChange = email => setEmail(email)
//     const handleSenhaChange = senha => SetSenha(senha)


// const postUser = async () => {  

//     if (nome_completo && nome_usuario && foto && email && senha !== "") {
//         try {
//             const requestOptions = {
//                 method: 'POST',
//                 headers: { 'Content-type': 'application/json' },
//                 body: JSON.stringify({
//                     nome_completo: nome_completo,
//                     nome_usuario: nome_usuario,
//                     foto: foto,
//                     email: email,
//                     senha: senha
//                 })
//             }
//             await fetch('https://jovens-db.herokuapp.com/pessoa', requestOptions)
//             //navigation.navigate('Logins')
           
//         }catch( error){
//             console.log(error)
//             setNome_completo('')
//             setNome_usuario('')
//             setFoto('')
//             setEmail('')
//             SetSenha('')
//         }
//     }else{
//         alert("Erro!","Não foi possivel efetuar o cadastro!");

//         }
//     }
// }


// export default CadastroUsuario