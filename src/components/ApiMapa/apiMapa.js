import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './apiMapaStyles.css'
import Navbar from '../Navbar/navbar'

const containerStyle = {
    width: '100%',
    height: '100vh'
  };
  
  const center = {
    lat:  -27.590824,
    lng: -48.551262 
  };
  const petshop = {
    lat: -27.431461,
    lng: -48.396598
  };
  
const ApiMapa = () => {
    
    return (
        <>
       <></>
    <Navbar/>
     <LoadScript
      googleMapsApiKey="AIzaSyDrTIZQcdJFV8sv5VwV-S4v2YOgtO3AcfU"
     
    >
      <GoogleMap
       
       mapContainerStyle={ containerStyle}
        center={center}
        zoom={12}
      >
       <Marker position={petshop} />
        <Marker position={center} 
        icon={{
          path: "M 8546 12274 c -311 -61 -636 -299 -905 -661 c -346 -465 -580 -1080 -668 -1758 c -28 -216 -25 -698 5 -894 c 70 -447 219 -789 442 -1011 c 191 -192 431 -281 675 -252 c 581 72 1154 706 1460 1616 c 254 755 281 1550 73 2156 c -203 591 -615 897 -1082 804 Z"
        }}
        options={{
          label: {
            text: "Posição teste",
            className: "map-marker"
          }
        }} /> 
      </GoogleMap>
       </LoadScript> 
        </>
    )
}

export default ApiMapa