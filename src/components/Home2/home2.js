import React from 'react'
import './home2Styles.css'
import {Link} from 'react-router-dom'

const Home2 = () => {
    return (
        <div className='home2'>
            <div className="container" >
                <div className="content">
                    <h2><span>Eles</span> são necessários</h2>
                    <p>Quando se está tendo terapia a presença (e ajuda) de um animalzinho de estimação, reduzirá os pensementos negativos
                        de seus tutores, pois sua presença consegue amenizar todos os sintomas de estresse, angústia, tristeza e solidão. 
                    </p>
                    <div>
                     <Link to='/apimapa'><button>Resgate um animal</button></Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home2
