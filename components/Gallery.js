import Layouts from '@/components/layouts/layouts';
import LeftSVG from '@/components/svg/LeftSVG';
import RightSVG from '@/components/svg/RightSVG';
import React, { useState, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css';


const Gallery = () => {



    const galleryImages = [
        'https://i.ibb.co/s2hC2bZ/6-gallary-1.png',
        'https://i.ibb.co/yqFNxXp/6-gallary-2.png',
        'https://i.ibb.co/bNXh1YP/6-gallary-3.png',
        'https://i.ibb.co/QrbRQMB/6-gallary-4.png',
        'https://i.ibb.co/yqFNxXp/6-gallary-2.png',
        'https://i.ibb.co/bNXh1YP/6-gallary-3.png',
    ];

    return (
        <>
            <div className=" min-h-screen">

                <div className="container mx-auto my-14">

                    <h1 className="text-4xl font-semibold text-slate-600">Destination Gallery</h1>
                    <div className='pt-2 h-1 w-36 border-b-4 border-primary'> </div>

                    <div className="flex mt-2">
                        <div className="w-1/2">
                            <p className="text-lg text-zinc-500 mt-4">Our photo gallery on trip</p>
                        </div>
                        <div className="w-1/2 flex justify-end">
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
                        slidesPerView={4}
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
                            galleryImages.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className='hover:-translate-y-6 duration-300 py-16'>
                                        <img src={image} alt='img' className="w-full h-auto" />
                                    </div>

                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>

            </div>

        </>

    );
};

export default Gallery;

Gallery.getLayout = function getLayout(page) {
    return (
        <Layouts>
            {page}
        </Layouts>
    );
};
