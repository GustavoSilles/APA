import React from "react";
import "./modal.css";
 import {CgClose} from 'react-icons/cg'
 import {HiPhotograph} from "react-icons/hi"

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
      <div className="navmodal">
      <p className="titlemodal">Criar publicação</p>
        <CgClose onClick={() => {setOpenModal(false) }} id="cancelBtn" className="iconmodal"/>
      </div>
      <div className="descricaomodal">
      <input placeholder="No que voce esta pensando?"></input>
      </div>
      <div className="imgcontainer">
      <div className="imgmodal"></div>
      </div>
      <div className="footermodal">
       <HiPhotograph className = 'iconmodalimg' /> 
      <button>Postar</button>
       </div>
      </div>
    </div>
  );
}

export default Modal;
