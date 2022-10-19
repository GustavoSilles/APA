import React from 'react'
import './home2Styles.css'
import {Link} from 'react-router-dom'

const Home2 = () => {
    return (
        <div className='home2'>
            <div className="container" >
                <div className="content">
                    <h2><span>Eles</span> são especiais</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi officiis unde perferendis voluptas laborum aliquam culpa officia a maiores porro. Consequuntur officia corporis aliquam numquam, fuga quisquam illo. Obcaecati, voluptatum.</p>
                    <div>
                     <Link to='/apimapa'><button>Resgate um animal</button></Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home2
