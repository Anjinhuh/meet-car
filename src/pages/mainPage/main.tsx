import React, { useEffect, useState } from 'react'
import './mainPage.css'
import MapPage from './map'
import {console} from '../../controllers/controllers'
export default function MainPage(){
    const[texto, setTexto] = useState('')
    
    async function recebeValor(){
        return setTexto(await console()) 
    }
    
    
    return(
    <div className="appMain">
        {texto}
        <header>
            <div className="header-text">
                <p>MadeForMeet</p>
            </div>
            <div className="utils">
                <p>Juliano</p>
                <button onClick={() => {recebeValor()}}>Create a meet</button>
            </div>

        </header>
        <div>
            <MapPage></MapPage>
        </div>
    </div>
    )
}