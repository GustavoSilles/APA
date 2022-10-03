import React, { useState } from "react";
import './feedStyles.css'
import Navbar from '../Navbar/navbar'
import {FiMapPin} from "react-icons/fi"
import {HiPhotograph} from "react-icons/hi"
import Posts from "../Posts/posts"
import Modal from '../Modal/modal'

import Post from "../Posts/posts"
const Feed = (list) => {
    const [modalOpen, setModalOpen] = useState(false);

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
                    
                    <div className='bagulhinhos'>
                     <div className='localização'>
                    <FiMapPin className='map-icon' />
                    <div className='teixto'>Localização</div>
                    </div>
                    <div className='foto-icon'>
                    <HiPhotograph className = 'img-icon' />   
                    <div className='teixto2'>Foto</div>
                    </div> 
                    </div>
                </div>
                {modalOpen && <Modal setOpenModal={setModalOpen} />}
                </div>
                
             <Posts/>
             {list.map((post, index) => (
                        <Post key={index} fotoPerfil={post.fotoPerfil} nomeUsuario={post.nomeUsuario} 
                        descricao={post.descricao} fotoPost={post.fotoPost} />
                    ))}
            </div>
          

                
        </>
    )
}

export default Feed
