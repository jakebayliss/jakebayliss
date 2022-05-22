import React, { useState } from "react";
import { SiLinkedin, SiGithub, SiInstagram, SiSpotify } from 'react-icons/si';

const Social = () => {
    const [iconHovered, setIconHovered] = useState('');

    return <div className="social px-5 sm:px-10 md:px-20 lg:px-32 ">
        <a className="flex m-5" target="_blank" href="https://www.linkedin.com/in/jake-bayliss-7b2a77139/" 
            style={{ '--order': 1 }} onMouseEnter={() => setIconHovered('LinkedIn')} onMouseLeave={() => setIconHovered('')}>
            <SiLinkedin className="w-5 h-5 mr-1" />
            <p className={`text-sm hidden ${iconHovered && iconHovered == 'LinkedIn' ? 'sm:block' : ''}`}>· {iconHovered}</p>
        </a>
        <a className="flex m-5" target="_blank" href="https://github.com/jakebayliss" 
            style={{ '--order': 2 }} onMouseEnter={() => setIconHovered('GitHub')} onMouseLeave={() => setIconHovered('')}>
            <SiGithub className="w-5 h-5 mr-1" />
            <p className={`text-sm hidden ${iconHovered && iconHovered == 'GitHub' ? 'sm:block' : ''}`}>· {iconHovered}</p>
        </a>
        <a className="flex m-5" target="_blank" href="https://www.instagram.com/jakewbayliss/" 
            style={{ '--order': 3 }} onMouseEnter={() => setIconHovered('Instagram')} onMouseLeave={() => setIconHovered('')}>
            <SiInstagram className="w-5 h-5 mr-1" />
            <p className={`text-sm hidden ${iconHovered && iconHovered == 'Instagram' ? 'sm:block' : ''}`}>· {iconHovered}</p>
        </a>
        <a className="flex m-5" target="_blank" href="https://open.spotify.com/user/nhnz7ii5hd4rht81ez5q2le1e" 
            style={{ '--order': 4 }} onMouseEnter={() => setIconHovered('Spotify')} onMouseLeave={() => setIconHovered('')}>
            <SiSpotify className="w-5 h-5 mr-1" />
            <p className={`text-sm hidden ${iconHovered && iconHovered == 'Spotify' ? 'sm:block' : ''}`}>· {iconHovered}</p>
        </a>
    </div>
}

export default Social;