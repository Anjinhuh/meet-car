import React from 'react'
import './login.css'
import loginImage from '../../img/login.svg'
export default function LoginPage(){
    return(
        <div className='app'>
            <div className='imageLogin'>
                <img src={loginImage} alt='Login IMAGE' />
            </div>

            <div className='loginForm'>
                <p>LOGIN</p>
                <input placeholder='Digite seu usuário!' />
                <p>SENHA</p>
                <input type="password" placeholder='Digite sua senha' />
                <button>LOGIN</button>
            </div>
        </div>
    )
}