import React, { useState } from 'react';
import {TestimonialData} from './TestimonialData';
import { FaLessThan,FaGreaterThan } from 'react-icons/fa';
import ModalPopup from './ModalPopup';

function Testimonial({slides}) {
    const [current,setCurrent]=useState(0);
    const[open,setOpen]=useState(false);
    const [id,setId]=useState('');

    

    const length=slides.length;
    const nextSlide = () => {
       
        setCurrent(current === length - 1 ? 0 : current + 1);
      };
    
      const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
      };

    return (
        <>
        <div className=''>
            <div className=' text-black flex justify-center items-center mt-12' >
                <b className='mt-12 mb-12 text-xl'>Testimonials</b>

            </div>
            <section className='relative flex justify-center items-center '>
     
                <FaLessThan size={30} className='absolute top-1/2 cursor-pointer z-10 left-5 'onClick={prevSlide}/>
                <FaGreaterThan size={30} className='absolute top-1/2 cursor-pointer z-10 right-5' onClick={nextSlide}/>
                {TestimonialData.map((slide,index)=>{
                    return (<div className={`flex flex-col bg-white shadow-2xl  ${index===current ? 'hover:scale-125 ease-out duration-200':'opacity-0 duration-700 ease-out'}`} key={index}>
                        {index===current &&(
                         <>   
                        <div className='text-red-700 font-bold flex justify-center items-center'>{slide.title}</div>
                        <div className='mt-6 p-5'>{slide.description}</div>
                        <div className='flex justify-end mt-6 text-red-700 mb-4 cursor-pointer pr-3' onClick={()=>{
                        setOpen(true);
                        setId(index);
                        }
                            
                            
                            }>{slide.buttom}</div>
                        
                     
                        </>

                        )}

                    </div>
                    );
                    
                    
                })}
                {
                    open? <ModalPopup id={id}   setOpen={setOpen} />:null
                }
   

            </section>
            </div>
            

        </>
    );
}

export default Testimonial;