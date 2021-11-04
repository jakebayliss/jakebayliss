import React, { useEffect, useCallback } from 'react';
import { scroll } from '../utils/scrollHelper';

import '../styles/silly.css';

import { BsArrowUpCircleFill } from 'react-icons/bs';

const SillyAbout = ({primaryColour, secondaryColour}) => {

    const arrowScrolledIntoView = useCallback(() => {
        const element = document.getElementById('arrow-up');
        const rect = element.getBoundingClientRect();
        if(rect.y < 500) {
            element.classList.add("hidden");
        }
        else {
            if(element.classList.contains("hidden")) {
                element.classList.remove("hidden");
            }
        }
    })

    useEffect(() => {
        window.addEventListener("scroll", arrowScrolledIntoView);
        return () => window.removeEventListener("scroll", arrowScrolledIntoView);
    }, [arrowScrolledIntoView]);

    return <div id="silly-container" className="silly-container" style={{ backgroundColor: secondaryColour }}>
        <div className="silly-content">
            <div>
                <p style={{ color: primaryColour }}>👋 hello im jake,</p>
                <p style={{ color: primaryColour }}>💻 i am a 'full stack' software dev,</p>
                <p style={{ color: primaryColour }}>by full stack, i mostly mean c#, js + react and the classic web tech of html and css,</p>
                <p style={{ color: primaryColour }}>⚽ i play football, and have since i was 7,</p>
                <p style={{ color: primaryColour }}>👴 i am getting old now and my knees are hurting,</p>
                <p style={{ color: primaryColour }}>🎮 i used to play loads of games in my free time,</p>
                <p style={{ color: primaryColour }}>🏋️‍♀️ i stopped that and went to the gym instead,</p>
                <p style={{ color: primaryColour }}>🏄‍♂️ now i am learning to surf in bondi</p>
            </div>
            <button className="arrow-container" onClick={() => scroll('#header-container')}>
                <BsArrowUpCircleFill id="arrow-up" className="arrow" style={{ color: primaryColour }} />
            </button>
        </div>
    </div>
}

export default SillyAbout;