import React, { useState } from 'react';
import Bannar from './Bannar';
import Tools from './Tools';
import BusinessSummaries from './BusinessSummaries';
import Reviews from './Reviews';
import WareHouse from './WareHouse';
import Calender from './Calender';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/UseAdmin';

const Home = () => {
    const [date, setDate] = useState(new Date());
    const [user, loading] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user);
    return (
        <div>
            <Bannar></Bannar>
            <Calender date={date} setDate={setDate}></Calender>
            <Tools date={date} admin={admin}></Tools>
            <BusinessSummaries></BusinessSummaries>
            <Reviews></Reviews>
            <WareHouse></WareHouse>
        </div>
    );
};

export default Home;