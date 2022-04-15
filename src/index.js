import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { generateRandomHex } from './ColourGenerator';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import Banner from './components/Banner';
import Home from './pages/home/Home';
import Exp from './pages/exp/Exp';
import ChessPage from './pages/chess/index';

// styles
import './styles/master.css';

const App = () => {
    const [primaryColour, setPrimaryColour] = useState(generateRandomHex());
    const [secondaryColour, setSecondaryColour] = useState(generateRandomHex());
    const [keys, setKeys] = useState([]);

    const keydown = useCallback(e => {
        if(e.code == "Space") {
            e.preventDefault();
            // change colour scheme
            setPrimaryColour(generateRandomHex());
            setSecondaryColour(generateRandomHex());
        }
        // i dont like it but start a key log?
        if(e.code == "KeyJ") {
            setKeys(["j"]);
            // give them 2 seconds to type it
            setTimeout(() => {
                setKeys([])
            }, 2000);
        }
        else if(e.code == "KeyA" && keys.length == 1) {
            setKeys([...keys, "a"]);
        }
        else if(e.code == "KeyK" && keys.length == 2) {
            setKeys([...keys, "k"]);
        }
        else if(e.code == "KeyE" && keys.length == 3) {
            setKeys([]);
            console.log('JAKE');
            scroll('#header-container')
        }
    });

    useEffect(() => {
        window.addEventListener("keydown", keydown); 
        return () => window.removeEventListener("keydown", keydown);
    }, [keydown]);

    return <div className="container">
        <BrowserRouter>
            <Banner primaryColour={primaryColour} secondaryColour={secondaryColour} />
            <Routes>
                <Route path="/" element={<Home primaryColour={primaryColour} secondaryColour={secondaryColour} />} />
                <Route path="exp" element={<Exp />} />
                <Route path="chess" element={<ChessPage />} />
            </Routes>
        </BrowserRouter>
    </div>
}

ReactDOM.render(<App />, document.getElementById('app'));