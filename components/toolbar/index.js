"use client";

import React, { useEffect, useState } from 'react';
import { MainContext, useContext } from '@/app/context';
import { useRouter } from 'next/navigation';

export default function Toolbar({ collection }) {
    const router = useRouter();
    const { setSearch, selectedBrands, setSelectedBrands, brands } = useContext(MainContext);
    const [downloadLink, setDownloadLink] = useState('');
    const [downloadType, setDownloadType] = useState('css');

    useEffect(() => {
        if (selectedBrands.length > 0) {
            let output = '';
            output += (downloadType == 'css') ? ':root {\n' : '';
            selectedBrands.map(slug => {
                let brand = brands.find(b => b.slug === slug);
                if (brand) {
                    brand.colors.map((color, key) => {
                        switch (downloadType) {
                            case 'css':
                                output += `--${slug}-${key}: #${color};\n`;
                                break;

                            case 'scss':
                                output += `\$${slug}-${key}: #${color};\n`;
                                break;

                            case 'less':
                                output += `@${slug}-${key}: #${color};\n`;
                                break;
                        }
                    });
                }
            });
            output += (downloadType == 'css') ? '}' : '';

            const blob = new Blob([output]);
            const url = URL.createObjectURL(blob);
            setDownloadLink(url);
            return () => {
                URL.revokeObjectURL(url);
                setDownloadLink('');
            }
        }
    }, [selectedBrands, downloadType]);

    const handleGoBack = () => {
        setSelectedBrands([]);
        router.push('/');
    }

    return (
        <div className="toolbar">
            {collection ? (
                <div className="goback" onClick={handleGoBack}>All Brands</div>
            ) : (
                <div className="search">
                    <input type="search" placeholder="Search brands..." onChange={(e) => setSearch(e.target.value)} />
                </div>
            )}
            <div className={`buttons ${selectedBrands.length > 0 ? '' : 'noselected'}`}>
                <div className="download">
                    {downloadLink && (
                        <a href={downloadLink} download={`brand-color.${downloadType}`}></a>
                    )}
                    <select onChange={(e) => setDownloadType(e.target.value)}>
                        <option value="css">CSS</option>
                        <option value="scss">SCSS</option>
                        <option value="less">LESS</option>
                    </select>
                </div>
                <div className="link" onClick={() => router.push(`/collection/${selectedBrands.join(',')}`)}></div>
                <div className="clear" onClick={() => setSelectedBrands([])}></div>
                <div className="selected">{selectedBrands.length} brands collected</div>
                <div className="allbrands">All Brands</div>
            </div>
        </div>
    )
}
