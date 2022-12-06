import React, { useState, useEffect } from "react";
import './feedStyles.css'
import Navbar from '../Navbar/navbar'
import Posts   from "../Posts/posts"
import Modal from '../Modal/modal'


let loadfeed = 0

const Feed = () => {
    useEffect(()=>{getPostagem()},[])
    useEffect(()=>{ getUsers()},[])
    const [loggedUser, setLoggedUser] = useState({})
    const [posts, setPosts] = useState([])
    const [modalOpen, setModalOpen] = useState(false);
    const [descricao, setDescricao] = useState("");
    const [imgURL, setImgURL] = useState("");
    const [imgURL2, setImgURL2] = useState("");
    const [localizacao, setLocalizacao] = useState("")
    
    const getUsers = async () => {

        try{
           {

                const responseUser = await fetch('http://localhost:3001/api/user/' + JSON.parse(localStorage.getItem('vapo')))
                const dataUser = responseUser.json()
                dataUser.then(
                    (val) => {
                        setLoggedUser(val.data) 
                    }
                )
            }
        }catch(e){
            console.log("erro");
        }
    }
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
    console.log(posts);
    if(loadfeed < 7){
        loadfeed++
        getPostagem()
        getUsers()
    }
    return (
        <>
          <Navbar/>
         
        <div className='feed'>
            <div className="container-feed">
                <div className='divpost'>
                    <div className='fotopost'>
                    <div className='foto_DoFeed'><img className='foto_DoFeed2' src={loggedUser.imgURL2}></img></div>
                    <button  className="btnpost"  onClick={() => {setModalOpen(true)}}>Começar a publicação</button>
                   
                    </div>
                   
                </div>
                {modalOpen && (<Modal setOpenModal={setModalOpen} />)}
                </div>
                
                    { posts.map((posts) => {
                        return <Posts descricao = {posts.descricao} imgURL = {posts.imgURL} localizacao = {posts.localizacao}  username = {posts.usuario} imgURL2 = {posts.photo} id = {posts.id} />
                    })}
               
            </div>
       
           
        </>
    )
}

export default Feed