import React from 'react';
import Bannar from './Bannar';
import Tools from './Tools';
import BusinessSummaries from './BusinessSummaries';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Tools></Tools>
            <BusinessSummaries></BusinessSummaries>
        </div>
    );
};

export default Home;