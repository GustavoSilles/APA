import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Cadastro from "./components/Cadastro/cadastro"
import Feed from "./components/Feed/feed"
import Footer from "./components/Footer/footer"
import Home from "./components/Home/home"
import Home2 from "./components/Home2/home2"
import Home3 from "./components/Home3/home3"
import LandingPage from "./components/Landingpage/landingpage"
import LeiaMais from "./components/LeiaMais/leiamais"
import Login from "./components/Login/login"
import Navbar from "./components/Navbar/navbar"
import Perfil from "./components/Perfil/perfil"
import './index.css';
import ApiMapa from './components/ApiMapa/apiMapa'
import Adm from "./components/Adm/adm"
import Perfil2 from './components/Perfil2/perfil2'
import Navbar2 from './components/Navbar2/navbar2'


function App(){
  return (
    <BrowserRouter>

      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/perfil2" element={<Perfil2 />} />
          <Route path="/adm" element={<Adm />} />
          <Route path="/navbar2" element={<Navbar2 />} />
          <Route path="/apimapa" element={<ApiMapa />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/home3" element={<Home3 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/leiamais" element={<LeiaMais />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  )
}

  export default App


