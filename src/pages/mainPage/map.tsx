import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './mainPage.css'
import style from './styleMap';
const MapPage = () =>{
    const GOOGLE_KEY = String(process.env.REACT_APP_GOOGLE_KEY) // NOT THE BEST WAY

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey:  GOOGLE_KEY,
      })
    const postion = {
      lat: -22.853523, 
      lng: -43.254074
    }
    return(
     <div className="mapApp">
        {  isLoaded ? (
      <GoogleMap
        options={{styles: style}}
        mapContainerStyle={{width: '100%', height: '80%'}}
        center={postion}
        zoom={15}
        onClick={(e) =>{console.log(e.latLng?.toJSON())}}
        
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <Marker position={postion} options={{
          label: {
            text: 'Posição teste',
            className: 'map-marker'
          }
        }} />
      </GoogleMap>
  ) : <></>}
    </div>
    
    )
}


export default MapPage