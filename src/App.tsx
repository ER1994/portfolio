import React, {useState} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar";
import {Home} from "./components/Home";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";
import {NavbarMobile} from "./components/NavbarMobile";
import Projects from "./components/Projects";

function App() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <div className="App">
            <Navbar toggleMenu={toggleMobileMenu}></Navbar>
            <NavbarMobile isOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu}></NavbarMobile>
            <main>
                <Home></Home>
                <Projects></Projects>
                <Contact></Contact>
            </main>
            <Footer></Footer>
        </div>

    );
}

export default App;
