import React, { useEffect, useState } from 'react';
import Summary from './Summary';

const BusinessSummaries = () => {
    const [summaries, setSummaries] = useState([]);

    useEffect(()=>{
        fetch('https://laptop-parts-village-server-site-production.up.railway.app/summary')
        .then(res => res.json())
        .then(data => setSummaries(data))
    },[])

    return (
        <div >
            <div className='text-center mt-16'>
                <h3 className='text-primary text-2xl font-bold uppercase'>Our Business</h3>
                <h2 className='text-3xl'>Circulation of Our Business</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-16 p-12'>
                {
                    summaries.map(summary => <Summary
                        key={summary._id}
                        summary={summary}>
                    </Summary>)
                }
            </div>
        </div>
    );
};

export default BusinessSummaries;