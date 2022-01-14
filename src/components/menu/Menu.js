import React from 'react';
import './Menu.css';

export default function Menu({ menuOpen, setMenuOpen }) {
    return(
        <div className={'menu ' + (menuOpen && 'active')}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#home'>Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#details'>Details</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#registry'>Registry</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    );
};