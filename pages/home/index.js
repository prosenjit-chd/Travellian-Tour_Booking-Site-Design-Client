import Banner from '@/components/Banner';
import Clients from '@/components/Clients';
import Gallery from '@/components/Gallery';
import MyBlog from '@/components/MyBlog';
import PopularDestination from '@/components/PopularDestination';
import SpecialOffer from '@/components/SpecialOffer';
import Trips from '@/components/Trips';
import Layouts from '@/components/layouts/layouts';
import React from 'react';


const index = () => {
    return (
        <>
            <Banner />
            <PopularDestination />
            <SpecialOffer />
            <MyBlog />
            <Trips />
            <Gallery />
            <Clients />


        </>
    );
};

export default index;

index.getLayout = function getLayout(page) {
    return (
        <Layouts>
            {page}
        </Layouts>
    );
};