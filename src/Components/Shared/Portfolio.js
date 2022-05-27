import React from 'react';
import ProPic from './../../Images/ProfilePic.png';
import petCare from '../../Images/Website/Pet-care.PNG';
import choiceHelper from '../../Images/Website/Choice-helper.PNG';
import productAnalysis from '../../Images/Website/Product-analysis.PNG';

const Portfolio = () => {
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-2 items-center '>
                <div >
                    <img className='rounded-full ml-24 w-80' src={ProPic} alt="" />
                </div>
                <div className='p-12 lg:ml-[-200px]'>
                    <h2 className='text-2xl '> <b>Name:</b> Md. Zillur Rahman</h2>
                    <h2 className='text-2xl '> <b>Email: </b> <i>mzisanr@gmail.com</i></h2>
                    <h5 className='text-xl'> <b>Description: </b> I want to be a Full Stack Web Developer. Right Now, I am learning about Web Developing. I have knowledge about HTML, CSS, XML, NodeJS, BootStrap, Tailwind, JAVASCRIPT, firebase, REACT, mongoDB etc. I am working hard to know more about this field.
                    </h5>
                </div>
            </div >
            <div>
                <h2 className='text-center text-4xl my-8'>Academic Qualification</h2>
                <div class="overflow-x-auto px-16 mb-8">
                    <table class="table w-full ">
                        <thead>
                            <tr>
                                <th>Degree</th>
                                <th>Concentration</th>
                                <th>Results</th>
                                <th>Institute</th>
                                <th>Degree Awarded</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>BSc</th>
                                <td>Physics</td>
                                <td>2.83</td>
                                <td>University of Dhaka</td>
                                <td>2021</td>
                            </tr>
                            <tr class="active">
                                <th>HSC</th>
                                <td>Science</td>
                                <td>GPA 5.00</td>
                                <td>Chittagong Cantonment Public College</td>
                                <td>2015</td>
                            </tr>
                            <tr>
                                <th>SSC</th>
                                <td>Science</td>
                                <td>GPA 5.00</td>
                                <td>Chittagong Government High School</td>
                                <td>2013</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className='my-12 px-12'>
                <h2 className='text-center text-4xl my-8'>Skills</h2>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    <div className='shadow-lg shadow-gray-500 rounded-lg'>
                        <h2 className='text-center text-2xl mt-4  text-primary'>Frontend Tools</h2>
                        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-4 text-center py-8'>
                            <li>HTML 5</li>
                            <li>CSS 3</li>
                            <li>ES6</li>
                            <li>Bootstrap</li>
                            <li>Tailwind CSS</li>
                            <li>JavaScript</li>
                            <li>React JS</li>
                        </ul>
                    </div>
                    <div className='shadow-lg shadow-gray-500 rounded-lg '>
                        <h2 className='text-center text-2xl mt-4 text-primary'>Backend Tools</h2>
                        <ul className='grid grid-cols-1 gap-4 text-center py-8'>
                            <li>Node JS</li>
                            <li>Express JS</li>
                            <li>MongoDB</li>
                            <li>Firebase Auth</li>
                        </ul>
                    </div>
                    <div className='shadow-lg shadow-gray-500 rounded-lg'>
                        <h2 className='text-center text-2xl mt-4 text-primary'>Other Tools</h2>
                        <ul className='grid grid-cols-1 gap-4 text-center py-8'>
                            <li>Github</li>
                            <li>Netlify</li>
                            <li>Heroku</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='p-8 '>
                <h2 className='text-center text-primary font-bold text-4xl mb-12    '>Live WebSite Link</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3'>
                    <div>
                        <img className='w-96 rounded-lg' src={choiceHelper} alt="" />
                        <a className='text-2xl text-center my-3' href="https://choice-helper-by-zillur.netlify.app/">Choice Helper</a>
                    </div>
                    <div>
                    <img className='w-96 rounded-lg' src={productAnalysis} alt="" />
                        <a className='text-2xl text-center my-3' href="https://product-analysis-by-zillurrahman.netlify.app/">Product Analysis</a>
                    </div>
                    <div>
                    <img className='w-96 rounded-lg' src={petCare} alt="" />
                        <a className='text-2xl text-center my-3' href="https://pet-carebyzillur.netlify.app/">Pet Care</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Portfolio;