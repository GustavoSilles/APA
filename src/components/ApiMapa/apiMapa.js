import { React } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./apiMapaStyles.css";
import Navbar from "../Navbar/navbar";
import icon from "../../assets/PataMarrom.png";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: -27.590824,
  lng: -48.551262,
};
const localizacao = {
  lat: -27.431461,
  lng: -48.396598,
};
const localizacao2 = {
  lat: -27.439395,
  lng: -48.493316,
};
const localizacao3 = {
  lat: -27.451968,
  lng: -48.457532,
};
const localizacao4 = {
  lat: -27.445054,
  lng: -48.38765,
};
const localizacao5 = {
  lat: -27.55143,
  lng: -48.496244,
};

const localizacao7 = {
  lat: -27.600989,
  lng: -48.500515,
};
const localizacao8 = {
  lat: -27.653259,
  lng: -48.479578,
};
const localizacao9 = {
  lat: -27.68039,
  lng: -48.49957,
};
const localizacao10 = {
  lat: -27.67636,
  lng: -48.500654,
};
const localizacao11 = {
  lat: -27.663588,
  lng: -48.535223,
};
const localizacao12 = {
  lat: -27.592823,
  lng: -48.550558,
};
const localizacao13 = {
  lat: -27.591696,
  lng: -48.557127,
};
const localizacao14 = {
  lat: -27.575011,
  lng: -48.513856,
};
const localizacao15 = {
  lat: -27.596529,
  lng: -48.550013,
};
const localizacao16 = {
  lat: -27.493557,
  lng: -48.41119,
};
const localizacao17 = {
  lat: -27.476972,
  lng: -48.418561,
};
const localizacao18 = {
  lat: -27.425285,
  lng: -48.425116,
};
const localizacao19 = {
  lat: -27.587337,
  lng: -48.542888,
};
const localizacao20 = {
  lat: -27.534593,
  lng: -48.509859,
};

