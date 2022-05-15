import React, { useEffect, useState, useCallback } from 'react';
import { Link } from "react-router-dom";

import '../styles/banner.css';

const Banner = ({primaryColour, secondaryColour}) => {
    const [activeLink, setActiveLink] = useState(window.location.pathname);

    return <div className="banner-container">
        <div className="logo">
            <Link to="/" style={{ color: activeLink == '/' ? '#B8B08D' : secondaryColour }}
                onClick={() => setActiveLink('/')}>JB 🐍</Link>
        </div>
        <div className="links">
            <Link to="exp" style={{ color: activeLink == '/exp' ? '#B8B08D' : secondaryColour }}
                onClick={() => setActiveLink('/exp')}>Exp 💰</Link>
            <Link to="chess" style={{ color: activeLink == '/chess' ? '#B8B08D' : secondaryColour }}
                onClick={() => setActiveLink('/chess')}>Chess ♟️</Link>
        </div>
    </div>
}

export default Banner;