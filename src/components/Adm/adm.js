import React, { useState, useEffect } from "react";
import "./adm.css";
import Navbar2 from "../Navbar2/navbar2";
import Posts2 from "../Posts2/posts2";

let loadfeed = 0;
const Adm = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAdm(); 
  }, []);
  const getAdm = async () => {
    try {
      const response = await fetch("https://apa-server.onrender.com/api/post/reports");
      const data = response.json();
      data.then((val) => setPosts(val.data));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  if (loadfeed < 7) {
    loadfeed++;
    getAdm();
  }

  return (
    <>
      <Navbar2 />
      <div className="feed">
        <div className="container-feed2">
          {posts.map((posts) => {
            return (
              <Posts2
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
      </div>
    </>
  );
};

export default Adm;
