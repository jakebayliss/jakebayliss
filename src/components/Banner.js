import React, { useEffect, useState, useCallback } from 'react';
import { Link } from "react-router-dom";

import '../styles/banner.css';

const Banner = ({primaryColour, secondaryColour}) => {

    const [isSecondaryColour, setIsSecondaryColour] = useState(true);

    const isScrolledIntoView = useCallback(() => {
        const element = document.getElementById('silly-container');
        const rect = element.getBoundingClientRect();
        setIsSecondaryColour(rect.top <= 0 ? false : true);
    })

    useEffect(() => {
        window.addEventListener("scroll", isScrolledIntoView); 
        return () => window.removeEventListener("scroll", isScrolledIntoView);
    }, [isScrolledIntoView]);

    return <div className="banner-container" style={{ color: isSecondaryColour ? secondaryColour : primaryColour }}>
        <div className="logo">
            <Link to="/">JB 🐍</Link>
        </div>
        <div className="links">
            <Link to="exp">Exp</Link>
            <Link to="chess">Chess</Link>
        </div>
    </div>
}

export default Banner;