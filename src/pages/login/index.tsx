import React from "react";
import './index.scss';
import { MdEmail, MdLock } from "react-icons/md";

export default function Login() {
    return (
        <div className="login_pages">
            <div className="login-area">
                <form>
                <h1>Entre na sua conta</h1>

                    <div className="input-container">
                        <MdEmail className="icon" />
                        <input type="email" placeholder="Digite seu email" />
                    </div>

                    <div className="input-container">
                        <MdLock className="icon" />
                        <input type="password" placeholder="Digite sua senha" />
                    </div>

                    <button className="entrar">Entrar</button>
                </form>
            </div>
        </div>
    );
}