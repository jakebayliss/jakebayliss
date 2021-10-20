import React, { useEffect, useState, useCallback } from 'react';

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
            JB
        </div>
        <div className="links">
            <a className="link">Jake</a>
            <a className="link">More Jake</a>
        </div>
    </div>
}

export default Banner;