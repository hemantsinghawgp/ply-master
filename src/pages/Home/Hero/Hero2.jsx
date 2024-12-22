import React from 'react';
import banner2 from "../../../assets/home/bg.jpg";

const Hero2 = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-start bg-cover bg-center" style={{ backgroundImage: `url(${banner2})` }}>
            {/* No overlay or text content */}
        </div>
    );
};

export default Hero2;
