import React, { useState, useEffect } from "react";
import './feedStyles.css'
import Navbar from '../Navbar/navbar'
import Posts from "../Posts/posts"
import Modal from '../Modal/modal'

const Feed = (list) => {
    console.log(list);
    const [modalOpen, setModalOpen] = useState(false);
    const [descricao, setDescricao] = useState("");
    const [imgURL, setImgURL] = useState("");


    const getPostagem = async () => {  

        
            try {
                const requestOptions = {
                    method: 'GET'
                }
                const resp = await fetch('http://localhost:3001/api/post', requestOptions)
                //window.location.reload();
                console.log("getdobasit", resp);
              }catch( error){
                console.log(error);
                setImgURL('')
                setDescricao('')
                
            }
        }


        useEffect(()=>{
            getPostagem()
            console.log("caiu no usefecte");
        }, []);

    return (
        <>
          <Navbar/>
         
        <div className='feed'>
            <div className="container-feed">
                <div className='divpost'>
                    <div className='fotopost'>
                    <div className='foto'></div>
                    <button  className="btnpost"  onClick={() => {setModalOpen(true)}}>Começar a publicação</button>
                   
                    </div>
                    
                   
                </div>
                {modalOpen && <Modal setOpenModal={setModalOpen} />}
                </div>
                
             <Posts/>
             <Posts/>
             <Posts/>
             <Posts/>
             <Posts/>
             
            </div>
                
        </>
    )
}

export default Feed
