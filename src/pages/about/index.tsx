import React from "react";
import './index.scss'
import Header from "../../components/header/index.tsx";

export default function About() {
    return (
        <div className="about-container">
            <Header/>
            <h1>Sobre a Alexandria</h1>
            <p>Alexandria é uma plataforma que permite subir livros gratuitamente. Nosso objetivo é democratizar o acesso ao conhecimento e promover a leitura.</p>
            <p>Com Alexandria, você pode:</p>
            <ul>
                <li>Subir seus próprios livros</li>
                <li>Explorar uma vasta coleção de livros gratuitos</li>
                <li>Compartilhar livros com amigos</li>
            </ul>
            <p>Junte-se a nós e ajude a espalhar o conhecimento!</p>
        </div>
    );
}
