import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import HomeInput from './HomeInput';


const galleryImages = [
    'https://i.ibb.co/yX2M4Z3/1-Home-Section.png',
    'https://i.ibb.co/y4Xn0Tf/banner.jpg',
];

const Banner = () => {
    return (
        <>

            <div className='relative'>
                <Swiper
                    // direction={'vertical'}
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >

                    {
                        galleryImages.map((image, index) => (
                            <SwiperSlide key={index}>
                                <div className='w-full h-screen'>
                                    <img src={image} alt='img' className="w-full" />
                                </div>

                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <HomeInput />
            </div>


            {/* <div>
                <img src="https://i.ibb.co/yX2M4Z3/1-Home-Section.png" alt='img' className="w-full h-screen" />
            </div> */}
        </>
    );
};

export default Banner;

