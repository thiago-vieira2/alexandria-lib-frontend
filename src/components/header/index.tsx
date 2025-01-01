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
                <input type="text" className='SerchBook' placeholder='Buscar' />
                <p>Login</p>
            </div>
        </header>
    );
}