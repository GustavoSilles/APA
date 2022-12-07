import "./login.css";
import {Link} from 'react-router-dom'
import React, { useState } from "react";
// let loadfeed = 0
const Login = () => {

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
  const getUsers = async () => {
    if (email === "adm@gmail.com" && password === "adm123@") {
      window.location.href = "./adm"
    } else {
      if (email !== "" && password !== "") {
        try {
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
              email: email,
              password: password
            })
          }
          const response = await fetch('http://localhost:3001/api/login/user', requestOptions)

          if (response.status === 400) {
            alert("Erro!, Usuário não encontrado")
          } else {
            const data = await response.json()
            console.log(data.data);
            find(data.data.id)
          }
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
  const find = (dataLogin) => {
     localStorage.setItem('vapo', JSON.stringify(dataLogin))
     window.location.href= "./home"
    }

  //   if(loadfeed < 4){
  //     loadfeed++
  //     callAgentFinder()
  // }

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
                required 
                className={email !== "" ? "has-val input" : "input"}
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}

              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input">
              <input
                required 
                minlength="8"
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <button onClick={getUsers}  type="submit" className="login-form-btn">Login</button>
            </div>

            <div className="text-center2">

              <div className="possui">
                <span className="txt1">Não possui conta? </span>

                <Link to='/cadastro'><p className="txt2">Criar conta</p></Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;