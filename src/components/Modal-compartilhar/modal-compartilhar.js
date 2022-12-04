
import "./modal-compartilhar.css";
import React from "react";
import {CgClose} from 'react-icons/cg'

const ModalCompartilhar =(props) => {
   const { HandleModal } = props

   
  return (
   
    <div className="modalBackground3">
     
      <div className="modalContainer3">
      <div className="fadeIn">
      <div className="navmodal">
        <p className="titlemodalCompartilhar">Compartilhar</p>
     
        <CgClose size={22} color='#532E1C' onClick={() => {HandleModal(false) }} id="cancelBtn" className="iconmodal"/>
      </div>
      </div>
      </div>
    </div>
  );
}

export default ModalCompartilhar;
