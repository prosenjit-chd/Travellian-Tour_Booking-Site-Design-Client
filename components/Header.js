import React, { useState, useEffect } from 'react';
import { Transition } from "@headlessui/react";
import Link from 'next/link';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.onscroll = function () {
            if (window.scrollY > 550) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
    }, []);

    return (
        <nav className={`fixed top-0 z-50 w-full ${scrolled ? 'bg-gray-500' : ''}`}>

            <div className='container py-5 flex justify-between items-center mx-auto'>
                <div className='flex justify-center items-center'>
                    <img src='https://i.ibb.co/F7k31zt/Vector.png' alt='img' className="h-6 w-6" />
                    <h1 className='text-white font-medium text-2xl ms-1'>Travellian</h1>
                </div>

                <div >
                    <ul className='flex justify-center items-center text-white font-sm text-lg space-x-5'>

                        <li className='h-7 hover:border-b-2 border-primary'>
                            <Link href='/home'>Home</Link>
                        </li>

                        <li className='h-7 hover:border-b-2 border-primary'>
                            <Link href='/#1'>Popular</Link>
                        </li>

                        <li className='h-7 hover:border-b-2 border-primary'>
                            <Link href='/#2'>Offer</Link>
                        </li>

                        <li className='h-7 hover:border-b-2 border-primary'>
                            <Link href='/#3'>Comments</Link>
                        </li>

                        <li className='h-7 hover:border-b-2 border-primary'>
                            <Link href='/#4'>Trips</Link>
                        </li>

                    </ul>
                </div>

                <div className='flex justify-center'>
                    <button className=" text-white px-4 py-2 rounded-lg">
                        Login
                    </button>
                    <button className="bg-primary text-white px-5 py-2.5 rounded-lg">
                        Sign up
                    </button>
                </div>
            </div>

        </nav>

    );
};

export default Header;