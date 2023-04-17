import React from 'react';

function SecondContent(props) {
    return (
        <>
        <div className='mt-12'>
            <b className='flex justify-center items-center'>How it Works?</b>
            
        </div>
        <div className='flex justify-around mt-12'>
            <div className='flex flex-col justify-center items-center gap-4'>
            <div className="rounded-full bg-blue-300 h-20 w-20  md:h-40 md:w-40 hover:scale-75 ease-out duration-500 drop-shadow-md">
            <img src="https://png.pngtree.com/png-vector/20190726/ourlarge/pngtree-cafe-shop-and-restaurant-building-vector-flat-design-illustration-png-image_1606686.jpg" className=" rounded-full object-cover " alt=""/>
  
               
            </div>
            <p>Step1</p>
            <b>Choose a Restaurant</b>

            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
            <div className="rounded-full bg-blue-300  h-20 w-20  md:h-40 md:w-40 hover:scale-75 ease-out duration-500 drop-shadow-md">
            <img src="https://png.pngtree.com/png-vector/20220619/ourmid/pngtree-cheese-burger-with-soda-fastfood-vector-art-png-image_5128530.png" className=" rounded-full object-cover " alt=""/>
  
               
            </div>
            <p>Step2</p>
            <b>Choose a Tasty dish</b>

            </div>
            <div className='flex flex-col justify-center items-center gap-4'>
            <div className="rounded-full bg-blue-300 w-20 h-20 md:h-40 md:w-40 hover:scale-75 ease-out duration-500 drop-shadow-md">
            <img src="https://img.freepik.com/premium-vector/delivery-service-holiday-delivery-courier-taking-boxes-by-bike_505573-27.jpg?w=2000" className=" rounded-full object-cover" alt=""/>
  
               
            </div>
            <p>Step3</p>
            <b>Delivery at your door</b>

            </div>


        </div>
        </>
    );
}

export default SecondContent;