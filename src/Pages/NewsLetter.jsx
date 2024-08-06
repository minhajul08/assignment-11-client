import React, { useState } from 'react';
import Swal from 'sweetalert2';

const NewsLetter = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(email)) {
            Swal.fire({
                title: "Email!",
                text: "Thanks for Subscribe it.",
                icon: "success"
              });
            console.log('Email submitted:', email);
            setEmail('');
            setError('');
        }
       
         else {
            setError('Please enter a valid email address.');
        }
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    return (
        <div className='my-10'>
            <section className='flex flex-col max-w-7xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48'>
                <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
                    <div className="px-6 py-6 md:px-8 md:py-0">
                        <h2 className='text-lg font-bold text-gray-700 dark:text-white md:text-gray-100'>Subscribe to our Newsletter</h2>
                        <p className='mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400'>Get updates, deals, and exclusive offers directly to your inbox.</p>
                    </div>
                </div>
                <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                            <input 
                                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent" 
                                type="text" 
                                name="email" 
                                placeholder="Enter your email" 
                                aria-label="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button 
                                className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-[#bdac62] rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
                                type="submit"
                            >
                                Subscribe
                            </button>
                        </div>
                        {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
                    </form>
                </div>
            </section>
        </div>
    );
};

export default NewsLetter;
