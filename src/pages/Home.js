import React from 'react';

import Header from '../components/Header';
import SillyAbout from '../components/SillyAbout';

const Home = ({primaryColour, secondaryColour}) => {
    return <div>
        <Header primaryColour={primaryColour} secondaryColour={secondaryColour} />
        <SillyAbout primaryColour={primaryColour} secondaryColour={secondaryColour} />
    </div>
}

export default Home;