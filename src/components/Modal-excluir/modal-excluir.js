
import "./modal-excluir.css";
import React from "react";
import {CgClose} from 'react-icons/cg'

const Modal4 =(props) => {
   const { handleModal } = props

   
  return (
   
    <div className="modalBackground3">
     
      <div className="modalContainer3">
      <div className="fadeIn">
      <div className="navmodal">
        <p className="titlemodal">Realmente deseja excluir essa publicação?</p>
     
        <CgClose size={22} color='#532E1C' onClick={() => {handleModal(false) }} id="cancelBtn" className="iconmodal"/>
      </div>
      
        <div className="footermodal">
        <button className="btn-confirmacao"onClick={() => {handleModal(false) }}>Não</button>
        <button className="btn-confirmacao2">Sim</button>
       </div>
       
      
     
      </div>
      </div>
    </div>
  );
}

export default Modal4;
