import React, {useEffect, useState} from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import './mainPage.css'
import style from './styleMap';
import { getCoords } from '../../controllers/controllers';

const MapPage = ({onDbl = (lat:string, lng:string) =>{}}) =>{
      const[COORD, SETCOORD] = useState([])
      useEffect(() =>{
            async function ChangeStateCoord(){
              SETCOORD(await getCoords())  
          }
          ChangeStateCoord()
        
        
    }, [])

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
        onDblClick={(e) =>{onDbl(String(e.latLng?.toJSON().lat),String( e.latLng?.toJSON().lng))}}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        
        {COORD.map( (MARKER) =>
                            
                            <Marker 
                            
                             position={{
                              lat: Number(MARKER['lat']), 
                              lng: Number(MARKER['lng'])
                            }} options={{
                              label: {
                                text: MARKER['name'],
                                className: 'map-marker'
                              }
                              
                            }}
                            key={MARKER['keyId']}
                            onClick={(e) =>{console.log(MARKER['keyId'])}} />
                            
                        )}
      
      </GoogleMap>
  ) : <></>}
    </div>
    
    )
}


export default MapPage