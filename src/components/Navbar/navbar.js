import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './navbarStyles.css'
import ModalPerfil from '../Modal-perfil/modal-perfil'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)
    const [loggedUser, setLoggedUser] = useState({})
    const [modal, setModal] = useState(false);
    const handleModal = (state) => {
        setModal(state)
      }
      const getPerfil = async () => {  
        try {
            const  response = await fetch('http://localhost:3001/api/user/' + JSON.parse(localStorage.getItem('vapo')))
            const data = response.json()
            data.then(
                (val) => setLoggedUser(val.data)
            )   
          }catch( error){
            console.log(error);
            
        }
    }
    useEffect(()=>{getPerfil()},[])
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
                    <li><div className='fotopost8' onClick={() => {setModal(!modal)}}><img className='fotopost2' src={loggedUser.imgURL2}></img></div></li> 
                       
                       
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