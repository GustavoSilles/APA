import React from 'react'
import Login from './components/login/Login';
import Cadastro from './components/cadastro/Cadastro';
import Home2 from './components/home2/Home2';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Home3 from './components/home3/Home3'
import Footer from './components/footer/Footer';
import Landingpage from './components/landingpage/Landingpage';

function App() {
  return (
    <>
       <Landingpage/> 
       <Login /> 
      <Cadastro />
       <Navbar />
      <Home />
      <Home2 />
      <Home3 />
      <Footer /> 
    </>
  );
}

export default App;
