import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import Tool from './Tool';

const Tools = ({date,admin}) => {
    const [tools, setTools] = useState([]);
    // const formattedDate = format(date, 'PP');

    useEffect(()=>{
        fetch(`https://laptop-parts-village-server-site-production.up.railway.app/tools`)
        .then(res => res.json())
        .then(data => setTools(data))
    },[])

    return (
        <div id='ourTools'>
            <div className='text-center mt-16'>
                <h3 className='text-primary text-2xl font-bold uppercase'>Our Tools</h3>
                <h2 className='text-3xl'>Tools We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 p-12'>
                {
                    tools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                        date={date}
                        admin={admin}>
                    </Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;