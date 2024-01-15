"use client";

import React from 'react';
import { MainContext, useContext } from '@/app/context';
import LazyLoad from 'react-lazyload';
import Brand from '@/components/brand';
import Loading from '@/components/brand/loadingg';

export default function Brands() {
    const { brands } = useContext(MainContext);

    return (
        <div className="brands">
            {brands && (
                brands.map((brand, index) => (
                    <LazyLoad key={index} once={true} placeholder={<Loading />}>
                        <Brand brand={brand} />
                    </LazyLoad>
                ))
            )}
        </div>
    )
}
