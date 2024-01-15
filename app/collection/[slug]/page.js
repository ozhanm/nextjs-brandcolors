import React from 'react';
import Sidebar from '@/components/sidebar';
import Toolbar from '@/components/toolbar';
import Collection from '@/components/collection';
import Modal from '@/components/modal';
import Copied from '@/components/copied';

export default function Collection({ params }) {
    return (
        <>
            <Copied />
            <Sidebar />
            <main className="contents">
                <Toolbar collection={true} />
                <Collection slug={params.slug} />
                <Modal />
            </main>
        </>
    )
}
