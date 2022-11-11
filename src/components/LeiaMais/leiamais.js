import React from 'react'
import './leiamais.css'
import Navbar from "../Navbar/navbar"
import Footer from "../Footer/footer"

const LeiaMais = () => {
    return (
        <>
            <Navbar />
            <div className='leiamais'>
                <div className="container" >
                    <div className="content">
                        <h2><span className='outraCor'>Como posso</span> ajudar os animais?</h2>
                            <h3>Para que você possa ajudar um animal, sendo este um gato, um cachorro, vaca e etc, 
                                não é preciso necessariamente adota-lo, você pode alimenta-lo caso ele esteja visivelmente com fome, 
                                dar água para ele, e principalmente comunicar a uma central que possa auxilia-lo,
                                e o principal, você deve tirar uma foto e posta-la em nosso feed, pois caso você não tenha condições de ajuda-lo, 
                                uma outra pessoa poderá.
                            </h3>
                        <h2><span className='outraCor'>Onde posso levar o animal para que ele</span> seja cuidado?</h2>
                            <h3>
                                Em nossa página de “Locais de Ajuda”, haverá diversas localizações de veterinários, 
                                onde o animal poderá ser medicado e tratado, 
                                também há diversas petshops, onde ele poderá ser limpo e bem cuidado. 
                                Porém as principais localizações são o hospital Veterinário Vet Ilha, 
                                o Centro de Zoonoses e o Centro de controle de Zoonoses.
                            </h3>
                    </div>
                </div>
            </div>
           <Footer/>
           
        </>
    )
}
export default LeiaMais