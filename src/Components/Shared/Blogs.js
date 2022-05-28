import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h3 className='text-3xl text-primary text-center mb-8'>Question and Answer Session</h3>
            <div className='ml-16'>
                <div className='mb-6'>
                    <h4 className='text-xl'><b>Question 1: </b>How will you improve the performance of a React Application?</h4>
                    <h4><b>Answer:</b>We can follow some steps to improve the performance of a React Application. Such as-</h4>
                    <ul className='ml-12'>
                        <li>* Windowing or list virtualization in React</li>
                        <li>* Code-splitting in React using dynamic import()</li>
                        <li>* Lazy loading images in React</li>
                        <li>* Keeping component state local where necessary</li>
                        <li>* Memoizing React components to prevent unnecessary re-renders</li>
                    </ul>
                </div>
                <div className='mb-6'>
                    <h4 className='text-xl'><b>Question 2: </b>What are the different ways to manage a state in a React application?</h4>
                    <h4><b>Answer:</b>There are <b>four</b> main types of state you need to properly manage in your React apps:</h4>
                    <ul className='ml-12'>
                        <li><b>1. Local (UI) state :</b> Local state is data we manage in one or another component.</li>
                        <li><b>2. Global (UI) state :</b>  Global state is data we manage across multiple components.</li>
                        <li><b>3. Server state :</b>   Data that comes from an external server that must be integrated with our UI state.</li>
                        <li><b>4. URL state :</b>  Data that exists on our URLs, including the pathname and query parameters.</li>
                    </ul>
                </div>
                <div className='mb-6'>
                    <h4 className='text-xl'><b>Question 3: </b>How does prototypical inheritance work?</h4>
                    <h4><b>Answer:</b>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods <span className='ml-12'>of another object. Traditionally, in order to get and set the [Prototype] of an object, we use Object.getPrototypeOf and Object.</span></h4>
                </div>
                <div className='mb-6'>
                    <h4 className='text-xl'><b>Question 4: </b> What is a unit test? Why should write unit tests?</h4>
                    <h4><b>Answer:</b>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves <span className='ml-12'>as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure.</span></h4>
                </div>
                <div className='mb-6'>
                    <h4 className='text-xl'><b>Question 5: </b> Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts.</h4>
                    <h4><b>Answer:</b> We use setProducts instead of products = [...], so that we can add as many products as we want and it will be less time consuming.</h4>
                </div>
                <div className='mb-6'>
                    <h4 className='text-xl'><b>Question 5: </b> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h4>
                    <h4><b>Answer:</b> I can set a query in backend where i will search in the product collection. and i will get that api to search the products by name.</h4>
                </div>
            </div>
        </div>
    );
};

export default Blogs;