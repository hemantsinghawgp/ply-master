import React from 'react';
import { useTitle } from '../../hooks/useTitle';
import ShowInstructors from './All/ShowInstructors';

const Instructors = () => {
    useTitle('Instructors |Pure Lifestyle Yoga - Your Path to Pure Bliss');
    return (
        <section>
            <ShowInstructors />
        </section>
    );
};

export default Instructors;