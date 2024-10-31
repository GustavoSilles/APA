import React, { useState, useEffect } from "react";
import "./feedStyles.css";
import Navbar from "../Navbar/navbar";
import Posts from "../Posts/posts";
import Modal from "../Modal/modal";

// Importe as imagens diretamente
import userImage from "../../assets/eu.jpeg";
import goldenRetrieverImage from "../../assets/golden-retriever-1.png";

const Feed = () => {
  const [loggedUser, setLoggedUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

  // Post manual que sempre estará visível
  const manualPost = {
    id: "manual",
    descricao:
    "Oi, pessoal! Este é o Max, um golden retriever de 4 anos, muito dócil e amigável. Ele desapareceu perto do endereço dito. Se alguém tiver alguma informação, por favor, entre em contato! Ajudem a compartilhar para que o Max possa voltar para casa. Obrigado a todos!",
    imgURL: goldenRetrieverImage, 
    localizacao: "R. Francisco Fausto Martins - 159 - Vargem Grande, Florianópolis - SC",
    usuario: "Gustavo Silles",
    photo: userImage
  };

  // Lista de posts manuais repetidos
  const repeatedManualPosts = [
    { ...manualPost, id: "manual1" },
    { ...manualPost, id: "manual2" },
    { ...manualPost, id: "manual3" }
  ];

  const getUsers = async () => {
    try {
      const responseUser = await fetch(
        "https://apa-server.onrender.com/api/user/" +
        JSON.parse(localStorage.getItem("vapo"))
      );
      const dataUser = await responseUser.json();
      setLoggedUser(dataUser.data);
    } catch (e) {
      console.log("erro");
    }
  };

  const getPostagem = async () => {
    try {
      const response = await fetch("https://apa-server.onrender.com/api/post");
      const data = await response.json();
      setPosts(data.data);
    } catch (error) {
      console.log(error);
      setPosts([]);
    }
  };

  useEffect(() => {
    getPostagem();
    getUsers();
  }, []);

  return (
    <>
      <Navbar />
      <div className="feed">
        <div className="container-feed">
          <div className="divpost">
            <div className="fotopost">
              <div className="foto_DoFeed">
                <img
                  className="foto_DoFeed2"
                  src={loggedUser.imgURL2}
                  alt=""
                />
              </div>
              <button
                className="btnpost"
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                Começar a publicação
              </button>
            </div>
          </div>
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>

        {[...repeatedManualPosts, ...posts]
          .sort((a, b) => b.id - a.id)
          .map((post) => (
            <Posts
              key={post.id}
              descricao={post.descricao}
              imgURL={post.imgURL}
              localizacao={post.localizacao}
              username={post.usuario}
              imgURL2={post.photo}
              id={post.id}
            />
          ))}
      </div>
    </>
  );
};

export default Feed;
