import React from 'react';
import "./Login.css"
import LogoProps from '../assets/Logo-Props.png'

const Login = () => {
    return (
        <div className="IMG">
            <div className="Login">
                <img src={LogoProps} width="300px"/>
                <input className="Input" type="text" placeholder='Usuario' />
                <input className="Input" type="password" placeholder='Senha' />
                <button className="ButtonEntrar">Entrar</button>
            </div>
        </div>
    )
}

export default Login;