const ApiMapa = () => {
  return (
    <>
      <Navbar />
      <div className="Map">
        <LoadScript googleMapsApiKey="AIzaSyDrTIZQcdJFV8sv5VwV-S4v2YOgtO3AcfU">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
          >
            <Marker
              icon={icon}
              position={localizacao}
              options={{
                label: {
                  text: "Centro Veterinário AnimalVet",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao2}
              options={{
                label: {
                  text: "Animal Care pet center",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao3}
              options={{
                label: {
                  text: "Animal Land pet center",
                  className: "map-marker",
                },
              }}
            />
            <Marker
              icon={icon}
              position={localizacao4}
              options={{
                label: {
                  text: "Animal Vital",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao5}
              options={{
                label: {
                  text: "Petshop anjos de patas",
                  className: "map-marker",
                },
              }}
            />
            <Marker
              icon={icon}
              position={localizacao7}
              options={{
                label: {
                  text: "Vila Animal Centro Veterinário",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao8}
              options={{
                label: {
                  text: "Animais e Cia Floripa",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao9}
              options={{
                label: {
                  text: "Animal Village",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao10}
              options={{
                label: {
                  text: "Reino dos Animais",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao11}
              options={{
                label: {
                  text: "Veterinária animal Floripa",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao12}
              options={{
                label: {
                  text: "Hospital Veterinário Vet Ilha",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao13}
              options={{
                label: {
                  text: "Pet Care Center",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao14}
              options={{
                label: {
                  text: "Centro de Zoonoses",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao15}
              options={{
                label: {
                  text: "Centro de Controle de Zoonoses",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao16}
              options={{
                label: {
                  text: "PET GREE SHOP",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao17}
              options={{
                label: {
                  text: "AgroPet agroshop",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao18}
              options={{
                label: {
                  text: "Pet Gold",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              className="vai"
              icon={icon}
              position={localizacao19}
              options={{
                label: {
                  text: "Petz",
                  className: "map-marker",
                },
              }}
            />
            <Marker
              className="vai"
              icon={icon}
              position={localizacao20}
              options={{
                label: {
                  text: "Shopping Petz",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao}
              options={{
                label: {
                  text: "Centro Veterinário AnimalVet",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao2}
              options={{
                label: {
                  text: "Animal Care pet center",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao3}
              options={{
                label: {
                  text: "Animal Land pet center",
                  className: "map-marker",
                },
              }}
            />
            <Marker
              icon={icon}
              position={localizacao4}
              options={{
                label: {
                  text: "Animal Vital",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao5}
              options={{
                label: {
                  text: "Petshop anjos de patas",
                  className: "map-marker",
                },
              }}
            />
            <Marker
              icon={icon}
              position={localizacao7}
              options={{
                label: {
                  text: "Vila Animal Centro Veterinário",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao8}
              options={{
                label: {
                  text: "Animais e Cia Floripa",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao9}
              options={{
                label: {
                  text: "Animal Village",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao10}
              options={{
                label: {
                  text: "Reino dos Animais",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao11}
              options={{
                label: {
                  text: "Veterinária animal Floripa",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao12}
              options={{
                label: {
                  text: "Hospital Veterinário Vet Ilha",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao13}
              options={{
                label: {
                  text: "Pet Care Center",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao14}
              options={{
                label: {
                  text: "Centro de Zoonoses",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao15}
              options={{
                label: {
                  text: "Centro de Controle de Zoonoses",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao16}
              options={{
                label: {
                  text: "PET GREE SHOP",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao17}
              options={{
                label: {
                  text: "AgroPet agroshop",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao18}
              options={{
                label: {
                  text: "Pet Gold",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              className="vai"
              icon={icon}
              position={localizacao20}
              options={{
                label: {
                  text: "Shopping Petz",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              className="vai"
              icon={icon}
              position={localizacao19}
              options={{
                label: {
                  text: "Petz",
                  className: "map-marker",
                },
              }}
            />
            <Marker
              icon={icon}
              position={localizacao}
              options={{
                label: {
                  text: "Centro Veterinário AnimalVet",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao2}
              options={{
                label: {
                  text: "Animal Care pet center",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao3}
              options={{
                label: {
                  text: "Animal Land pet center",
                  className: "map-marker",
                },
              }}
            />
            <Marker
              icon={icon}
              position={localizacao4}
              options={{
                label: {
                  text: "Animal Vital",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao5}
              options={{
                label: {
                  text: "Petshop anjos de patas",
                  className: "map-marker",
                },
              }}
            />
            <Marker
              icon={icon}
              position={localizacao7}
              options={{
                label: {
                  text: "Vila Animal Centro Veterinário",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao8}
              options={{
                label: {
                  text: "Animais e Cia Floripa",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao9}
              options={{
                label: {
                  text: "Animal Village",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao10}
              options={{
                label: {
                  text: "Reino dos Animais",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao11}
              options={{
                label: {
                  text: "Veterinária animal Floripa",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao12}
              options={{
                label: {
                  text: "Hospital Veterinário Vet Ilha",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao13}
              options={{
                label: {
                  text: "Pet Care Center",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao14}
              options={{
                label: {
                  text: "Centro de Zoonoses",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao15}
              options={{
                label: {
                  text: "Centro de Controle de Zoonoses",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao16}
              options={{
                label: {
                  text: "PET GREE SHOP",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao17}
              options={{
                label: {
                  text: "AgroPet agroshop",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              icon={icon}
              position={localizacao18}
              options={{
                label: {
                  text: "Pet Gold",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              className="vai"
              icon={icon}
              position={localizacao19}
              options={{
                label: {
                  text: "Petz",
                  className: "map-marker",
                },
              }}
            />

            <Marker
              className="vai"
              icon={icon}
              position={localizacao20}
              options={{
                label: {
                  text: "Shopping Petz",
                  className: "map-marker",
                },
              }}
            />
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
};

export default ApiMapa;
