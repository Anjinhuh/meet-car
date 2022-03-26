import React from 'react'
import './createMeet.css'
export default function CreateMeet({changeModal = () =>{}}){
    return(
        <div className="modal-create-meet">
            <div className="content-modal">
                <p>Nome do encontro</p>
                <input placeholder="Digite aqui o nome do encontro" />
                <p>Tipos de carro</p>
                <input placeholder="Digite aqui o tipo de veículo" />
                <button onClick={changeModal}>Create a meet</button>
            </div>
        </div>
    )
}