import React, { useEffect, useState } from 'react'
import './mainPage.css'
import MapPage from './map'
import CreateMeet from './modalCreateMeet/createMeet'




export default function MainPage(){
    const [CREATE_MEET_DISP, SET_CREATE_MEET] = useState(false)
    
   const modifyModal = () =>{
       if(CREATE_MEET_DISP){
           SET_CREATE_MEET(false)
       } else if(CREATE_MEET_DISP === false){
           SET_CREATE_MEET(true)
       }
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
        {CREATE_MEET_DISP ? <CreateMeet changeModal={()=>{modifyModal()}} /> : <div className="map">
            <MapPage onDbl={() =>{modifyModal()}} ></MapPage>
        </div> }
        
    </div>

    )
}