import React from 'react';
import Sidebar from '@/components/sidebar';
import Toolbar from '@/components/toolbar';
import Modal from '@/components/modal';
import BrandPage from '@/components/brand-page';
import Copied from '@/components/copied';

export default function Collection({ params }) {
    return (
        <>
            <Copied />
            <Sidebar />
            <main className="contents">
                <Toolbar collection={true} />
                <BrandPage slug={params.slug} />
                <Modal />
            </main>
        </>
    )
}
