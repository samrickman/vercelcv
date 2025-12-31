/** @type {import('next').NextConfig} */
import { withContentlayer } from 'next-contentlayer';

const nextConfig = {
  experimental: {
    turbo: false,
  },
};

export default withContentlayer(nextConfig);
