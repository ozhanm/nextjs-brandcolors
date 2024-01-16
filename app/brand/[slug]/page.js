import React from 'react';
import Sidebar from '@/components/sidebar';
import Toolbar from '@/components/toolbar';
import Modal from '@/components/modal';
import BrandDetail from '@/components/brand-page';
import Copied from '@/components/copied';

export default function BrandPage({ params }) {
    return (
        <>
            <Copied />
            <Sidebar />
            <main className="contents">
                <Toolbar collection={true} />
                <BrandDetail slug={params.slug} />
                <Modal />
            </main>
        </>
    )
}
