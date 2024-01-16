"use client";

import React from 'react';
import { MainContext, useContext } from '@/app/context';

export default function Modal() {
    let { modalIsOpen, setModalIsOpen } = useContext(MainContext);
    const modalClass = modalIsOpen ? 'active' : '';
    
    return (
        <div className={`modal ${modalClass}`}>
            <div className="modal-container">
                <span className="closebtn" onClick={() => setModalIsOpen(!modalIsOpen)}></span>
                <h1>About BrandColors</h1>
                <p>BrandColors was created by <b>DesignBombs</b>. The goal was to create a helpful reference for the brand color codes that are needed most often.</p>
                <p>It is been featured by Smashing Magazine, CSS-Tricks, Web Design Depot, Tuts+, and over <b>2 million pageviews</b>. There are now over <b>600 brands</b> with <b>1600 colors</b> and the collection is always growing.</p>
            </div>
        </div>
    )
}
