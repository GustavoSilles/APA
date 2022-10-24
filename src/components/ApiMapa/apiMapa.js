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

  const localizacao = [{
    lat: -27.431461222742616,
    lng: -48.39659835064593
  }, {
    lat: -27.4393955680015051,
    lng: -48.49331615525595
  }, {
    lat: -27.451968788255307,
    lng: -48.45753237237153
  }, {
    lat: -27.445054400545235,
    lng: -48.38765042731308
  }, {
    lat: -27.55143088965647,
    lng: -48.496244861115244
  }, {
    lat: -27.57506552888069,
    lng: -48.513914178481585
  }, {
    lat: -27.600989381562105,
    lng: -48.50051573092948
  }, {
    lat: -27.653259586912817,
    lng: -48.47957860534384
  }, {
    lat: -27.680390640506715,
    lng: -48.49957087404924
  }, {
    lat: -27.67636018887423,
    lng: -48.50065438395896
  }, {
    lat: -27.66358825995029,
    lng: -48.535223851216465
  }, {
    lat: -27.5928238455143745,
    lng: -48.550558920510134
  }, {
    lat: -27.5916960265658675,
    lng: -48.55712767552501
  }, {
    lat: -27.575011782278448,
    lng: -48.513856075486416
  }, {
    lat: -27.59652929414465,
    lng: -48.55001367638963
  }, {
    lat: -27.49355788094308,
    lng: -48.41119039617368
  }, {
    lat: -27.476972059823566,
    lng: -48.4185614539143
  }, {
    lat: -27.425285109997326,
    lng: -48.42511644679131
  }, {
    lat: -27.5873375981432,
    lng: -48.542888597569394
  }]


  
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
        <Marker position={center} 
        options={{
          label: {
            text: "Centro Veterinário AnimalVet",
            className: "map-marker"
          }
        }} />
        <Marker position={localizacao} 
        options={{
          label: {
            text: "Animal Care Medicina",
            className: "map-marker"
          }
        }} /> 
        <Marker position={localizacao} 
        options={{
          label: {
            text: "Animal Land pet center",
            className: "map-marker"
          }
        }} /> 
        <Marker position={localizacao} 
        options={{
          label: {
            text: "Animal Vital",
            className: "map-marker"
          }
        }} /> 
        <Marker position={localizacao} 
        options={{
          label: {
            text: "Petshop anjos de patas",
            className: "map-marker"
          }
        }} /> 
        <Marker position={localizacao} 
        options={{
          label: {
            text: "Diretoria de Bem-Estar Animal",
            className: "map-marker"
          }
        }} /> 
        <Marker position={localizacao} 
        options={{
          label: {
            text: "Vila Animal Centro Veterinário",
            className: "map-marker"
          }
        }} /> 
        <Marker position={localizacao} 
        options={{
          label: {
            text: "Animais e Cia Floripa",
            className: "map-marker"
          }
        }} />
        <Marker position={localizacao} 
        options={{
          label: {
            text: "Animal Village",
            className: "map-marker"
          }
        }} />
        <Marker position={localizacao} 
        options={{
          label: {
            text: "Reino dos Animais",
            className: "map-marker"
          }
        }} />
        <Marker position={localizacao} 
        options={{
          label: {
            text: "Veterinária animal Floripa",
            className: "map-marker"
          }
        }} />
        <Marker position={localizacao} 
        options={{
          label: {
            text: "Hospital Veterinário Vet Ilha",
            className: "map-marker"
          }
        }} />
        <Marker position={localizacao} 
        options={{
          label: {
            text: "Pet Care Center",
            className: "map-marker"
          }
        }} />
        <Marker position={localizacao} 
        options={{
          label: {
            text: "Centro de Zoonoses",
            className: "map-marker"
          }
        }} />
        <Marker position={localizacao} 
        options={{
          label: {
            text: "Centro de Controle de Zoonoses",
            className: "map-marker"
          }
        }} />
        <Marker position={localizacao} 
        options={{
          label: {
            text: "PET GREE SHOP",
            className: "map-marker"
          }
        }} />
        <Marker position={localizacao} 
        options={{
          label: {
            text: "AgroPet agroshop",
            className: "map-marker"
          }
        }} />
        <Marker position={localizacao} 
        options={{
          label: {
            text: "Pet Gold",
            className: "map-marker"
          }
        }} />
        <Marker position={localizacao} 
        options={{
          label: {
            text: "Petz",
            className: "map-marker"
          }
        }} />
        
      </GoogleMap>
       </LoadScript> 
        </>
    )
}

export default ApiMapa