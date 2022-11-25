import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './navbarStyles.css'
import ModalPerfil from '../Modal-perfil/modal-perfil'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
    const [modal, setModal] = useState(false);
    const handleModal = (state) => {
        setModal(state)
      }

    return (
        <div name='top'>
        <div  className='navbar'>
           
         
                <div className="logo">
                    <h1 className='textlogo'>APA</h1>
                </div>
              
                <ul  className={nav ? 'nav-menu active' : 'nav-menu'}>
                
                    <li><Link className='l1' to='/home'>Home</Link></li>
                    <li><Link className='l2' to='/feed'>Feed</Link> </li>
                    <li><Link className='l3' to='/apimapa'>Locais de Ajuda</Link></li>
                    <li><div className='fotopost8' onClick={() => {setModal(!modal)}}></div></li> 
                       
                       
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                   
                </div>
                
                {modal &&(<ModalPerfil handleModal={handleModal}/>)} 
           
        </div>
        </div>
    )
}

export default Navbar