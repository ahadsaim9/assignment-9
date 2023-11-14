import React from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'recharts';

const ErrorePage = () => {
    return (
        <div>
            <div className='grid justify-center text-center'>
                <img className=' w-72 ' src='https://upload.wikimedia.org/wikipedia/commons/f/f0/Error.svg' alt="" />
                <p className='text-2xl'>This page doesn't exist!</p>
                <p className='font-bold text-6xl'>404</p>
                <p className='text-3xl'>Error</p>
                <Link to='/'><button className='text-gray-100 font-bold rounded-md mt-2 p-2 bg-blue-400'>Pleaes Back To Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorePage;