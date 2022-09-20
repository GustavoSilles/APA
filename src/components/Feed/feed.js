import React from 'react'
import './feedStyles.css'
import Navbar from '../Navbar/navbar'
import {FiMapPin} from "react-icons/fi"
import {HiPhotograph} from "react-icons/hi"

const Feed = () => {
    return (
        <>
          <Navbar/>
        <div className='feed'>
            <div className="container-feed">
                <div className='divpost'>
                    <div className='fotopost'>
                    <div className='foto'></div>
                    <button className='btnpost'>Começar a publicação</button>
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
                </div>
            </div>
        </>
    )
}

export default Feed
