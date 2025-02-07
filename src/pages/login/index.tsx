import React, { useState } from "react";
import './index.scss';
import { MdEmail, MdLock } from "react-icons/md";

export default function Login() {

    const [senha, setSenha] = useState('password')
    const [input, setInput] = useState(true)
    

    const mostrarSenha = () => {
       
     
        if(senha === 'password') {
            console.log('entrou no false');
            setInput(false)
            setSenha('text')
        }

        else {
            console.log('deu red');
            setInput(true)
            setSenha('password')
        }


    }


    return (
        <div className="login_pages">
            <div className="login-area">
                <div className="form">
                <h1>Entre na sua conta</h1>

                    <div className="input-container">
                        <MdEmail className="icon" />
                        <input type="email" placeholder="Digite seu email" />
                    </div>

                    <div className="input-container">
                        <MdLock className="icon2" />
                        <input type={senha} placeholder="Digite sua senha" />
                        <button  onClick={mostrarSenha} className="mostrar" >{input ? "mostrar senha" : "esconder senha"}</button>
                    </div>

                    <button className="entrar">Entrar</button>
                    </div>
            </div>
        </div>
    );
}