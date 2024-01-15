"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import BrandsData from '@/assests/brands.json';

const MainContext = createContext();

export default function ThemeProvider({ children, user }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [copied, setCopied] = useState('');
    const [search, setSearch] = useState('');

    const brandsArray = [];
    Object.keys(BrandsData).map(key => {
        brandsArray.push(BrandsData[key]);
    });
    const [brands, setBrands] = useState(brandsArray);

    useEffect(() => {
        setBrands(brandsArray.filter(b => b.title.toLowerCase().includes(search)));
    }, [search]);

    // Context data
    const contextData = {
        sitename: 'Brand Colors',
        modalIsOpen, setModalIsOpen,
        brands, setBrands,
        selectedBrands, setSelectedBrands,
        copied, setCopied,
        search, setSearch
    }

    return (
        <MainContext.Provider value={contextData}>
            {children}
        </MainContext.Provider>
    )
}

export {
    MainContext,
    useContext
}