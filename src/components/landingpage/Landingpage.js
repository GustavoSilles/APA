import React from 'react'
import './landingpage.css'
import {Link} from 'react-router-dom'

const Landingpage = () => {
    return (
     <div className='landingpage'>
  <header className="cabecalho">
    <div className="cabecalho-imagem"></div>
    <nav className="cabecalho-menu">
      <p className="cabecalho-menu-item">Comunidade APA</p>
      <p className="cabecalho-menu-item">objetivo</p>
      <p className="cabecalho-menu-item">creditos</p>
    </nav>
  </header>
  <div>
  <main className="conteudo">
    <section className="conteudo-principal">
      <div className="conteudo-principal-escrito">
        <h1 className="conteudo-principal-escrito-titulo">APA</h1>
        <h2 className="conteudo-principal-escrito-subtitulo">Aqui voce vai fazer a diferença, ajudando animais abandonados e necessitados</h2>
        <Link to='/login'><button className="conteudo-principal-escrito-botao">Faça Login</button></Link>
      </div>
      <div className="conteudo-principal-imagem"></div>
    </section>

    <section className="conteudo-secundario">
      <h3 className="conteudo-secundario-titulo">O que ela faz por você?</h3>
      <p className="conteudo-secundario-paragrafo">1. Voce pode <strong>criar varios posts</strong> mostrando animais que precisam de ajuda</p>
      <p className="conteudo-secundario-paragrafo">2. Possui uma <strong>interface facil e simples</strong> de se usar</p>
      <p className="conteudo-secundario-paragrafo">3. <strong>sistema de localização com o google maps</strong>, para pessoas postarem a localização do animal</p>
    </section>
  </main>

  <footer className="rodape">
    <div className="rodape-imagem"></div>
  </footer>
  </div>
  </div>
    )
}

export default Landingpage