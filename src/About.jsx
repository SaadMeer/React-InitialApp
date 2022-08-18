import React from 'react';
import { Link } from 'react-router-dom';
import web from '../src/images/img2.1.png';
import Common from './Common';

const About = () => {
    return (
        <div>
            <Common name='Welcome to about Page' imgsrc={web} visit='/contect' btname='Contect Now' />
        </div>
    );
}

export default About;
