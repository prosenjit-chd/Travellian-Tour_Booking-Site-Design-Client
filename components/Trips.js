import Layouts from '@/components/layouts/layouts';
import LeftSVG from '@/components/svg/LeftSVG';
import RightSVG from '@/components/svg/RightSVG';
import React, { useState, useRef, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css';
import StarRatings from 'react-star-ratings';


const Trips = () => {

    // Use USe State here 
    const [destination, setDestination] = useState([]);

    // Use Use Effect here 
    useEffect(() => {
        fetch('../popular.json')
            .then(res => res.json())
            .then(data => setDestination(data))
    }, []);


    return (
        <>
            <div className="min-h-screen" id='4'>

                <div className="container mx-auto my-14">

                    <div className='grid grid-cols-9 w-full'>

                        <div className="col-span-3 w-full p-6 flex justify-center items-end">
                            <div>

                                <h1 className="text-5xl font-medium text-slate-600">Trip Planners</h1>
                                <div className='pt-2 h-1 w-40 border-b-4 border-primary'> </div>
                                <p className="text text-zinc-500 mt-4 font-rubik">20 years from now you will be more disappointed by the things that you didn’t do. Stop regretting and start travelling, start throwing off the bowlines.</p>

                                <div className='relative my-10 mx-auto ms-8'>
                                    <div className='z-0 absolute -top-4 -left-4 w-10 h-10 bg-black'>

                                    </div>
                                    <button className='text-white bg-primary rounded-lg px-4 py-2.5 relative z-10'>
                                        View all trip plans
                                    </button>
                                    <div className='z-0 absolute -bottom-4 right-44 w-10 h-10 bg-[#767E86]'>

                                    </div>
                                </div>


                                <div className="flex justify-center">
                                    <button className="rounded-lg bg-primary text-white mr-4 px-1 py-1 swiper-button image-swiper-button-prev"
                                    >
                                        <LeftSVG />
                                    </button>
                                    <button className="rounded-lg bg-primary text-white  px-1 py-1 swiper-button image-swiper-button-next" >
                                        <RightSVG />
                                    </button>
                                </div>

                            </div>

                        </div>

                        <div className="col-span-6 w-full">
                            <Swiper
                                slidesPerView={3.6}
                                spaceBetween={24}
                                loop={true}
                                effect='slide'
                                className="mySwiper"
                                navigation={{
                                    nextEl: ".image-swiper-button-next",
                                    prevEl: ".image-swiper-button-prev",
                                    disabledClass: "swiper-button-disabled"
                                }}
                                modules={[Navigation]}
                            >

                                {
                                    destination.map((r) =>
                                        <SwiperSlide key={r.id}>
                                            <div className='mt-16 hover:translate-y-0 duration-500 translate-y-20 rounded-3xl overflow-hidden group'>
                                                <img src={r.image} alt='img' className="w-full h-auto" />

                                                <div className='px-3 w-full mt-2'>

                                                    <div className='flex justify-between'>
                                                        <p>{r.type}</p>
                                                        <p>{r.price}</p>
                                                    </div>

                                                    <h1 className='text-xl font-semibold'>{r.title}</h1>

                                                    <div className='flex justify-between'>
                                                        <p>                                                <StarRatings
                                                            rating={5}
                                                            starDimension="15px"
                                                            starRatedColor="#FFC107"
                                                            starSpacing="1px"
                                                        /></p>
                                                        <p>{r.days}</p>
                                                    </div>

                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                }
                            </Swiper>

                        </div>
                    </div>

                </div>


            </div>

        </>

    );
};

export default Trips;

Trips.getLayout = function getLayout(page) {
    return (
        <Layouts>
            {page}
        </Layouts>
    );
};
