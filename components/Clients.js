import React from 'react';
import Slider from 'react-slick';
import { useEffect } from 'react';
import { useState } from 'react';
import Layouts from '@/components/layouts/layouts';
import StarSVG from '@/components/svg/StarSVG';
import LeftSVG from '@/components/svg/LeftSVG';
import RightSVG from '@/components/svg/RightSVG';
import StarRatings from 'react-star-ratings';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css';

const Clients = () => {

    // Use USe State here 
    const [review, setReview] = useState([]);

    // Use Use Effect here 
    useEffect(() => {
        fetch('../clients.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, []);



    return (
        <div className='h-screen' id='3'>

            <div className='container mx-auto my-40'>

                <h1 className="text-5xl font-semibold text-slate-600">
                    Traveler’s Experiences
                </h1>
                <div className='pt-2 h-1 w-64 border-b-4 border-primary'> </div>
                <p className="text-lg text-zinc-500 mt-4">
                    Here some awesome feedback from our travelers
                </p>


                <Swiper
                    slidesPerView={2.6}
                    spaceBetween={15}
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
                        review.map((r) => {
                            return (
                                <SwiperSlide key={r._id}>
                                    <div className="py-5 my-24 lg:px-4  md:px-2  relative">
                                        <div className="p-4">
                                            <img className="object-cover w-28 h-28 rounded-full absolute -top-12 left-12" src={r.image} alt="client" />

                                            <div className='pt-10 bg-gray-100 p-6 rounded-lg'>
                                                <div>
                                                    <p className='text-[#767E86] font-rubik py-3'>{r.comment}
                                                    </p>
                                                </div>

                                                <StarRatings
                                                    rating={5}
                                                    starDimension="20px"
                                                    starRatedColor="#FFC107"
                                                    starSpacing="2px"
                                                />

                                                <div className="text-[#767E86]  font-medium text-3xl mt-4">{r.name}</div>
                                                <div className='text-[#767E86]  text-xl'>{r.designation}</div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
                <div className="flex justify-center gap-4">
                    <button
                        className='rounded-lg bg-primary text-white mr-4 px-2 py-2 swiper-button image-swiper-button-prev'
                    >
                        <LeftSVG />
                    </button>
                    <button
                        className='rounded-lg bg-primary text-white px-2 py-2 swiper-button image-swiper-button-next'

                    >
                        <RightSVG />
                    </button>
                </div>
            </div>


        </div>
    );
};

export default Clients;

Clients.getLayout = function getLayout(page) {
    return (
        <Layouts>
            {page}
        </Layouts>
    );
};