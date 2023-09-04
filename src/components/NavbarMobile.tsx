import React from 'react';
import '../styles/NavbarMobile/NavbarMobile.scss'


export function NavbarMobile({isOpen, toggleMenu}: { isOpen: boolean, toggleMenu: () => void}) {

    return (
        <nav className={isOpen ? 'mobileMenu--open' : 'mobileMenu--closed'}>
            <div className={'mobileMenu--Opened__Exit'} onClick={toggleMenu}>
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                        <path d="M19 5L4.99998 19M5.00001 5L19 19" stroke="#000000" strokeWidth="1.5"
                              strokeLinecap="round" strokeLinejoin="round"></path>
                    </g>
                </svg>
            </div>
            <ul className={'mobileMenu--open__menu'}>
                <li><a href={'#home'} onClick={toggleMenu}>Home</a></li>
                <li><a href={'#projects'} onClick={toggleMenu}>Projects</a></li>
                <li><a href={'#contact'} onClick={toggleMenu}>Contact</a></li>
            </ul>
        </nav>
    );
}