import React from 'react';
import Bannar from './Bannar';
import Tools from './Tools';
import BusinessSummaries from './BusinessSummaries';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Tools></Tools>
            <BusinessSummaries></BusinessSummaries>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;