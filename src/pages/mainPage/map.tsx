import React from 'react'


const MapPage = () =>{
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCOofVMAZwvFUZG-huq3NY2TouJW5iZUGw"
      })
    return <div></div>
}


export default MapPage