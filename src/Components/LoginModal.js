import React from 'react';
import { MdClose} from 'react-icons/md';
import { BsPerson,BsLockFill} from 'react-icons/bs';


function LoginModal() {
  
    return (
        <>
        <div className='fixed inset-0 bg-zinc-400 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10'>
            <div className='bg-white w-1/2 shadow-2xl flex flex-col '>
                <i className='flex justify-end cursor-pointer'><MdClose size={30}  /></i>
                <div className='py-5 px-6 text-left'>
                    <h3 className='mb-4 text-xl font-medium text-gray-900'>Login to Your Account</h3>
                    <form className='space-y-6'>
                        <div className=' '>
                            <i className='absolute mt-2 '><BsPerson size={20}/></i>
                            <input type='email' className='bg-gray-50 border-gray-300 text-gray-900 text-sm  block w-full p-2.5 pl-9 ' placeholder='Email/Phonenumber' required/>

                        </div>
                        <div>
                            <i className='absolute mt-2'><BsLockFill size={20}/></i>
                            <input type='password' className='bg-gray-50 border-gray-300 text-gray-900 text-sm  block w-full p-2.5 pl-9' placeholder='Password' required/>
                            
                        </div>
                        <h2 className='text-red-700'>Forgot Password?</h2>
                        <button type='submit' className='w-full text-white text-xl bg-red-700'>
                            LOGIN

                        </button>
                        <div className='flex'>
                        <h2>New Here?</h2>
                        <h2 className='text-red-700 pl-1 cursor-pointer'>SignUp</h2>
                        </div>
                       
                    </form>

                </div>
            

                
              

            </div>

        </div>

            
        </>
    );
}

export default LoginModal;