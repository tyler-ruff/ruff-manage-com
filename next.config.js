/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedOrigins: ['ruff-manage.com', '*.ruff-manage.com', 'rtmtransit-com.vercel.app'],
        },
    }
}

module.exports = nextConfig
