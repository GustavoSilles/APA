import { useState } from "react"
import  Feed  from "../Feed/feed"
import Modal from "../Modal/modal"

export const SavePost = () =>{
    const [list, setList] = useState([])
  
      function  handleSavePost(post){
        let newList = [...list]
        newList.push(post)
        setList(newList)
      }
    return (
      <>
      <Modal onAddPost={handleSavePost} />
      <Feed list={list} />
      </>
      )
    }