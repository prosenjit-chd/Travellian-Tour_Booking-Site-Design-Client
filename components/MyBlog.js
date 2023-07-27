import Layouts from '@/components/layouts/layouts';
import React from 'react';
import blogImage from '../public/customImage/4-block.png';
import Image from 'next/image';
import Link from 'next/link';
import RightArrowSVG from '@/components/svg/RightArrowSVG';


const MyBlog = () => {
    return (
        <div className="min-h-screen">
            <div className="container mx-auto my-24">
                <h1 className="text-4xl font-semibold text-slate-600">
                    Our Blog
                </h1>
                <div className='h-1 w-24 border-b-2 border-primary'>

                </div>
                <p className="text-lg text-zinc-500 mt-4">
                    An insight into the incredible experience in the world
                </p>

                <div className="mt-12 grid grid-cols-6 gap-4 items-center">
                    <div className="flex col-span-2">
                        <img
                            src={blogImage.src}
                            alt="Blog Image"
                            className="rounded-lg w-[450px]"
                        />
                        {/* <Image width={300} height={300} src="/customImage/4-block.png" /> */}
                    </div>

                    <div className="col-span-4">

                        <h2 className="text-slate-600 text-3xl font-medium">Beautiful Italy</h2>
                        <h2 className="text-slate-600 text-3xl font-medium">Let’s travel</h2>
                        <p className="text-base font-medium mt-4 leading-7">
                            But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and
                            I will give you a complete account of the system and expound the actual teachings of the great explorer of
                            the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself,
                            because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter
                            consequences that are extremely painful. Nor again is there anyone who loves or pursues.
                        </p>
                        <div className="flex items-center mt-4">
                            <Link href="/home" className="text-primary py-2 text-base font-normal" aria-current="page">
                                <div className="flex items-center space-x-2 fill-primary text-base font-normal">
                                    <span>Read More</span>
                                    <RightArrowSVG />
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBlog;

MyBlog.getLayout = function getLayout(page) {
    return (
        <Layouts>
            {page}
        </Layouts>
    );
};