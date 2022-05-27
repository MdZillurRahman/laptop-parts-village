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
            <div class=" flex justify-center mt-8">
                <table class="table w-64">
                    <thead>
                        <tr>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tools.map(tool => <div key={tool._id}>
                                <tr>
                                    <th>{tool.name}</th>
                                    <td><button onClick={() => handleDelete(tool._id)}>X</button></td>
                                </tr>
                            </div>)
                        }
                    </tbody>
                </table>
            </div>

        </div>);
};

export default ManageTool;