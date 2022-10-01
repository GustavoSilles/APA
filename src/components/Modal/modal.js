import React from "react";
import "./modal.css";
import {CgClose} from 'react-icons/cg'
import {HiPhotograph} from "react-icons/hi"

function Modal({ setOpenModal }) {
  return (
   
    <div className="modalBackground">
     
      <div className="modalContainer">
      <div className="fadeIn">
      <div className="navmodal">
        <p className="titlemodal">Criar publicação</p>
     
        <CgClose size={22} color='#532E1C' onClick={() => {setOpenModal(false) }} id="cancelBtn" className="iconmodal"/>
      </div>
      <div className="descricaomodal">
      <textarea  cols="250" rows="50"  placeholder="No que voce esta pensando?" className="inpmodal"></textarea>
      </div>
      <div className="imgcontainer">
      <div className="imgmodal"></div>
      </div>
      
      <div className="footermodal">
       <HiPhotograph className = 'iconmodalimg'size={22} color='#532E1C' /> 
      <button className="btnpostar">Postar</button>
       </div>
     
      </div>
      </div>
    </div>
  );
}

export default Modal;
