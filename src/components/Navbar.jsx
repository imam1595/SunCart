import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { IoSunnyOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <div className='min-h-[10vh] container mx-auto shadow p-3 flex flex-col text-center space-y-5 md:flex-row justify-between items-center'>

            <div className='font-bold text-3xl text-accent flex justify-center items-center gap-3'>
                SumCart
                <IoSunnyOutline />
            </div>

            <ul className='flex flex-col text-center md:flex-row gap-5'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/products'}>Products</Link></li>
                <li><Link href={'/profile'}>My Profile</Link></li>
            </ul>

            <div className='flex flex-col gap-5 items-center md:flex-row'>

                <div className='flex gap-4'>
                    <button className='btn btn-accent'>Logout</button>
                </div>

                <div className='flex gap-5'>
                    <button className='btn btn-accent'>Login</button>
                    <button className='btn btn-accent'>Register</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;