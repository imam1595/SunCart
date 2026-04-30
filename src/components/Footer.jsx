import React from 'react';
import { IoLogoWhatsapp, IoSunnyOutline } from 'react-icons/io5';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-black text-white container mx-auto mt-10  p-10 text-center flex flex-col space-y-5'>

            <div>
                <div className='border-b p-4 md:flex md:justify-between'>

                    <div className='flex flex-col space-y-5'>
                        <div className='font-bold text-2xl text-accent flex justify-center items-center gap-3'>
                            SumCart
                            <IoSunnyOutline />
                        </div>
                        <div>
                            <p>Your one-stop summer essentials store. <br /> Stay cool, stay stylish all season long.</p>
                        </div>
                        <div className='flex justify-center gap-3 mb-4'>
                            <FaFacebookSquare />
                            <FaInstagramSquare />
                            <FaTwitterSquare />
                            <IoLogoWhatsapp />
                        </div>
                    </div>

                    <div className='mb-4'>
                        <h1 className='font-bold text-xl md:text-2xl'>Quick Links</h1>
                        <h5>Home</h5>
                        <h5>Product</h5>
                        <h5>My Profile</h5>
                        <h5>Contact</h5>
                    </div>

                    <div>
                        <h1 className='font-bold text-xl md:text-2xl'>Legal</h1>
                        <h5>Privacy Policy</h5>
                        <h5>Terms and Conditions</h5>
                        <h5>Returns Policy</h5>
                    </div>
                </div>

                <div className='mt-3 md:flex justify-between'>
                    <h1>© 2025 SunCart. All rights reserved.</h1>
                    <h1>Made with ☀ for summer lovers</h1>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;