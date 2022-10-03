import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Cadastro from "./components/Cadastro/cadastro"
import Feed from "./components/Feed/feed"
import Footer from "./components/Footer/footer"
import Home from "./components/Home/home"
import Home2 from "./components/Home2/home2"
import Home3 from "./components/Home3/home3"
import LandingPage from "./components/Landingpage/landingpage"
import Login from "./components/Login/login"
import Navbar from "./components/Navbar/navbar"
import Perfil from "./components/Perfil/perfil"
import './index.css';
import ApiMapa from './components/ApiMapa/apiMapa'

function App(){
  return (
    <Router>
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/apimapa" element={<ApiMapa />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/home3" element={<Home3 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </Router>
  )
}

  export default App









// import React from 'react'
// import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
// import Cadastro from "./components/Cadastro/cadastro"
// import Feed  from "./components/Feed/feed"
// import Footer from "./components/Footer/footer"
// import Home from "./components/Home/home"
// import Home2 from "./components/Home2/home2"
// import Home3 from "./components/Home3/home3"
// import LandingPage from "./components/Landingpage/landingpage"
// import Login from "./components/Login/login"
// import Navbar from "./components/Navbar/navbar"
// import Perfil from "./components/Perfil/perfil"
// import './index.css';
// import ApiMapa from './components/ApiMapa/apiMapa'
// import { SavePost } from "./components/SavePost/savepost"


//  function App () {
//   return(
//     <>
   
   
//   <Router>
//       <Routes>
//           <Route path="/" element={<LandingPage />} />
//           <Route path="/apimapa" element={<ApiMapa />} />
//           <Route path="/cadastro" element={<Cadastro />} />
//           <Route path="/feed" element={<Feed />} />
//           <Route path="/footer" element={<Footer />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/home2" element={<Home2 />} />
//           <Route path="/home3" element={<Home3 />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/navbar" element={<Navbar />} />
//           <Route path="/perfil" element={<Perfil />} />
//       </Routes>
//     </Router>
//     <SavePost/>
//     </>
//   )
// }

// export default App

