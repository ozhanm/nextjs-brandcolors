"use client";

import React, { useEffect } from 'react';
import { MainContext, useContext } from '@/app/context';
import LazyLoad from 'react-lazyload';
import Brand from '@/components/brand';
import Loading from '@/components/brand/loadingg';
import { notFound } from 'next/navigation';

export default function BrandPage({ slug }) {
    const { brands, setSelectedBrands } = useContext(MainContext);

    useEffect(() => {
        setSelectedBrands([slug]);
    }, []);

    const brand = brands.find(b => b.slug === slug);
    if (!brand)
        notFound();

    return (
        <div className="brands">
            {brand && (
                <LazyLoad once={true} placeholder={<Loading />}>
                    <Brand brand={brand} detailPage={true} />
                </LazyLoad>
            )}
        </div>
    )
}
