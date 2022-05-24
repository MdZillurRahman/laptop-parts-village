import React, { useEffect, useState } from 'react';
import Purchase from '../Purchase/Purchase';
import Tool from './Tool';

const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect(()=>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setTools(data))
    },[])

    return (
        <div >
            <div className='text-center mt-16'>
                <h3 className='text-primary text-2xl font-bold uppercase'>Our Tools</h3>
                <h2 className='text-3xl'>Tools We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 p-12'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}>
                    </Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;