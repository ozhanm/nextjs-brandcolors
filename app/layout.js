import { Roboto_Slab as siteFont } from 'next/font/google';
import "@/styles/reset.css";
import "@/styles/global.css";
import "@/styles/site.scss";

import ThemeProvider from './context';

const font = siteFont({
    display: 'swap',
    subsets: ['latin'],
    style: ['normal'],
    weight: ['300', '400', '500', '600', '700', '800', '900']
})

export const metadata = {
    title: 'Brand Colors',
    description: 'Brand colors app',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_URL}/favicon.ico`} sizes="any" />
            </head>
            <body className={font.className}>
                <ThemeProvider>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
