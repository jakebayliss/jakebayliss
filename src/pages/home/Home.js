import React, { useState, useEffect, useCallback } from 'react';
import Feedback from '../../components/Feedback';
import Social from '../../components/Social';
import { Link } from "react-router-dom";

const Home = ({primaryColour, secondaryColour}) => {
    const [active, setActive] = useState('developer');
    const[jPressed, setJ] = useState(false);
    const[aPressed, setA] = useState(false);
    const[kPressed, setK] = useState(false);
    const[ePressed, setE] = useState(false);

    const keydown = useCallback(e => {
        if(e.code == "KeyJ") {
            setJ(!jPressed);
        }
        else if(e.code == "KeyA") {
            setA(!aPressed);
        }
        else if(e.code == "KeyK") {
            setK(!kPressed);
        }
        else if(e.code == "KeyE") {
            setE(!ePressed);
        }
    });

    useEffect(() => {
        window.addEventListener("keydown", keydown); 
        return () => window.removeEventListener("keydown", keydown);
    }, [keydown]);

    return <div className="text-center" id="header-container" style={{ backgroundColor: primaryColour }}>
        <div className='mt-4 sm:mt-20'>
            <h1 className="text-8xl" style={{ color: secondaryColour, fontFamily: 'Zilla Slab' }}>
                <span className={`${jPressed ? 'text-lime-400' : ''}`}>J</span>
                <span className={`${aPressed ? 'text-lime-400' : ''}`}>a</span>
                <span className={`${kPressed ? 'text-lime-400' : ''}`}>k</span>
                <span className={`${ePressed ? 'text-lime-400' : ''}`}>e</span> Bayliss</h1>
            <div className='mt-12 text-sm sm:text-lg'>
                <button className={`m-0 sm:m-2 p-2 px-3 cursor-pointer hover:bg-zinc-900 rounded-md focus:outline-none focus:ring-1 focus:ring-lime-300 ${active == 'developer' ? 'bg-zinc-900' : ''}`}
                    onClick={() => setActive('developer')}>Full stack developer</button>
                <button className={`m-0 sm:m-2 p-2 px-3 cursor-pointer hover:bg-zinc-900 rounded-md focus:outline-none focus:ring-1 focus:ring-lime-300 ${active == 'gamer' ? 'bg-zinc-900' : ''}`}
                    onClick={() => setActive('gamer')}>Gamer</button>
                <button className={`m-0 sm:m-2 p-2 px-3 cursor-pointer hover:bg-zinc-900 rounded-md focus:outline-none focus:ring-1 focus:ring-lime-300 ${active == 'footballer' ? 'bg-zinc-900' : ''}`}
                    onClick={() => setActive('footballer')}>Footballer</button>
                <button className={`m-0 sm:m-2 p-2 px-3 cursor-pointer hover:bg-zinc-900 rounded-md focus:outline-none focus:ring-1 focus:ring-lime-300 ${active == 'surfer' ? 'bg-zinc-900' : ''}`}
                    onClick={() => setActive('surfer')}>Surfer</button>
            </div>
            <div className='mt-4 sm:mt-16 px-10 lg:px-32'>
                <div style={{display: active == 'developer' ? 'block' : 'none'}}>
                    <p>I am a full stack developer working with .NET and React, among many others!</p>
                    <p>Check out more <Link to="exp" className="text-lime-300 hover:text-lime-400 hover:underline"
                            onClick={() => setActiveLink('/exp')}>here</Link></p>
                        <br />
                </div>
                <div style={{display: active == 'gamer' ? 'block' : 'none'}}>
                    <p>Very big on competitive gaming - Call of Duty, Overwatch, Valorant, Rocket League and many more</p>
                </div>
                <div style={{display: active == 'footballer' ? 'block' : 'none'}}>
                    <p>I've been playing football since I was about 5 as a center midfielder</p>
                </div>
                <div style={{display: active == 'surfer' ? 'block' : 'none'}}>
                    <p>I've recently moved to Bondi where I have been learning to surf - still awful but it's great exercise and fun!</p>
                </div>
            </div>
        </div>
        <Social />
        <Feedback />
    </div>
}

export default Home;