import React, { useEffect, useState } from 'react'
import './mainPage.css'
import MapPage from './map'
import CreateMeet from './modalCreateMeet/createMeet'
import {create_meet} from '../../controllers/controllers'



export default function MainPage(){
    const [CREATE_MEET_DISP, SET_CREATE_MEET] = useState(false);
    const [COORD_MEET_LAT, SET_COORD_MEET_LAT] = useState("");
    const [COORD_MEET_LNG, SET_COORD_MEET_LNG] = useState("");

   const PREPARE_MEET = async (lat:string, lng:string) =>{
       if(CREATE_MEET_DISP === false){
            SET_CREATE_MEET(true)
            SET_COORD_MEET_LAT(lat)
            SET_COORD_MEET_LNG(lng)
        }        
    }
    const CREATE_MEET = async(nameMeet:string, typeCar:string) =>{
        let KEY_MEET:number = Math.floor(Math.random() * (99999 - 1000 + 1) + 1000)
        create_meet(nameMeet, COORD_MEET_LAT, COORD_MEET_LNG, KEY_MEET).finally(() =>{
            window.location.reload()
        })
    }
    const modifyModal = () =>{
        if(CREATE_MEET_DISP){
            SET_CREATE_MEET(false)
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
        {CREATE_MEET_DISP ? <CreateMeet createMeet={(name, typeCar) =>{CREATE_MEET(name, typeCar)}} changeModal={()=>{modifyModal()}} /> : <div className="map">
            <MapPage onDbl={(lat, lng) =>{PREPARE_MEET(lat, lng)}} ></MapPage>
        </div> }
        
    </div>

    )
}