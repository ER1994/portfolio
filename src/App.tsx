import React, {useState} from 'react';
import './App.css';
import {Navbar} from "./components/Navbar";
import {Home} from "./components/Home";
import {Contact} from "./components/Contact";

function App() {

    return (
        <div className="App">
            <header>
            </header>
            <Navbar></Navbar>
            <Home></Home>
            <Contact></Contact>
        </div>
    );
}

export default App;
