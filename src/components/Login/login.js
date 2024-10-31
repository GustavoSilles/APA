import "./login.css";
import { Link } from 'react-router-dom';
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const getUsers = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    if (email === "adm@gmail.com" && password === "adm123456") {
      window.location.href = "./adm";
      return;
    }
    try {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          email: email,
          password: password
        })
      };
      const response = await fetch('https://apa-server.onrender.com/api/login/user', requestOptions);

      if (response.status === 400) {
        setError("Erro! Usuário não encontrado");
      } else {
        const data = await response.json();
        console.log(data.data);
        find(data.data.id);
      }
    } catch (error) {
      console.log(error);
      setError("Erro ao fazer login. Tente novamente.");
    }
  };

  const find = (dataLogin) => {
    localStorage.setItem('vapo', JSON.stringify(dataLogin));
    window.location.href = "./home";
  };

  return (
    <div className="login">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form" onSubmit={getUsers}>
            <span className="login-form-title">Login</span>
            {error && <div className="error-message">{error}</div>}

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
                minLength="8"
                className={password !== "" ? "has-val input" : "input"}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
                <Link className="login-form-btn" to='/home'><button className="login-form-btn">Login</button></Link>
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
};

export default Login;
