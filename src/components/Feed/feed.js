import React, { useState } from "react";
import './feedStyles.css'
import Navbar from '../Navbar/navbar'
import {FiMapPin} from "react-icons/fi"
import {HiPhotograph} from "react-icons/hi"
import Posts from "../Posts/posts"
import Modal from '../Modal/modal'

const Feed = (list) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [descricao, setDescricao] = useState("");
    const [imgURL, setImgURL] = useState("");


    const getPostagem = async ({onAddPost}) => {  

        if (imgURL && descricao != "") {
            try {
                const requestOptions = {
                    method: 'GET',
                    headers: { 'Content-type': 'application/json' },
                    body: JSON.stringify({
                        imgURL: imgURL,
                        descricao: descricao
                    })
                }
                await fetch('http://localhost:3001/api/post', requestOptions)
                window.location.reload();
              }catch( error){
                setImgURL('')
                setDescricao('')
                
            }
        }else{
          alert("bla")
            }
        }

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
                {list.map((post, Feed) => (
                        <div key={Feed} fotoPerfil={post.fotoPerfil} nomeUsuario={post.nomeUsuario} 
                        descricao={post.descricao} fotoPost={post.fotoPost} />
                    ))}
                
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
