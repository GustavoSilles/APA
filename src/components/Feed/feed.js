import React, { useState, useEffect } from "react";
import './feedStyles.css'
import Navbar from '../Navbar/navbar'
import Posts   from "../Posts/posts"
import Modal from '../Modal/modal'

let loadfeed = 0

const Feed = () => {

    const [posts, setPosts] = useState([])
    const [modalOpen, setModalOpen] = useState(false);
    const [descricao, setDescricao] = useState("");
    const [imgURL, setImgURL] = useState("");


    const getPostagem = async () => {  
            try {
                const  response = await fetch('http://localhost:3001/api/post')
                const data = response.json()
                data.then(
                    (val) => setPosts(val.data)
                )   
              }catch( error){
                console.log(error);
                setPosts([])
                
            }
        }
    if(loadfeed < 7){
        loadfeed++
        getPostagem()
    }
    console.log(posts)
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
                {modalOpen && (<Modal setOpenModal={setModalOpen} />)}
                </div>
                
                    { posts.map((posts) => {
                        return <Posts descricao = {posts.descricao}/>
                    })}
                <Posts />
            </div>
                
        </>
    )
}

export default Feed
