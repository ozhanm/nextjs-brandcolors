import React from 'react';
import Sidebar from '@/components/sidebar';
import Toolbar from '@/components/toolbar';
import Brands from '@/components/brands';
import Modal from '@/components/modal';
import Copied from '@/components/copied';

export default function BrandColors() {
    return (
        <>
            <Copied />
            <Sidebar />
            <main className="contents">
                <Toolbar />
                <Brands />
                <Modal />
            </main>
        </>
    )
}
