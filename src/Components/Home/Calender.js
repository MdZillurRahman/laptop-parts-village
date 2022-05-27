import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calender = ({date, setDate}) => {
    return (
        <div className='text-center mt-16'>
            <h3 className='text-primary text-2xl font-bold uppercase'>Our Moto</h3>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <h4 className='text-2xl'>"We believe in service. It is our Duty to serve you on Time."</h4> 
                        <h4 className='text-xl'>Please pick a date when you need it, we will deliver it in <b>7 days</b></h4> 
                    </div>
                    <div>
                    <DayPicker 
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calender;