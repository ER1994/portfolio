import {useEffect, useState} from "react";
import "../styles/NavbarStyles/navbarStyles.scss"

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const initialNavbarMarginTop = 20;
    const [navbarMarginTop, setNavbarMarginTop] = useState<number>(initialNavbarMarginTop);

    const handleScroll = () => {
        const offset = window.scrollY;
        const newNavbarMarginTop = Math.max(initialNavbarMarginTop - offset, 0);
        setNavbarMarginTop(newNavbarMarginTop);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll );
        return () => window.removeEventListener('scroll', handleScroll);
    });

    const handleHamburgerClick = () => {
      setIsOpen(!isOpen);
    };
    return (
        // <nav>
        <nav style={{marginTop: navbarMarginTop, marginBottom: '20px'}}>
            <ul className={'menu'}>
                <li><a href = '#home'>Home</a></li>
                <li>About</li>
                <li>Projects</li>
                <li><a href='#contact'>Contact</a></li>
                <li id={'menu--hamburger'} onClick={handleHamburgerClick}>
                    <svg fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path
                                d="M0.844 6.050c-0.256-0.256-0.381-0.581-0.381-0.975s0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.125 0.975 0.381s0.381 0.581 0.381 0.975-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381zM31.306 14.963c0.256 0.256 0.381 0.581 0.381 0.975s-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381s-0.381-0.581-0.381-0.975 0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.125 0.975 0.381zM31.306 25.819c0.256 0.256 0.381 0.581 0.381 0.975s-0.125 0.719-0.381 0.975-0.581 0.381-0.975 0.381h-28.512c-0.394 0-0.719-0.125-0.975-0.381s-0.381-0.581-0.381-0.975 0.125-0.719 0.381-0.975 0.581-0.381 0.975-0.381h28.512c0.394 0 0.719 0.131 0.975 0.381z"></path>
                        </g>
                    </svg>
                </li>
            </ul>
            <div className={isOpen ? 'mobileMenu__Opened' : 'mobileMenu__Closed'}></div>
        </nav>
    );
};

export default Navbar;
