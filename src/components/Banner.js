import React, { useEffect, useState, useCallback } from 'react';
import { Link } from "react-router-dom";

import '../styles/banner.css';

const Banner = ({primaryColour, secondaryColour}) => {

    const [isSecondaryColour, setIsSecondaryColour] = useState(true);
    const [activeLink, setActiveLink] = useState(window.location.pathname);

    const isScrolledIntoView = useCallback(() => {
        const element = document.getElementById('silly-container');
        const rect = element.getBoundingClientRect();
        setIsSecondaryColour(rect.top <= 0 ? false : true);
    })

    useEffect(() => {
        window.addEventListener("scroll", isScrolledIntoView); 
        return () => window.removeEventListener("scroll", isScrolledIntoView);
    }, [isScrolledIntoView]);

    return <div className="banner-container">
        <div className="logo">
            <Link to="/" style={{ color: isSecondaryColour ? secondaryColour : primaryColour }}
                onClick={() => setActiveLink('/')}>JB 🐍</Link>
        </div>
        <div className="links">
            <Link to="exp" style={{ color: isSecondaryColour ? secondaryColour : primaryColour }} className={activeLink == '/exp' ? 'active' : ''}
                onClick={() => setActiveLink('/exp')}>Exp</Link>
            <Link to="chess" style={{ color: isSecondaryColour ? secondaryColour : primaryColour }} className={activeLink == '/chess' ? 'active' : ''}
                onClick={() => setActiveLink('/chess')}>Chess ♟️</Link>
        </div>
    </div>
}

export default Banner;