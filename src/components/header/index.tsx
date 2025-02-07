import React from 'react';
import './index.scss'
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            

            <div className="option-header">
                <input type="text" className='SearchBook' placeholder='Buscar' />
                <Link className='sobre' to={'/About'}>sobre</Link>
                <Link className='login' to={'/login'}>login</Link>
            </div>
        </header>
    );
}