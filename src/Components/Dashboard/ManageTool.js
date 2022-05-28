import React from 'react';
import useTools from '../../Hooks/useTools';

const ManageTool = () => {
    const [tools, setTools] = useTools();


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/tools/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = tools.filter(tool => tool._id !== id);
                    setTools(remaining);
                })
        }
    }
    return (
        <div>
            <h2 className='text-2xl text-center'>Manage Tools</h2>
            <div className=" flex justify-center mt-8">
                <table className="table w-80">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Remove Tool</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map(tool =>
                                <tr key={tool._id}>
                                    <th>{tool.name}</th>
                                    <td className='text-center'><button className='border-4 rounded-xl' onClick={() => handleDelete(tool._id)}>X</button></td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>);
};

export default ManageTool;