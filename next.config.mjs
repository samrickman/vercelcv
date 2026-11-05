/** @type {import('next').NextConfig} */
import { withContentlayer } from 'next-contentlayer';

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/guess-who',
        destination: '/guess-who/index.html',
      },
    ];
  },
};

export default withContentlayer(nextConfig);
