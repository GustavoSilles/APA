import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './navbar2.css'

const Navbar2 = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


    return (
        <div name='top'>
        <div  className='navbar'>
           
         
                <div className="logo">
                    <h1 className='textlogo'>APA</h1>
                </div>
              
                <ul  className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link className='l2' to='/Adm'>Denuncias</Link> </li>
                    <li><Link to='/perfil2'><div className='navbox3'>
                        <div className='fotopost3'></div>
                        <div className='nominho2'>Admin</div></div></Link></li> 
                       
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                   
                </div>
                
              
           
        </div>
        </div>
    )
}

export default Navbar2