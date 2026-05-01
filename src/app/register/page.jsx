'use client'
import Link from 'next/link';
import React from 'react';
import { FaGoogle } from "react-icons/fa";

const RegisterPage = () => {
    const handleRegister = (e) => {
        e.preventDefault(); // This stops the page from refreshing
        
        // Now you can grab the data safely
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const url = e.target.url.value;
        
        console.log({name,email,password,url});
        
    };

    return (
        <div className='flex justify-center mt-10 mb-10'>

            <form onSubmit={handleRegister}>
                <fieldset className="fieldset bg-[#fff7ed] border-base-300 rounded-box w-xs border p-4 space-y-2">
                    <legend className="fieldset-legend">Register/SignUp</legend>

                    <label className="label">Name</label>
                    <input type="text" className="input" placeholder="Name" name="name" required />

                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" name="email" required />

                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password mini-length-8" name="password" required minLength="8" />

                    <label className="label">Image Url</label>
                    <input type="url" className="input" placeholder="Url" name="url" required />

                    <button className="btn bg-[#f59e0b] mt-4">Register/SignUp</button>

                    <h1>Already have an account? <Link href={'/login'}><span className='text-[#f59e0b]'>Login</span></Link></h1>

                    <button className='btn bg-[#f59e0b] flex items-center rounded mt-4 border-t-slate-400'>
                        <FaGoogle />
                        Continue with Google
                    </button>
                </fieldset>
            </form>
        </div>
    );
};

export default RegisterPage;