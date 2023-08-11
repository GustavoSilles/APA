import React from "react";
import "./landingpage.css";
import { Link } from "react-router-dom";

const Landingpage = () => {
  return (
    <>
      <div className="landingpage">
        <header className="cabecalho">
          <h1 className="cabecalho-imagem">APA</h1>
          <div className="divMainLandingPageNavbar">
            <Link to="/login" className="conteudo-principal-escrito-botao">
              Entrar
            </Link>
            <Link
              to="/cadastro"
              id="cadastro"
              className="conteudo-principal-escrito-botao"
            >
              Cadastre-se
            </Link>
          </div>
        </header>
        <div>
          <main className="conteudo">
            <section className="conteudo-principal">
              <div className="conteudo-principal-escrito">
                <h1 className="conteudo-principal-escrito-titulo">
                  Animais Precisam de Atenção
                </h1>
                <h2 className="conteudo-principal-escrito-subtitulo">
                  Aqui voce vai fazer a diferença, ajudando animais abandonados
                  e necessitados.
                </h2>
              </div>
              <div className="conteudo-principal-imagem"></div>
            </section>

            <section className="conteudo-secundario">
              <h3 className="conteudo-secundario-titulo">
                O que ela faz por você?
              </h3>
              <p className="conteudo-secundario-paragrafo">
                1. Voce pode <strong>criar varios posts</strong> mostrando
                animais que precisam de ajuda.
              </p>
              <p className="conteudo-secundario-paragrafo">
                2. Possui uma <strong>interface fácil e simples</strong> de se
                usar.
              </p>
              <p className="conteudo-secundario-paragrafo">
                3. <strong>Sistema de localização com o google maps</strong>,
                para pessoas postarem a localização do animal.
              </p>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Landingpage;
