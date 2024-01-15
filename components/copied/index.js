"use client";

import { MainContext } from '@/app/context';
import React, { useContext, useEffect } from 'react';
import { getContrastYIQ } from "@/libs/functions";

export default function Copied() {
    const { copied, setCopied } = useContext(MainContext);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCopied('');
        }, 2000);

        return () => {
            clearTimeout(timeout)
        }
    }, [copied])

    const color = copied.replace('#', '');
    const copiedClass = copied ? 'copied active' : 'copied';

    return (
        <div className={copiedClass} style={{ '--bgColor': `#${color}`, '--textColor': `${getContrastYIQ(color)}` }}>
            Copied <b>{copied}</b> to clipboard.
        </div>
    )
}
