/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'placebeard.it',
				port: '',
				pathname: '/**',
			},
		],
	},
}

export default nextConfig
