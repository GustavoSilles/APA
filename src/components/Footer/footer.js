import React from 'react'
import { SiPug } from 'react-icons/si'
// import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { FiMail, FiFacebook, FiGithub, FiInstagram, FiLinkedin} from 'react-icons/fi'
import './footerStyles.css'
// import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                    <SiPug className='icon' />
                        <h2>APA.</h2>
                    </div>
                     {/* <Link to="top" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='icon' color='#532E1C'/>
                    </Link> */}
                   
                   

                </div>
                <div className="col-container">
                    <div className="col">
                        <h3>Navegação</h3>
                        
                        <p><Link className='textoFooter' to='/home'>Home</Link></p>
                        <p><Link className='textoFooter' to='/feed'>Feed</Link></p>
                        <p><Link className='textoFooter' to='/apimapa'>Locais de Ajuda</Link></p>
                        <p><Link  className='textoFooter' to='/perfil'>Perfil</Link></p>
                       
                    </div>
                    <div className="col">
                        <h3>Minha Conta</h3>
                        <p><Link  className='textoFooter' to='/perfil'>Logout</Link></p>
                        <p><Link  className='textoFooter' to='/perfil'>Configurações </Link></p>
                        <p><Link  className='textoFooter' to='/perfil'>Ajuda</Link></p>
                        <p><Link  className='textoFooter' to='/perfil'>Termos</Link></p>
                    </div>
                    <div className="col">
                        <h3>Informações</h3>
                        <p><Link  className='textoFooter' to='/home2'>Resgate um animal</Link></p>
                        <p><Link  className='textoFooter' to='/home'>Leia mais</Link></p>
                        <p><Link  className='textoFooter' to='/home'>Home</Link></p>
                        <p><Link  className='textoFooter' to='/home3'>Contatar</Link></p>
                    </div>
                    <div className="col">
                        <h3>Créditos</h3>
                        <p><Link  className='textoFooter' to='/perfil'>Equipe TheBoys:</Link></p>
                        <p><Link  className='textoFooter' to='/perfil'>Gustavo Silles</Link></p>
                        <p><Link  className='textoFooter' to='/perfil'>Abílio Gama</Link></p>
                        <p><Link  className='textoFooter' to='/perfil'>Gabriel Basitt </Link></p>
                    </div>
                    <form>
                        <h3>Redes sociais</h3>
                        <input type="email" placeholder='Envie um e_mail' />
                        <FiMail className='mail-icon' />
                        <div className="social-group">
                            <FiInstagram className='social-icon' />
                            <FiFacebook className='social-icon' />
                            <FiLinkedin className='social-icon' />
                            <FiGithub className='social-icon' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer
