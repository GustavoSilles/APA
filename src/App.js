import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Cadastro from "./components/Cadastro/cadastro"
import Feed from "./components/Feed/feed"
import Footer from "./components/Footer/footer"
import Home from "./components/Home/home"
import Home2 from "./components/Home2/home2"
import Home3 from "./components/Home3/home3"
import LandingPage from "./components/landingpage/Landingpage"
import Login from "./components/Login/login"
import Navbar from "./components/Navbar/navbar"
import Perfil from "./components/Perfil/perfil"

// import React from 'react'
// import Login from './components/login/Login';
// import Cadastro from './components/cadastro/Cadastro';
// import Home2 from './components/home2/Home2';
// import Home from './components/home/Home';
// import Navbar from './components/navbar/Navbar';
// import Home3 from './components/home3/Home3'
// import Footer from './components/footer/Footer';
// import Landingpage from './components/landingpage/Landingpage';


function App(){
  return (
    <Router>
      <Routes>
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/home3" element={<Home3 />} />
          <Route path="/Landing" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  )}
    // <>
       {/* <Landingpage/> 
       <Login /> 
      <Cadastro />
       <Navbar />
      <Home />
      <Home2 />
      <Home3 />
      <Footer /> 
    </>
  );
} */}

export default App


















// import React from 'react'
// import Login from './components/login/Login';
// import Cadastro from './components/cadastro/Cadastro';
// import Home2 from './components/home2/Home2';
// import Home from './components/home/Home';
// import Navbar from './components/navbar/Navbar';
// import Home3 from './components/home3/Home3'
// import Footer from './components/footer/Footer';


// function App() {
//   return (
//     <>
    
//       <Cadastro/>
//       {/* <Login/>
//       <Navbar />
//       <Home />
//       <Home2 />
//       <Home3 />
//       <Footer /> */}
//     </>
//   );
// }

// export default App;
