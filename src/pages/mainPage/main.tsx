import React, { useEffect, useState } from 'react'
import './mainPage.css'
import MapPage from './map'
import {console} from '../../controllers/controllers'
export default function MainPage(){
    const[texto, setTexto] = useState('')
    
    useEffect(() =>{
        async function executa(){
            setTexto(await console())  
        }
        executa()
    }, [])
    
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
        <div>
            <MapPage></MapPage>
        </div>
    </div>
    )
}