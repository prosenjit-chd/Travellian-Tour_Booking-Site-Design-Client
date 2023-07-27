import React from 'react';
import StarSVG from './svg/StarSVG';
import StarRatings from 'react-star-ratings';

const Card = ({ data }) => {


    return (
        <div className="bg-[#fff8f1]  rounded-3xl shadow-lg mx-1 mb-5">
            <div className="relative">
                <img
                    src={data.image}
                    alt={data.title}
                    className="rounded-tl-lg rounded-tr-lg w-full"
                />
            </div>
            <div className="mt-2 p-4">
                <h3 className="text-xl font-semibold text-[#767E86]">{data.title}</h3>
                <div className="mt-2">

                    <StarRatings
                        rating={5}
                        starDimension="20px"
                        starRatedColor="#FFC107"
                        starSpacing="2px"
                    />

                </div>
                <p className="text-sm font-medium mt-2 font-rubik">{data.description}</p>
                <div className="flex justify-between w-full items-center mt-4">
                    <div className="flex items-center text-sm font-semibold text-primary">
                        <span className='text-gray-400'>From:</span>
                        <span className="text-2xl font-bold ml-1">{data.price}</span>
                    </div>
                    <button className="bg-primary text-white px-4 py-2 rounded-lg">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
