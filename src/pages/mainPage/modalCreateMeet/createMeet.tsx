import React, {useState} from 'react'
import './createMeet.css'
export default function CreateMeet({changeModal = () =>{}, createMeet = (name:string, typeCar:string) =>{}}){
    const[NOME_MEET, SET_NOME_MEET] = useState("")
    const [TYPE_CAR, SET_TYPE_CAR] = useState("")
    return(
        <div className="modal-create-meet">
            <div className="content-modal">
                <div className="modal-btn-close-div">
                    <button onClick={() => {changeModal()}} className="btn-close-modal">X</button> 
                </div>
                <p>Nome do encontro</p>
                <input onChange={(e) => {SET_NOME_MEET(e.target.value)}} placeholder="Digite aqui o nome do encontro" />
                <p>Tipos de carro</p>
                <input onChange={(e) => {SET_TYPE_CAR(e.target.value)}} placeholder="Digite aqui o tipo de veículo" />
                <button onClick={() => {createMeet(NOME_MEET, TYPE_CAR)}}>Create a meet</button>
            </div>
        </div>
    )
}