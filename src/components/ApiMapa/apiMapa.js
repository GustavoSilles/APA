import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './apiMapaStyles.css'
import Navbar from '../Navbar/navbar'

  const position = {
    lat: -27.590824,
    lng: -48.551262 
  };
  
const ApiMapa = () => {
    
    return (
        <>
    <Navbar/>
     <LoadScript
     googleMapsApiKey="AIzaSyDrTIZQcdJFV8sv5VwV-S4v2YOgtO3AcfU"
    >
      <GoogleMap
       
       mapContainerStyle={{ width: '100%', height: '100vh'}}
        center={position}
        zoom={12}
      >
        {/* <Marker 
          position={center}
          icon={{
            path:"M 4615 12476 c -167 -39 -293 -112 -436 -255 c -116 -115 -199 -232 -279 -391 c -477 -954 -316 -2528 353 -3430 c 91 -123 249 -285 357 -366 c 354 -267 752 -281 1071 -38 c 327 250 551 732 636 1369 c 21 164 25 672 5 840 c -82 702 -291 1283 -618 1722 c -82 109 -243 273 -344 350 c -94 71 -272 163 -365 188 c -83 23 -302 29 -380 11 Z",
          }}
        /> */}
        <Marker position={position} />
        <></>
      </GoogleMap>

       </LoadScript> 
        </>
    )
}

export default ApiMapa