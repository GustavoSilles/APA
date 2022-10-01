import "./login.css";
import {useNavigate, Link} from 'react-router-dom'
import React, {useState} from "react";

  const Login = () => {
          const navigate = useNavigate();
          const [email, setEmail] = useState("");
          const [password, setPassword] = useState("");
          const [users, setUsers] = useState([])
     
      //     const handleEmailChange = email => setEmail(email)
      //     const handleSenhaChange = senha => setSenha(senha)
          const getUsers = async () => {
              if (email && password != "") {
              try{
                  const requestOptions = {
                      method: 'POST',
                      headers: { 'Content-type': 'application/json' },
                      body: JSON.stringify({
                          email: email,
                          password: password
                      })
                  }
                  const response = await fetch('http://localhost:3000/api/login/user', requestOptions)
                  if(response.status === 400){
                  alert("Erro!, Usuário não encontrado")
                  }else{
                      navigate("../home", { replace: true })
                      const data = await response.json()
                      setUsers(data)
                      }
              }catch(error){
                  console.log(error)
                      }
         }}   
      return (
        <div className="login">
          <div className="container-login">
            <div className="wrap-login">
              <form className="login-form">
                <span className="login-form-title"> Login </span>
    
                <span className="login-form-title">
                </span>
    
                <div className="wrap-input">
                  <input
                    className={email !== "" ? "has-val input" : "input"}
                    type="email"
                    value={email}
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
                    <button onClick={getUsers} className="login-form-btn">Login</button>
                </div>
    
                <div className="text-center">
                  <span className="txt1">Não possui conta? </span>
                 
                  <Link to='/cadastro'><p className="txt2">Criar conta</p></Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
      }

export default Login;































































// import React, { useState } from "react"

// const LogarUsuario = () => {
//     const [pessoa, setPessoa] = useState([])
//     const [nome_usuario, setNome_usuario] = useState('')
//     const [senha, setSenha] = useState('')

//     const handleNome_usuarioChange = nome_usuario => setNome_usuario(nome_usuario)
//     const handleSenhaChange = senha => setSenha(senha)
//     const getPessoa = async () => {
//         if (nome_usuario && senha !== "") {
//         try{
//             const requestOptions = {
//                 method: 'POST',
//                 headers: { 'Content-type': 'application/json' },
//                 body: JSON.stringify({
//                     nome_usuario: nome_usuario,
//                     senha: senha
//                 })
//             }
//             const response = await fetch('https://jovens-db.herokuapp.com/login/pessoa', requestOptions)
//             if(response.status === 400){
//             alert("Erro!","Usuário não encontrado");
//             }else{
//                 const data = await response.json()
//                 setPessoa(data)
//                 //navigation.navigate("HomeNavigation")
//                 }
//         }catch(error){
//             console.log(error)
//                 }
//    }
//     }
// }

// export default LogarUsuario