import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { SocialIcon } from 'react-social-icons';

import API from './API';

//css
import './styles/master.css';

export default function App() {

    const [iconHovered, setIconHovered] = useState('');

    //const api = new API("https://api.instagram.com/oauth/authorize");

    //const [instagram, setInstagram] = useState(null);

    //useEffect(() => {
        //setInstagram(api.getInstagram());
    //}, []);

    //useEffect(() => {
        //console.log(instagram);
    //}, [instagram]);

    return <div className="container">
        <div className="header-container">
            <h1 className="title">Jake Bayliss</h1>
            <div className="social">
                <div onMouseEnter={() => setIconHovered('LinkedIn')} onMouseLeave={() => setIconHovered('')}>
                    <SocialIcon target="_blank" url="https://www.linkedin.com/in/jake-bayliss-7b2a77139/" 
                        bgColor="transparent" fgColor="#0072b1" style={{width:"50px", height:"50px", margin:"10px"}} />
                    {iconHovered && iconHovered == 'LinkedIn' ? <p className="social-icon-text">{iconHovered}</p> : <p className="social-icon-text"></p>}
                </div>
                <div onMouseEnter={() => setIconHovered('GitHub')} onMouseLeave={() => setIconHovered('')}>
                    <SocialIcon target="_blank" url="https://github.com/jakebayliss" 
                        bgColor="transparent" fgColor="white" style={{width:"50px", height:"50px", margin:"10px"}} />
                    {iconHovered && iconHovered == 'GitHub' ? <p className="social-icon-text">{iconHovered}</p> : <p className="social-icon-text"></p>}
                </div>
                <div onMouseEnter={() => setIconHovered('Instagram')} onMouseLeave={() => setIconHovered('')}>
                    <SocialIcon target="_blank" url="https://www.instagram.com/jakewbayliss/" 
                        bgColor="transparent" fgColor="#C13584" style={{width:"50px", height:"50px", margin:"10px"}} />
                    {iconHovered && iconHovered == 'Instagram' ? <p className="social-icon-text">{iconHovered}</p> : <p className="social-icon-text"></p>}
                </div>
                <div onMouseEnter={() => setIconHovered('Spotify')} onMouseLeave={() => setIconHovered('')}>
                    <SocialIcon target="_blank" url="https://open.spotify.com/user/nhnz7ii5hd4rht81ez5q2le1e" 
                        bgColor="transparent" fgColor="#1DB954" style={{width:"50px", height:"50px", margin:"10px"}}/>
                    {iconHovered && iconHovered == 'Spotify' ? <p className="social-icon-text">{iconHovered}</p> : <p className="social-icon-text"></p>}
                </div>
            </div>
        </div>
        <div className="content-container">
            <p>Software Dev : Footballer : Gamer</p>
        </div>
        
    </div>
}

ReactDOM.render(<App />, document.getElementById('app'));