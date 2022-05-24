import React from 'react';
import Bannar from './Bannar';
import Tools from './Tools';
import BusinessSummaries from './BusinessSummaries';
import Reviews from './Reviews';
import WareHouse from './WareHouse';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <Tools></Tools>
            <BusinessSummaries></BusinessSummaries>
            <Reviews></Reviews>
            <WareHouse></WareHouse>
        </div>
    );
};

export default Home;