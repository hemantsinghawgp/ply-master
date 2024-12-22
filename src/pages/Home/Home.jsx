import React from 'react';
import { useTitle } from '../../hooks/useTitle';
import Map from './Map/Map';
import PopularClasses from './PopularClasses/PopularClasses';
import PopularInstructor from './PopularTeacher/PopularInstructor';
import HeroContainer from './Hero/HeroContainer';
import Gallary from './Gallary/Gallary';
import ServicesOffered from './ServicesOffered/ServicesOffered';
import UpcomingRetreats from './UpcomingEvents/UpcomingEvents';

const Home = () => {
    useTitle('Home | Pure Lifestyle Yoga - Your Path to Pure Bliss');
    return (
        <section>
            <HeroContainer />
            <div className="max-w-screen-xl mx-auto">
            <Gallary/>
            <UpcomingRetreats />
            <ServicesOffered />
                <PopularClasses />
                
                <PopularInstructor />
            </div>
            <Map />
        </section>
    );
};

export default Home;