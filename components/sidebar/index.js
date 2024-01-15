"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MainContext, useContext } from '@/app/context';

export default function Sidebar() {
    const { setModalIsOpen } = useContext(MainContext);

    return (
        <header className="sidebar">
            <div className="logo">
                <Link href="/">
                    <Image src="/logo.png" alt="BrandColors" width="40" height="40" unoptimized />
                    Brand<b>Colors</b>
                </Link>
            </div>
            <div className="description">The biggest collection of official brand color codes around. Curated by @brandcolors and friends.</div>
            <div className="about" onClick={() => setModalIsOpen(true)}>About BrandColors</div>
        </header>
    )
}
