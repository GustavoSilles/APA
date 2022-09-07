import React from 'react'
import { SiPug } from 'react-icons/si'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { FiMail, FiFacebook, FiGithub, FiInstagram, FiLinkedin} from 'react-icons/fi'
import './footerStyles.css'

import { Link } from 'react-scroll'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="top">
                    <div className="logo-footer">
                        <SiPug className='icon' />
                        <h2>APA.</h2>
                    </div>
                    <Link to="home" spy={true} smooth={true} duration={500} >
                        <BsFillArrowUpCircleFill className='icon' color='#532E1C'/>
                    </Link>

                </div>
                <div className="col-container">
                    <div className="col">
                        <h3>Navigation</h3>
                        <p>Home</p>
                        <p>Feed</p>
                        <p>Bglh do maps</p>
                        <p>Perfil</p>
                    </div>
                    <div className="col">
                        <h3>Minha Conta</h3>
                        <p>Logout</p>
                        <p>Configurações</p>
                        <p>Ajuda</p>
                        <p>Termos</p>
                    </div>
                    <div className="col">
                        <h3>Informações</h3>
                        <p>Resgate um animal</p>
                        <p>Leia mais</p>
                        <p>Home</p>
                        <p>Contatar</p>
                    </div>
                    <div className="col">
                        <h3>Créditos</h3>
                        <p> Equipe TheBoys:</p>
                        <p>Gustavo</p>
                        <p>Abilio</p>
                        <p>Basitt</p>
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
