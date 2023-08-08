import React, {useState} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar";
import {Home} from "./components/Home";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";

function App() {

    return (
        <div className="App">
            <Navbar></Navbar>
            <main>
            <Home></Home>
            <Contact></Contact>
            </main>
            <Footer></Footer>
        </div>
    );
}

export default App;
