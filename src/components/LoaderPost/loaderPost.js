import { useState } from "react"
import { Modal } from "../Modal/modal"
import {Feed} from "../Feed/feed"


  export const App = () => {
    const [list, setList] = useState([])

    function  postPostagem(post){
      let newList = [...list]
      newList.push(post)
      setList(newList)
    }
    return (
      <>
        <Modal onAddPost={postPostagem} />
        <Feed list={list} />
      </>
    )
  }