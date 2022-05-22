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
    const [primaryColour, setPrimaryColour] = useState('#1f2124'/*generateRandomHex()*/);
    const [secondaryColour, setSecondaryColour] = useState('#D6DBD2'/*generateRandomHex()*/);

    return <div style={{backgroundColor: primaryColour, color: secondaryColour, minHeight: '100vh'}}>
        <BrowserRouter>
            <Banner primaryColour={primaryColour} secondaryColour={secondaryColour} />
            <div className='w-100 px-5 sm:px-10 md:px-20 lg:px-32'>
                <Routes>
                    <Route path="/" element={<Home primaryColour={primaryColour} secondaryColour={secondaryColour} />} />
                    <Route path="exp" element={<Exp primaryColour={primaryColour} secondaryColour={secondaryColour} />} />
                    <Route path="chess" element={<ChessPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    </div>
}

ReactDOM.render(<App />, document.getElementById('app'));