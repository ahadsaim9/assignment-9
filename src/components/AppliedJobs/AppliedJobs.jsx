import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../utilities/fakedb';
import ApplyCart from '../ApplyCart/ApplyCart';

const AppliedJobs = () => {

    const loder = useLoaderData();
    const [cart, setCart]=useState([])
    // console.log(loder)
    useEffect(()=>{
        const getCart= getShoppingCart()

        let pushData=[];
       
        for(const id in getCart){
          const loaderData= loder.find(pd=> pd.id===id);
          if(loaderData){

            pushData.push(loaderData);
          }
        }
        setCart(pushData)
        
    },[])
    console.log(cart);
   
    return (
        <div> 
            <h1 className='text-center text-2xl font-bold'>Apply Jobs</h1>
            <div className='mx-40 my-40 '>
                {
                    cart.map(carts => <ApplyCart 
                    carts={carts}
                    ></ApplyCart> )
                }
            </div>
        </div>
    );
};

export default AppliedJobs;