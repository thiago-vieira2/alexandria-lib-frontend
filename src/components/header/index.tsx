import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss'

export default function Header() {
    return (
        <header>
            
            <div className="tittle-header">
                <h1>Alexandria-Lib</h1>
            </div>

            <div className="option-header">
                <input type="text" className='SearchBook' placeholder='Buscar' />
                <p>sobre</p>
                <a className='login' href="">Login</a>
            </div>
        </header>
    );
}