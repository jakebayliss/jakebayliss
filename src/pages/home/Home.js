import React, { useState, useEffect, useCallback } from 'react';

import '../../styles/header.css';
import { SiLinkedin, SiGithub, SiInstagram, SiSpotify } from 'react-icons/si';

const Home = ({primaryColour, secondaryColour}) => {
    const [iconHovered, setIconHovered] = useState('');

    return <div className="header-container" id="header-container" style={{ backgroundColor: primaryColour }}>
        <div>
            <h1 className="title" style={{ color: secondaryColour }}>Jake Bayliss</h1>
            <p>Full stack developer</p>
        </div>
        <div className="social">
            <a className="social-icon-container" target="_blank" href="https://www.linkedin.com/in/jake-bayliss-7b2a77139/" 
                style={{ '--order': 1, color: secondaryColour }} onMouseEnter={() => setIconHovered('LinkedIn')} onMouseLeave={() => setIconHovered('')}>
                <SiLinkedin className="social-icon" />
                <p className="social-icon-text" style={{ opacity: iconHovered && iconHovered == 'LinkedIn' ? 1 : 0}}>· {iconHovered}</p>
            </a>
            <a className="social-icon-container" target="_blank" href="https://github.com/jakebayliss" 
                style={{ '--order': 2, color: secondaryColour }} onMouseEnter={() => setIconHovered('GitHub')} onMouseLeave={() => setIconHovered('')}>
                <SiGithub className="social-icon" />
                <p className="social-icon-text" style={{ opacity: iconHovered && iconHovered == 'GitHub' ? 1 : 0}}>· {iconHovered}</p>
            </a>
            <a className="social-icon-container" target="_blank" href="https://www.instagram.com/jakewbayliss/" 
                style={{ '--order': 3, color: secondaryColour }} onMouseEnter={() => setIconHovered('Instagram')} onMouseLeave={() => setIconHovered('')}>
                <SiInstagram className="social-icon" />
                <p className="social-icon-text" style={{ opacity: iconHovered && iconHovered == 'Instagram' ? 1 : 0}}>· {iconHovered}</p>
            </a>
            <a className="social-icon-container" target="_blank" href="https://open.spotify.com/user/nhnz7ii5hd4rht81ez5q2le1e" 
                style={{ '--order': 4, color: secondaryColour }} onMouseEnter={() => setIconHovered('Spotify')} onMouseLeave={() => setIconHovered('')}>
                <SiSpotify className="social-icon" />
                <p className="social-icon-text" style={{ opacity: iconHovered && iconHovered == 'Spotify' ? 1 : 0}}>· {iconHovered}</p>
            </a>
        </div>
        <div class="ocean">
            <div class="wave"></div>
            <div class="wave"></div>
        </div>
    </div>
}

export default Home;