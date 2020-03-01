import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

//css
import './styles/master.css';

export default function App() {

    return <div className="container">
        <div className="social">
            <a className="social-icon" href="https://www.instagram.com/jakewbayliss/" target="_blank">
                <img id="insta" src="./src/assets/instagram.png" />
            </a>
            <a className="social-icon" href="https://open.spotify.com/user/nhnz7ii5hd4rht81ez5q2le1e" target="_blank">
                <img id="spotify" src="./src/assets/spotify.png" />
            </a>
        </div>
    </div>
}

ReactDOM.render(<App />, document.getElementById('app'));