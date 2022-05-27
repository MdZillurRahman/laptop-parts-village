import React, { useState } from 'react';
import Bannar from './Bannar';
import Tools from './Tools';
import BusinessSummaries from './BusinessSummaries';
import Reviews from './Reviews';
import WareHouse from './WareHouse';
import Calender from './Calender';

const Home = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <Bannar></Bannar>
            <Calender date={date} setDate={setDate}></Calender>
            <Tools date={date}></Tools>
            <BusinessSummaries></BusinessSummaries>
            <Reviews></Reviews>
            <WareHouse></WareHouse>
        </div>
    );
};

export default Home;