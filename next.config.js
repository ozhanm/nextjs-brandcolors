/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
    // output: 'export',
    basePath: process.env.NEXT_PUBLIC_BASE_URL,
    trailingSlash: false,
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}

module.exports = nextConfig