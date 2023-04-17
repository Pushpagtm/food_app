import React from 'react';
import TestimonialData from './TestimonialData';

function ModalPopup({id,setOpen}) {
  let data = TestimonialData[id];
  
    
    return (
        <>

        <div className='bg-zinc-400  fixed inset-0  backdrop-blur-sm bg-opacity-25 z-10'>
           
        
            <div className='flex h-screen justify-center items-center'>
                <div className=' container mx-auto px-4 bg-white w-auto h-80 shadow-2xl '>
                    <b>Listen from{data.title}</b>
                    <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className='mt-6 p-5'>{data.description}</div>
                    <hr className="my-8 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className='flex justify-end cursor-pointer'>
                    <button type="button" className="w-24 text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 " onClick={()=>setOpen(false)}>Close</button>
                    </div>

                </div>
               
                    


            </div>


            
        </div>
        </>
    );
}

export default ModalPopup;



