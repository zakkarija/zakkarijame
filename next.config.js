/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import('next').NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nakv6s9tvu.ufs.sh',
        pathname: '/f/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.svgporn.com',
        pathname: '/logos/**',
      },
      {
        protocol: 'https',
        hostname: 'svgl.app',
        pathname: '/library/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.svgrepo.com',
        pathname: '/show/**',
      },
    ],
  },
};

export default config;
