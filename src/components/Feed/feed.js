import React, { useState, useEffect } from "react";
import "./feedStyles.css";
import Navbar from "../Navbar/navbar";
import Posts from "../Posts/posts";
import Modal from "../Modal/modal";

let loadfeed = 0;

const Feed = () => {
  useEffect(() => {
    getPostagem();
  }, []);
  useEffect(() => {
    getUsers();
  }, []);
  const [loggedUser, setLoggedUser] = useState({});
  const [posts, setPosts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

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

  console.log(posts);

  if (loadfeed < 7) {
    loadfeed++;
    getPostagem();
    getUsers();
  }

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
        {posts
          .sort((a, b) => b.id - a.id)
          .map((posts) => {
            return (
              <Posts
                key={posts.id}
                descricao={posts.descricao}
                imgURL={posts.imgURL}
                localizacao={posts.localizacao}
                username={posts.usuario}
                imgURL2={posts.photo}
                id={posts.id}
              />
            );
          })}
      </div>
    </>
  );
};

export default Feed;
