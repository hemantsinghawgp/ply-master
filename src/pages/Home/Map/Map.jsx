import React from 'react';

const Map = () => {
    return (
        <div className='md:h-[300px] h-full my-11 bg-primary' style={{ backgroundImage: `url('https://validthemes.live/themeforest/edukat/assets/img/map.svg')` }}>
            <div className="md:h-[300px] text-white bg-black flex flex-col justify-center items-center bg-opacity-40">
                <h1 className='md:text-6xl text-4xl font-bold'>Begin Your Transformative Journey</h1>
                <p className="text-gray-300 my-4 text-center">
                    Join Pure Lifestyle Yoga  to start your wellness journeyy today.
                </p>
                <a href="/login" className="inline-block mt-6 px-6 py-3 bg-[#ffd32c] rounded-lg shadow-lg hover:bg-[#ffd32c] transition duration-300 text-black font-bold">
                    Join our community now
                </a>
            </div>
        </div>
    );
};

export default Map;
