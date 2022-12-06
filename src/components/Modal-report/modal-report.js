
import "./modal-report.css";
import React from "react";
import {CgClose} from 'react-icons/cg'

const Modal3 =(props) => {
   const { handleModal } = props

   const report = async() => { 
    try{
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
              denuncia: true
            })
            
        }
        await fetch('http://localhost:3001/api/post/' + props.id,  requestOptions)
        handleModal(false)
        }catch(e){
          alert("erro")
      }
    }
  
  
  return (
   
    <div className="modalBackground3">
     
      <div className="modalContainer3">
      <div className="fadeIn">
      <div className="navmodal">
        <p className="titlemodal">Realmente deseja reportar essa publicação?</p>
     
        <CgClose size={22} color='#532E1C' onClick={() => {handleModal(false) }} id="cancelBtn" className="iconmodal"/>
      </div>
      
        <div className="footermodal">
        <button className="btn-confirmacao" onClick={() => {handleModal(false) }}>Não</button>
        <button className="btn-confirmacao2" onClick={report}>Sim</button>
       </div>
       
      
     
      </div>
      </div>
    </div>
  );
}

export default Modal3;