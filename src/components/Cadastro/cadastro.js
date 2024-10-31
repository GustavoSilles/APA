import React, { useState } from "react";
import "./cadastro.css";
import { Link } from "react-router-dom";

const Cadastro = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const postUser = async (e) => {
    e.preventDefault();
 
    if (!username || !name || !email || !password) {
      setError("Todos os campos são obrigatórios.");
      return;
    }

    if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      setError("Email inválido.");
      return;
    }

    if (!password.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
      setError("A senha deve ter no mínimo 8 caracteres, incluindo letras e números.");
      return;
    }

    try {
      const requestOptions = {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          username: username,
          name: name,
          email: email,
          password: password,
        }),
      };
      await fetch("https://apa-server.onrender.com/api/user", requestOptions);
      window.location.href = "./login";
    } catch (error) {
      console.log(error);
      setError("Erro ao cadastrar. Tente novamente.");
      setUsername("");
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="cadastro">
      <div className="container-cadastro">
        <div className="wrap-login">
          <form className="login-form" onSubmit={postUser}>
            <span className="login-form-title">Cadastro</span>

            {error && <div className="error-message">{error}</div>}

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
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Email"></span>
            </div>

            <div className="wrap-input">
              <input
                required
                className={password !== "" ? "has-val input" : "input"}
                minLength="8"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span className="focus-input" data-placeholder="Password"></span>
            </div>

            <div className="container-login-form-btn">
              <Link to='/login' type="submit" className="login-form-btn">
                Cadastre-se
              </Link>

            </div>

            <div className="text-center2">
              <div className="possui">
                <span className="txt1">Já possui conta? </span>
                <Link to="/login">
                  <p className="txt2">Fazer login</p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
