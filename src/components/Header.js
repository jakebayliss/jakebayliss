import React, { useState } from 'react';
import { scroll } from '../utils/scrollHelper';

import '../styles/header.css';

import { BsChevronDoubleDown } from 'react-icons/bs';
import { SiLinkedin, SiGithub, SiInstagram, SiSpotify } from 'react-icons/si';

const Header = ({primaryColour, secondaryColour}) => {
    const [iconHovered, setIconHovered] = useState('');

    return <div className="header-container" id="header-container" style={{ backgroundColor: primaryColour }}>
        <div>
            <h1 className="title" style={{ color: secondaryColour }}>Jake Bayliss</h1>
            <div className="social">
                <a className="social-icon-container" target="_blank" href="https://www.linkedin.com/in/jake-bayliss-7b2a77139/" onMouseEnter={() => setIconHovered('LinkedIn')} onMouseLeave={() => setIconHovered('')}>
                    <SiLinkedin className="social-icon" style={{ color: secondaryColour }} />
                    <p className="social-icon-text" style={{ opacity: iconHovered && iconHovered == 'LinkedIn' ? 1 : 0, color: secondaryColour }}>{iconHovered}</p>
                </a>
                <a className="social-icon-container" target="_blank" href="https://github.com/jakebayliss" onMouseEnter={() => setIconHovered('GitHub')} onMouseLeave={() => setIconHovered('')}>
                    <SiGithub className="social-icon" style={{ color: secondaryColour }} />
                    <p className="social-icon-text" style={{ opacity: iconHovered && iconHovered == 'GitHub' ? 1 : 0, color: secondaryColour }}>{iconHovered}</p>
                </a>
                <a className="social-icon-container" target="_blank" href="https://www.instagram.com/jakewbayliss/" onMouseEnter={() => setIconHovered('Instagram')} onMouseLeave={() => setIconHovered('')}>
                    <SiInstagram className="social-icon" style={{ color: secondaryColour }} />
                    <p className="social-icon-text" style={{ opacity: iconHovered && iconHovered == 'Instagram' ? 1 : 0, color: secondaryColour }}>{iconHovered}</p>
                </a>
                <a className="social-icon-container" target="_blank" href="https://open.spotify.com/user/nhnz7ii5hd4rht81ez5q2le1e" onMouseEnter={() => setIconHovered('Spotify')} onMouseLeave={() => setIconHovered('')}>
                    <SiSpotify className="social-icon" style={{ color: secondaryColour }} />
                    <p className="social-icon-text" style={{ opacity: iconHovered && iconHovered == 'Spotify' ? 1 : 0, color: secondaryColour }}>{iconHovered}</p>
                </a>
            </div>
        </div>
        <button className="arrow-container" onClick={() => scroll('#silly-container')}>
            <BsChevronDoubleDown className="arrow" style={{ color: secondaryColour }} />
        </button>
    </div>
}

export default Header;