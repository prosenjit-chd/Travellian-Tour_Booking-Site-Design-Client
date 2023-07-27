import React from 'react';
import FacebookSVG from './svg/FacebookSVG';
import InstragramSVG from './svg/InstragramSVG';
import TwitterSVG from './svg/TwitterSVG';
import GitSVG from './svg/GitSVG';

const Footer = () => {
    return (
        <div className='mt-64'>

            <footer className="bg-[#172432] text-white relative">
                <div className="mx-auto w-full container py-28">

                    <div className="flex justify-between">

                        <div>
                            <div className='flex justify-start items-center'>
                                <img src='https://i.ibb.co/F7k31zt/Vector.png' alt='img' className="h-6 w-6" />
                                <h1 className='text-white font-medium text-2xl ms-1'>Travellian</h1>
                            </div>
                            <p className='text-sm mt-2'>Copyright © Travellian 2020 All rights reserved</p>
                        </div>


                        <div className="grid grid-cols-3 gap-14">
                            <div>
                                <h2 className="mb-3 text-lg font-semibold text-white">Menu</h2>
                                <ul className="font-sm text-sm space-y-1">
                                    <li>
                                        <a>Home</a>
                                    </li>
                                    <li>
                                        <a>Explore</a>
                                    </li>
                                    <li>
                                        <a>Travel</a>
                                    </li>
                                    <li>
                                        <a>Blog</a>
                                    </li>
                                    <li>
                                        <a>Pricing</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-3 text-lg font-semibold text-white">Information</h2>
                                <ul className="font-sm text-sm space-y-1">
                                    <li>
                                        <a>Destinations</a>
                                    </li>
                                    <li>
                                        <a>Supports</a>
                                    </li>
                                    <li>
                                        <a>Terms & Conditions</a>
                                    </li>
                                    <li>
                                        <a>Privacy</a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h2 className="mb-3 text-lg font-semibold text-white">Contact Info</h2>
                                <ul className="font-sm text-sm space-y-1">
                                    <li>
                                        <a>+123 456 789</a>
                                    </li>
                                    <li>
                                        <a>info@travellian.com</a>
                                    </li>
                                    <li>
                                        <a>1245, New York, USA</a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div>
                            <h2 className="mb-3 text-lg font-semibold text-white">Follow us on</h2>
                            <ul className="flex justify-between space-x-2 font-medium">
                                <li>
                                    <a><FacebookSVG /></a>
                                </li>
                                <li>
                                    <a><InstragramSVG /></a>
                                </li>
                                <li>
                                    <a><TwitterSVG /></a>
                                </li>
                                <li>
                                    <a><GitSVG /></a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>
                {/* fsdnj */}
                <div className='absolute left-0 -top-20 z-20 w-full'>
                    <div className=' mx-auto bg-white shadow-2xl rounded-3xl  container py-10 px-12 flex justify-between items-center border'>
                        <div>
                            <h1 className='text-[#767E86] font-semibold text-5xl'>Our Newsletter</h1>
                        </div>
                        <div>
                            {/* <p className='text-black text-xl'>Email</p> */}
                            <input className='w-72 px-6  h-8 mr-6 py-6 text-xl outline-none placeholder:text-primary bg-[#FFE8D4]' type="email" id="emailfield" name="emailAddress" placeholder='Enter your email' />
                        </div>
                        <div>
                            <button className='text-white text-xl bg-primary rounded-lg px-8 py-3'>
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </footer>




        </div>
    );
};

export default Footer;