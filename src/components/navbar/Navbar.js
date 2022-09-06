import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './navbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


    return (
        <div name='top' className='navbar'>
            <div className="container">
                <div className="logo">
                    <h1 className='textlogo'>APA</h1>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/feed'>Feed</Link> </li>
                    <li><Link to='/apimapa'>bglh do maps</Link></li>
                    <li><Link to='/perfil'>Perfil</Link></li>
                    <Link to='/login'><button className='navbtn'>Logout</button></Link>
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar
