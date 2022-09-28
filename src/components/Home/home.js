import React from 'react'
import './homeStyles.css'
import Home2 from '../Home2/home2'
import Home3 from '../Home3/home3'
import Navbar from '../Navbar/navbar'
import Footer from '../Footer/footer'

const Home = () => {
    return (
        <>
        <Navbar/>
        <div className='home'>
            <div className="container">
                <div className="content">
                <h1 className='marrom'>Quer saber como</h1>
                    <h1>você pode</h1>
                    <h1 className='marrom'>Proteger</h1>
                    <h1 className=''>os animais?</h1>
                    <div><button>Leia mais</button></div>
                </div>
            </div>
        </div>
        <Home2/>
        <Home3/>
        <Footer/>
        </>
        
        
    )
}

export default Home
