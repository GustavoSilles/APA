import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
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
  // const petshop = {
  //   lat: -27.431461,
  //   lng: -48.396598
  // };
  
const ApiMapa = () => {
    
    return (
        <>
    <Navbar/>
     <LoadScript
      googleMapsApiKey="AIzaSyDrTIZQcdJFV8sv5VwV-S4v2YOgtO3AcfU"
      // googleMapsApiKey="AIzaSyBR9lQa8zmcvvzbh1mbbetR7t59-pjCSxk"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        {/* <Marker position={petshop} />
        <Marker position={center} options={{
          label: {
            text: "Posição teste",
            className: "map-marker"
          }
        }} /> */}
        <></>
      </GoogleMap>
       </LoadScript> 
        </>
    )
}

export default ApiMapa