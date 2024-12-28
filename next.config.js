/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedOrigins: ['rtmtransit.com', '*.rtmtransit.com', 'rtmtransit-com.vercel.app'],
        },
    }
}

module.exports = nextConfig
