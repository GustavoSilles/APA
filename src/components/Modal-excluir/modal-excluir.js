import "./modal-excluir.css";
import { React, useState, useEffect } from "react";
import { CgClose } from "react-icons/cg";

let loadfeed = 0;

const Modal4 = (props) => {
  const { handleModal } = props;
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
  const deletePostagem = async () => {
    const requestOptions = {
      method: "DELETE",
    };
    try {
      await fetch(
        `https://apa-server.onrender.com/api/post/${posts[0].id}`,
        requestOptions
      );
      window.location.reload(false);
      handleModal(false);
    } catch (error) {
      console.log(error);
    }
  }; 

  if (loadfeed < 7) {
    loadfeed++;
    getAdm();
  }
  return (
    <div className="modalBackground3">
      <div className="modalContainer3">
        <div className="fadeIn">
          <div className="navmodal">
            <p className="titlemodal">
              Realmente deseja excluir essa publicação?
            </p>

            <CgClose
              size={22}
              color="#532E1C"
              onClick={() => {
                handleModal(false);
              }}
              id="cancelBtn"
              className="iconmodal"
            />
          </div>

          <div className="footermodal">
            <button
              className="btn-confirmacao"
              onClick={() => {
                handleModal(false);
              }}
            >
              Não
            </button>
            <button className="btn-confirmacao2" onClick={deletePostagem}>
              Sim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal4;
