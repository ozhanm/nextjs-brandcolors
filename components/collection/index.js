"use client";

import React, { useEffect } from 'react';
import { MainContext, useContext } from '@/app/context';
import LazyLoad from 'react-lazyload';
import Brand from '@/components/brand';
import Loading from '@/components/brand/loadingg';

export default function Collection({ slug }) {
    const { brands, setSelectedBrands } = useContext(MainContext);

    const slugs = slug.replaceAll('%2C', ',').split(',');

    useEffect(() => {
        setSelectedBrands(slugs);
    }, [slugs]);

    return (
        <div className="brands">
            {slugs && (
                slugs.map((ss, index) => {
                    const brand = brands.find(b => b.slug === ss);
                    if (brand) {
                        return (
                            <LazyLoad key={index} once={true} placeholder={<Loading />}>
                                <Brand brand={brand} />
                            </LazyLoad>
                        )
                    }
                })
            )}
        </div>
    )
}
