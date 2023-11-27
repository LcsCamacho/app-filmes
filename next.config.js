/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                port: '',
                pathname: '*',
            },
            {
                protocol: 'https',
                hostname: 'cineliso.com',
                port: '',
                pathname: '*',
            },
        ],
        domains: ['res.cloudinary.com', 'picsum.photos', 'cineliso.com'],
        deviceSizes: [320, 420, 768, 1024, 1200],
    }
}

module.exports = nextConfig
