import React from 'react';
import bgImg from '../../../assets/home/bg.jpg';

const Hero = () => {
    return (
        <div className='min-h-screen bg-cover bg-center' style={{ backgroundImage: `url(${bgImg})` }}>
            {/* No overlay or text content */}
        </div>
    );
};

export default Hero;
