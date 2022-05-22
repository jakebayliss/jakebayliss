import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Banner = () => {
    const [activeLink, setActiveLink] = useState(window.location.pathname);

    return <div className="w-100 flex justify-between h-12 px-5 sm:px-10 md:px-20 lg:px-32 bg-zinc-900 shadow-sm shadow-gray-500 text-xl">
        <div>
            <Link to="/" className="flex items-center m-0 p-3 h-12 text-lime-400 rounded-none border-b-2 border-transparent hover:border-lime-400"
                onClick={() => setActiveLink('/')}>JB 🐍</Link>
        </div>
        <div className='flex'>
            <Link to="exp" className="flex items-center m-0 p-3 h-12 text-lime-400 rounded-none border-b-2 border-transparent hover:border-lime-400"
                onClick={() => setActiveLink('/exp')}>Exp</Link>
            {/* <Link to="chess" className="flex items-center m-0 p-3 h-12 text-lime-400 rounded-none border-b-2 border-transparent hover:border-lime-400"
                onClick={() => setActiveLink('/chess')}>Chess</Link> */}
        </div>
    </div>
}

export default Banner;