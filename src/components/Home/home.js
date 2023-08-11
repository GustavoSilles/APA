import React from "react";
import "./homeStyles.css";
import Home2 from "../Home2/home2";
import Home3 from "../Home3/home3";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="scroll">
        <div className="home">
          <div className="container">
            <div className="content">
              <h1 className="marrom">Quer saber como</h1>
              <h2 className="preto">você pode</h2>
              <h1 className="marrom">Ajudar</h1>
              <h2 className="preto">os animais?</h2>
              <Link to="/leiamais">
                <button className="blackButton">Leia mais</button>
              </Link>
            </div>
          </div>
        </div>
        <Home2 />
        <Home3 />
        <Footer />
      </div>
    </>
  );
};

export default Home;
