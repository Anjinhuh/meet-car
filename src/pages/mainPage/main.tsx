import React, { useEffect, useState } from 'react'
import './mainPage.css'
import MapPage from './map'
import CreateMeet from './modalCreateMeet/createMeet'

let validador = false
export const defineValidador = () =>{
    validador = true
    console.log('ok')
}

export default function MainPage(){
    const [CREATE_MEET_DISP, SET_CREATE_MEET] = useState(false)
    if(validador){
        SET_CREATE_MEET(true)
       
    }
    return(

    
    
    
    <div className="appMain">
        
        <header>
            <div className="header-text">
                <p>MadeForMeet</p>
            </div>
            <div className="utils">
                <p>Juliano</p>
                <button>Create a meet</button>
            </div>

        </header>
        {CREATE_MEET_DISP ? <CreateMeet/> : <div className="map">
            <MapPage></MapPage>
        </div> }
        
    </div>

    )
}