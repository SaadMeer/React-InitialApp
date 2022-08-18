import React from 'react';
import { Link } from 'react-router-dom';
import web from '../src/images/img2.1.png';
import Common from './Common';

const Home = () => {
    return (
        <div>
            <Common name='Grow your Business with' imgsrc={web} visit='/contact' btname='Get Started' />
        </div>
    );
}

export default Home;
