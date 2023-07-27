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
import LocationSVG from '@/components/svg/LocationSVG';


const PopularDestination = () => {

    // Use USe State here 
    const [destination, setDestination] = useState([]);

    // Use Use Effect here 
    useEffect(() => {
        fetch('../destinations.json')
            .then(res => res.json())
            .then(data => setDestination(data.data))
    }, []);


    return (
        <>
            <div className="min-h-screen" id='1'>

                <div className="container mx-auto my-14">

                    <h1 className="text-4xl font-semibold text-slate-600">Popular Destinations</h1>
                    <div className='pt-2 h-1 w-48 border-b-4 border-primary'> </div>

                    <div className="flex mt-2">
                        <div className="w-3/4">
                            <p className="text-lg text-zinc-500 mt-4 font-rubik">Most popular destinations around the world, from historical places to natural wonders.</p>
                        </div>
                        <div className="w-1/4 flex justify-end">
                            <button className="rounded-lg bg-primary text-white mr-4 px-2 swiper-button image-swiper-button-prev"
                            >
                                <LeftSVG />
                            </button>
                            <button className="rounded-lg bg-primary text-white  px-2 swiper-button image-swiper-button-next" >
                                <RightSVG />
                            </button>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={3.4}
                        spaceBetween={30}
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
                                <SwiperSlide key={r._id}>
                                    <div className='my-16 relative rounded-3xl overflow-hidden group'>
                                        <img src={r.image} alt='img' className="w-full h-auto group-hover:scale-125 duration-500" />
                                        <div className='text-white group-hover:opacity-100 opacity-0 duration-500 absolute bottom-4 px-3 w-full'>
                                            <h1 className='text-xl font-semibold'>{r.name}</h1>
                                            <p className='flex items-center space-x-2'>
                                                <span><LocationSVG /></span>
                                                <span>{r.address}</span>
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </div>

            </div>

        </>

    );
};

export default PopularDestination;

PopularDestination.getLayout = function getLayout(page) {
    return (
        <Layouts>
            {page}
        </Layouts>
    );
};
