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
            <div className="container">
                <div className="logo">
                    <h1 className='textlogo'>APA</h1>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/feed'>Feed</Link> </li>
                    <li><Link to='/apimapa'>bglh do maps</Link></li>
                    <li><Link to='/perfil'><div className='navbox3'>
                        <div className='fotopost3'></div>
                        <div className='nominho2'>Gustavin peroca mansa</div></div></Link></li>
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Navbar
