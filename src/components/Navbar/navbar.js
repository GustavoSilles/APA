import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './navbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


    return (
        <div name='top'>
        <div  className='navbar'>
         
                <div className="logo">
                    <h1 className='textlogo'>APA</h1>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li ><Link className='l1' to='/home'>Home</Link></li>
                    <li ><Link className='l2' to='/feed'>Feed</Link> </li>
                    <li ><Link className='l3' to='/apimapa'>Locais de Ajuda</Link></li>
                    <li><Link to='/perfil'><div className='navbox3'>
                        <div className='fotopost3'></div>
                        <div className='nominho2'>Gustavin</div></div></Link></li> 
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
           
        </div>
        </div>
    )
}

export default Navbar