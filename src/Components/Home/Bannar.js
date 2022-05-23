import React from 'react';

const Bannar = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-[url('/src/Images/bannarPic.png')]">
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-5xl font-bold text-primary">Get Your Laptop Parts Here</h1>
                        <p class="mt-8 text-xl text-yellow-400 lg:text-black">We are supplying laptop parts all over the world. You can buy any types of parts in retail price here.</p>
                        <button class="btn btn-primary mt-12">Show Me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannar;