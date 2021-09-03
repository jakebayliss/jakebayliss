import React from 'react';
import { scroll } from '../utils/scrollHelper';

import { BsChevronDoubleUp } from 'react-icons/bs';

const SillyAbout = ({primaryColour, secondaryColour}) => {
    return <div id="main-content-container" className="main-content-container" style={{ backgroundColor: secondaryColour }}>
        <div className="main-content">
            <div>
                <p style={{ color: primaryColour }}>hello im jake,</p>
                <p style={{ color: primaryColour }}>i am a 'full stack' software dev,</p>
                <p style={{ color: primaryColour }}>by full stack, i mostly mean c#, js + react and the classic web tech of html and css,</p>
                <p style={{ color: primaryColour }}>i play football, and have since i was 7,</p>
                <p style={{ color: primaryColour }}>i am getting old now and my knees are hurting,</p>
                <p style={{ color: primaryColour }}>i used to play loads of games in my free time,</p>
                <p style={{ color: primaryColour }}>i stopped that and went to the gym instead,</p>
                <p style={{ color: primaryColour }}>now i am learning to surf in bondi</p>
            </div>
            <div style={{ margin: '100px' }}>
                <p style={{ color: primaryColour }}>this site is just for a bit of fun (press the space bar),</p>
                <p style={{ color: primaryColour }}>its as ugly or pretty as you can make it :)</p>
            </div>
            <button className="arrow-container" onClick={() => scroll('#header-container')}>
                <BsChevronDoubleUp className="arrow" style={{ color: primaryColour }} />
            </button>
        </div>
    </div>
}

export default SillyAbout;