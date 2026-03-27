import React from 'react';

const ErrorPage = () => {
    return (
        <div className='text-center mt-60'>
            <h1 className='text-5xl font-bold text-gray-800 mb-8'>404 - Page Not Found</h1>
            <p className='text-xl font-semibold text-gray-600'>The page you are looking for does not exist.</p>
            <button onClick={() => window.history.back()} className='bg-blue-600 p-4 font-semibold text-white mt-6 cursor-pointer rounded-3xl'>Go Back</button>
        </div>
    );
};
    
export default ErrorPage;