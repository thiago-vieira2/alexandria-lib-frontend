import React from "react";
import './index.scss'

export default function Login() {
    return (
        <div className="login_pages">

            <div className="login-area">
                <form>
                    <label htmlFor="">Email:</label><input type="email" name="" id="" placeholder="Digite seu email" />
                    <label>Senha:</label><input type="password" name="" id="" placeholder="Digite sua senha" />
                    <button className="entrar">Entrar</button>

                </form>

            </div>

        </div>
    );
}