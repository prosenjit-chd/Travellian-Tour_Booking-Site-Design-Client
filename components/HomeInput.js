import React from 'react';
import RightArrowSVG from './svg/RightArrowSVG';

const HomeInput = () => {
    return (
        <div className='absolute left-0 z-20 w-full top-12'>
            <div className='mt-24 container mx-auto text-white'>
                <h1 className='lg:text-5xl text-2xl '>Start your unforgettable</h1>
                <h1 className='lg:text-5xl text-2xl '>journey with us.</h1>

                <p className='lg:text-lg mt-3 text-sm'>The best travel for your journey begins now</p>
            </div>
            <div className='flex justify-between items-center bg-white rounded-r-xl overflow-hidden h-28 w-5/6 mt-20 ml-1 '>
                <div className='flex justify-between items-center px-20'>
                    <div>
                        <h4>DESTINATION</h4>
                        <input className='w-40 h-6 mr-6 outline-none border-b border-black' type="text" id="fname" name="fname" />
                    </div>
                    <div>
                        <h4>PERSON</h4>
                        <select name="person" id="person" className='w-40 h-6 mr-6 outline-none border-b border-black'>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="4+">4+</option>
                        </select>
                    </div>
                    <div>
                        <h4>CHECK IN</h4>
                        <input type="date" id="checkIn" name="checkIn" className='w-40 h-6 mr-6 outline-none border-b border-black' />
                    </div>
                    <div>
                        <h4>CHECK OUT</h4>
                        <input type="date" id="checkOut" name="checkOut" className='w-40 h-6 mr-6 outline-none border-b border-black' />
                    </div>
                </div>

                <button className='bg-primary w-28 h-full text-white flex justify-center items-center hover:cursor-pointer'>
                    <div>
                        <h1 className='text-2xl font-semibold'>Book Now</h1>

                    </div>
                    <div className='pr-4'>
                        <RightArrowSVG />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default HomeInput;