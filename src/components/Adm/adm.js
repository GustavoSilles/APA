import React from "react";
import './adm.css'
import Navbar2 from '../Navbar2/navbar2'
import Posts   from "../Posts/posts"


let loadfeed = 0
const Adm = () => {

    const [posts, setPosts] = useState([])
    const [descricao, setDescricao] = useState("");
    const [imgURL, setImgURL] = useState("");
    const [imgURL2, setImgURL2] = useState("");
    const [localizacao, setLocalizacao] = useState("")

    const getPostagem = async () => {  
        try {
            const  response = await fetch('http://localhost:3001/api/post/reports')
            const data = response.json()
            data.then(
                (val) => setPosts(val.data)
               
            )   
            console.log(data);
          }catch( error){
            console.log(error);
            setPosts([])
            
        }
    }
    if(loadfeed < 7){
        loadfeed++
        getPostagem()
   
    }

    return (
        <>
          <Navbar2/>
        <div className='feed'>
            <div className="container-feed">
            { posts.map((posts) => {
                        return <Posts descricao = {posts.descricao} imgURL = {posts.imgURL} localizacao = {posts.localizacao}  username = {posts.usuario} imgURL2 = {posts.photo} id = {posts.id} />
                    })}
            </div>
         </div>  
         
        </>
    )
}

export default Adm