import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import './apiMapaStyles.css'
import Navbar from '../Navbar/navbar'


const containerStyle = {
    width: '100%',
    height: '100vh'
  };
  
  const center = {
    lat:  -27.5969,
    lng: -48.5495 
  };
  
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
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
       </LoadScript> 
        </>
    )
}

export default ApiMapa