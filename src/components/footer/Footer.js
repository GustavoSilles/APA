import React from 'react'
import { SiPug } from 'react-icons/si'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'
import { FiMail, FiFacebook, FiGithub, FiInstagram, FiLinkedin} from 'react-icons/fi'
import './FooterStyles.css'

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
                        <p>bglh do maps</p>
                        <p>Perfil</p>
                    </div>
                    <div className="col">
                        <h3>My Account</h3>
                        <p>logout</p>
                        <p>config</p>
                        <p>ajuda</p>
                        <p>termos</p>
                    </div>
                    <div className="col">
                        <h3>Information</h3>
                        <p>resgate um animal</p>
                        <p>learn more</p>
                        <p>home</p>
                        <p>Contact</p>
                    </div>
                    <div className="col">
                        <h3>creditos</h3>
                        <p>Gustavo</p>
                        <p>Abilio</p>
                        <p>Basitt</p>
                        <p>Dai ana</p>
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
