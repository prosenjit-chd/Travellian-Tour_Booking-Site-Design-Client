import Card from '@/components/Card';
import Layouts from '@/components/layouts/layouts';
import LeftSVG from '@/components/svg/LeftSVG';
import RightSVG from '@/components/svg/RightSVG';
import React, { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css';


const SpecialOffer = () => {




    const cardData = [
        {
            id: 1,
            image: 'https://i.ibb.co/y0M4XcG/3-purtugal.png',
            title: 'Lisbon, Portugal',
            rating: 5,
            description: '5 nights and 4 days in 5-star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cities of the world in classical literature.',
            price: '$500',
        },
        {
            id: 2,
            image: 'https://i.ibb.co/m999fBD/3-greeece.png',
            title: 'Athens, Greece',
            rating: 4,
            description: '5 nights and 4 days in 5-star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cities of the world in classical literature.',
            price: '$800',
        },
        {
            id: 3,
            image: 'https://i.ibb.co/Wx8d6Tx/3-rome.png',
            title: 'Rome, Italy',
            rating: 5,
            description: '5 nights and 4 days in 5-star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cities of the world in classical literature.',
            price: '$750',
        },
        {
            id: 4,
            image: 'https://i.ibb.co/m999fBD/3-greeece.png',
            title: 'Athens, Greece',
            rating: 4,
            description: '5 nights and 4 days in 5-star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cities of the world in classical literature.',
            price: '$800',
        },
        {
            id: 5,
            image: 'https://i.ibb.co/Wx8d6Tx/3-rome.png',
            title: 'Rome, Italy',
            rating: 5,
            description: '5 nights and 4 days in 5-star hotel, breakfast and lunch included. Very popular during the renaissance. Passage and going through the cities of the world in classical literature.',
            price: '$750',
        }
    ];



    return (
        <div className="container mx-auto my-14" id='2'>
            <div className="max-w-6xl mx-auto">

                <h1 className="text-4xl font-semibold text-slate-600 text-right">Special Offer</h1>
                <div className='pt-2 h-1 w-36 border-b-2 border-primary float-right'> </div>
                <div className="flex justify-between mt-2 w-full">
                    <div className=" flex justify-start">
                        <button
                            className='rounded-lg bg-primary text-white mr-4 px-2 swiper-button image-swiper-button-prev'
                        >
                            <LeftSVG />
                        </button>
                        <button
                            className='rounded-lg bg-primary text-white px-2 swiper-button image-swiper-button-next'

                        >
                            <RightSVG />
                        </button>
                    </div>

                    <p className="text-lg text-zinc-500 mt-4">Check out our special offers and discounts</p>

                </div>

                <div className="my-16">
                    <div className="mx-auto">

                        <Swiper
                            slidesPerView={3}
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

                            {cardData.map((card) => (
                                <SwiperSlide key={card.id}>
                                    <Card data={card} />

                                </SwiperSlide>

                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialOffer;

SpecialOffer.getLayout = function getLayout(page) {
    return (
        <Layouts>
            {page}
        </Layouts>
    );
};
