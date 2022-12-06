
import "./modal-excluir.css";
import {React, useState} from "react";
import {CgClose} from 'react-icons/cg'

const Modal4 =(props) => {
   const { handleModal } = props
   const [posts, setPosts] = useState([])
   const [descricao, setDescricao] = useState("");
   const [imgURL, setImgURL] = useState("");
   const [imgURL2, setImgURL2] = useState("");
   const [localizacao, setLocalizacao] = useState("")

   
   const deletePostagem = async deleteId => {
    const requestOptions = {
        method:'DELETE',
        headers:{'Content-type': 'application/json'}    
    }
    try{
        await fetch('http://localhost:3001/post/:id' + deleteId, requestOptions)
        setPosts(posts.filter(posts => posts.id != deleteId))
        handleModal(false)
        } catch(error){
            console.log(error);
            alert('error')
        }
    }
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
        <button className="btn-confirmacao2" onClick={deletePostagem}>Sim</button>
       </div>
       
      
     
      </div>
      </div>
    </div>
  );
}

export default Modal4;
