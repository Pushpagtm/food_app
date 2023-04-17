import React from 'react';
import { MdClose} from 'react-icons/md';
import { FiMail} from 'react-icons/fi';
import { FaKey} from 'react-icons/fa';
import { BsPerson,BsFillTelephoneFill} from 'react-icons/bs';
function RegisterModal(props) {
    return (
        <>
        <div className='fixed inset-0 bg-zinc-400 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10'>
            <div className='bg-white w-1/2 shadow-2xl flex flex-col '>
                <i className='flex justify-end'><MdClose size={30}/></i>
                <div className='py-5 px-6 text-left'>
                    <h3 className='mb-4 text-xl font-medium text-gray-900'>Sign Up</h3>
                    <form className='space-y-6'>
                        <div className=' '>
                            <i className='absolute mt-2 '><BsPerson size={20}/></i>
                            <input type='text' className='bg-gray-50 border-gray-300 text-gray-900 text-sm  block w-full p-2.5 pl-9 ' placeholder='First Name' required/>

                        </div>
                        <div className=' '>
                            <i className='absolute mt-2 '><BsPerson size={20}/></i>
                            <input type='text' className='bg-gray-50 border-gray-300 text-gray-900 text-sm  block w-full p-2.5 pl-9 ' placeholder='Last Name' required/>

                        </div>
                        <div>
                            <i className='absolute mt-2'><BsFillTelephoneFill size={20}/></i>
                            <input type='number' className='bg-gray-50 border-gray-300 text-gray-900 text-sm  block w-full p-2.5 pl-9' placeholder='Phone number' required/>
                            
                        </div>
                        <div>
                            <i className='absolute mt-2'><FiMail size={20}/></i>
                            <input type='email' className='bg-gray-50 border-gray-300 text-gray-900 text-sm  block w-full p-2.5 pl-9' placeholder='Email' required/>
                            
                        </div>
                        <div>
                            <i className='absolute mt-2'><FaKey size={20}/></i>
                            <input type='password' className='bg-gray-50 border-gray-300 text-gray-900 text-sm  block w-full p-2.5 pl-9' placeholder='Password' required/>
                            
                        </div>
                        <div>
                            <i className='absolute mt-2'><FaKey size={20}/></i>
                            <input type='password' className='bg-gray-50 border-gray-300 text-gray-900 text-sm  block w-full p-2.5 pl-9' placeholder='Confirm Password' required/>
                            
                        </div>
                        <div className='flex '>
                            <input className='  border-gray-400 w-4 h-4 border-x-2 border-y-2 cursor-pointer'/>
                            <h3 className='pl-2 text-sm'>By registering you confirm that you accept our terms and condition and privacy policy</h3>


                        </div>
                        
                        <button type='submit' className='w-full text-white text-xl bg-red-700'>
                            SIGNUP

                        </button>
                     
                       
                    </form>

                </div>
                

                
              

            </div>

        </div>

            
        </>
    );
}

export default RegisterModal;