import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import { generateRandomHex } from './ColourGenerator';

import { SocialIcon } from 'react-social-icons';
import DownChevron from '../assets/chevron-down.svg';
//import LinkedInIcon from '@material-ui/icons/LinkedIn';

import API from './API';

//css
import './styles/master.css';
import './styles/header.css';
import './styles/mainContent.css';

const App = () => {
    const [iconHovered, setIconHovered] = useState('');
    const [primaryColour, setPrimaryColour] = useState(generateRandomHex());
    const [secondaryColour, setSecondaryColour] = useState(generateRandomHex());

    const space = useCallback(e => {
        if(e.code == "Space") {
            e.preventDefault();
            // change colour scheme
            setPrimaryColour(generateRandomHex());
            setSecondaryColour(generateRandomHex());
        }
    });

    useEffect(() => {
        window.addEventListener("keydown", space); 
        return () => window.removeEventListener("keydown", space);
    }, [space]);

    //const api = new API("https://api.instagram.com/oauth/authorize");

    //const [instagram, setInstagram] = useState(null);

    //useEffect(() => {
        //setInstagram(api.getInstagram());
    //}, []);

    //useEffect(() => {
        //console.log(instagram);
    //}, [instagram]);

    const scroll = () => {
        document.querySelector('#main-content').scrollIntoView({ 
            behavior: 'smooth' 
        });
    }

    return <div style={{ backgroundColor: primaryColour }}>
        <div className="container">
            <div className="header-container">
                <h1 className="title" style={{ color: secondaryColour }}>Jake Bayliss</h1>
                <div className="social">
                    <div onMouseEnter={() => setIconHovered('LinkedIn')} onMouseLeave={() => setIconHovered('')}>
                        {/* <LinkedInIcon /> */}
                        <SocialIcon target="_blank" url="https://www.linkedin.com/in/jake-bayliss-7b2a77139/" 
                            bgColor="transparent" fgColor={iconHovered && iconHovered == "LinkedIn" ? "#DAD7CD" : secondaryColour} style={{width:"50px", height:"50px", margin:"10px 15px"}} />
                        {iconHovered && iconHovered == 'LinkedIn' ? <p className="social-icon-text">{iconHovered}</p> : <p className="social-icon-text"></p>}
                    </div>
                    <div onMouseEnter={() => setIconHovered('GitHub')} onMouseLeave={() => setIconHovered('')}>
                        <SocialIcon target="_blank" url="https://github.com/jakebayliss" 
                            bgColor="transparent" fgColor={iconHovered && iconHovered == "GitHub" ? "#DAD7CD" : secondaryColour} style={{width:"50px", height:"50px", margin:"10px 15px"}} />
                        {iconHovered && iconHovered == 'GitHub' ? <p className="social-icon-text">{iconHovered}</p> : <p className="social-icon-text"></p>}
                    </div>
                    <div onMouseEnter={() => setIconHovered('Instagram')} onMouseLeave={() => setIconHovered('')}>
                        <SocialIcon target="_blank" url="https://www.instagram.com/jakewbayliss/" 
                            bgColor="transparent" fgColor={iconHovered && iconHovered == "Instagram" ? "#DAD7CD" : secondaryColour} style={{width:"50px", height:"50px", margin:"10px 15px"}} />
                        {iconHovered && iconHovered == 'Instagram' ? <p className="social-icon-text">{iconHovered}</p> : <p className="social-icon-text"></p>}
                    </div>
                    <div onMouseEnter={() => setIconHovered('Spotify')} onMouseLeave={() => setIconHovered('')}>
                        <SocialIcon target="_blank" url="https://open.spotify.com/user/nhnz7ii5hd4rht81ez5q2le1e" 
                            bgColor="transparent" fgColor={iconHovered && iconHovered == "Spotify" ? "#DAD7CD" : secondaryColour} style={{width:"50px", height:"50px", margin:"10px 15px"}}/>
                        {iconHovered && iconHovered == 'Spotify' ? <p className="social-icon-text">{iconHovered}</p> : <p className="social-icon-text"></p>}
                    </div>
                </div>
                <div>
                    <button className="down-arrow" onClick={() => scroll()}><img src={DownChevron} width="30px" height="30px"/></button>
                </div>
            </div>
            <div id="main-content" className="main-content">
                <p>hello</p>
            </div>
        </div>
    </div>
}

ReactDOM.render(<App />, document.getElementById('app'));