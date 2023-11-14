import React from 'react';
import { Link } from 'react-router-dom';

const ApplyCart = ({carts}) => {
    console.log(carts);
    const {id} = carts;
   
    return (
        <div className='lg:flex border p-4 gap-5 rounded-md mb-3'>
            <div>
                <img className='w-48' src={carts.logo} alt="" />
            </div>
            <div className='grid justify-center'>
                <p>{carts.title}</p>
                <p>{carts.name}</p>
                <div className='lg:flex'>
                    <p>{carts.selary}</p>
                    <p>{carts.location}</p>
                </div>
            </div> 
            <Link to={`/details/${id}`} className='bg-blue-600 p-3 grid justify-center ml-auto text-white font-bold rounded-md h-12 my-auto hover:bg-blue-900'>
                <button>View Details</button>
            </Link> 
        </div>
    );
};

export default ApplyCart;