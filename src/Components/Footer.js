import React from 'react';
import { BsInstagram ,BsFacebook,BsFillTelephoneOutboundFill} from "react-icons/bs";
import { CiLocationOn,CiMail} from "react-icons/ci";

function Footer(props) {
    return (
        <>
        <div className='flex flex-col bg-black text-white mt-12 p-8'>
        <div className='flex justify-evenly items-center   '>
            
            <div className='flex flex-col gap-6'>
                <b>Foodmood</b>
                <p className='text-sm font-normal text-gray-500'>Food Mood is the new and advanced <br/>way of ordering and delivering foods<br/> to your doorsteps.</p>
                <div className='flex cursor-pointer gap-4'><div><BsFacebook size={30}/></div>
                <div className='cursor-pointer'><BsInstagram size={30} /></div></div>

            </div>
            <div className='flex flex-col gap-5 mt-2'>
                <b>INFORMATION</b>
                <ul className='text-sm font-normal text-gray-500'>
                    <li>About Us</li>
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions</li>
                    <li>FAQs</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='flex flex-col gap-5 mb-9'>
                <b>PAYMENT MODES</b>
                <ul className='text-sm font-normal text-gray-500'>
                    <li>Cash on Delivery</li>
                    <li>Esewa</li>
                    </ul> 

            </div>
            <div className='flex flex-col gap-5 mt-5'>
                <b>CONTACT INFO</b>
                <div className='flex text-sm font-normal text-gray-500 gap-3'>
                            <span className=''><BsFillTelephoneOutboundFill size={20}/></span>
                            <h6>+977-910000000,65444567788</h6>

                        </div>
                        <div className='flex text-sm font-normal text-gray-500 gap-3'>
                            <span className=''><CiMail size={20}/></span>
                            <h6>test@gmail.com</h6>

                        </div>
                        <div className='flex text-sm font-normal text-gray-500 gap-3'>
                            <span className='' ><CiLocationOn size={20}/></span>
                            <h6>Butwal,Nepal</h6>

                        </div>




            </div>
            
            
        </div>
     
        </div>
        </>
    );
}

export default Footer;