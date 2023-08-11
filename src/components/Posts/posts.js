import React, { useState } from "react";
import "./posts.css";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";
import Modal2 from "../Modal2/modal2";
import Modal3 from "../Modal-report/modal-report";
import ModalCompartilhar from "../Modal-compartilhar/modal-compartilhar";
import { GoMegaphone } from "react-icons/go";

const Posts = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const handleModal = (state) => {
    setModal(state);
  };

  const [modalCompartilhar, setModalCompartilhar] = useState(false);
  const HandleModal = (state) => {
    setModalCompartilhar(state);
  };

  return (
    <>
      <div className="postzao">
        <div className="posixion">
          <div className="box">
            <div className="navbox">
              <div className="pika">
                <div className="fotopost">
                  <img className="fotopost2" src={props.imgURL2}></img>
                </div>
                <div className="divTextos">
                  <div className="nominho">{props.username}</div>
                  <div className="localizacao">{props.localizacao}</div>
                </div>
              </div>
              <GoMegaphone
                className="megaphone"
                onClick={() => {
                  setModal(true);
                }}
              />
            </div>
            <div className="descricao">
              <p className="descrison">{props.descricao}</p>
            </div>
            <div className="imgbox">
              <div
                className="propriafoto"
                style={{
                  background: `url(${props.imgURL}) no-repeat center center/cover`,
                }}
              ></div>
            </div>
            <div className="footerbox">
              <div
                className="ascoisas"
                onClick={() => {
                  setModalOpen(true);
                }}
              >
                <BsFillChatLeftTextFill className="iconbox" />
                <div className="textbox">Comente</div>
              </div>
              <div
                className="ascoisas2"
                onClick={() => {
                  setModalCompartilhar(true);
                }}
              >
                <BsFillShareFill className="iconbox" />
                <div className="textbox">Compartilhe</div>
              </div>
            </div>
            <div className="comentario"></div>
          </div>
          {modalOpen && <Modal2 setOpenModal={setModalOpen} />}
          {modal && <Modal3 handleModal={handleModal} id={props.id} />}
          {modalCompartilhar && <ModalCompartilhar HandleModal={HandleModal} />}
        </div>
      </div>

      <div></div>
    </>
  );
};

export default Posts;
