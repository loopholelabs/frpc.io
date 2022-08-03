/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
const config = require("./current.config.json");

const redirects = [
  {
    source: "/getting-started",
    destination: "/getting-started/overview",
    permanent: false
  },
  {
    source: "/frisbee",
    destination: "/frisbee/overview",
    permanent: false
  },
  {
    source: "/performance",
    destination: "/performance/optimizations",
    permanent: false
  }
]

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:section/:slug",
        destination: `/${config.defaultVersion}/:section/:slug`
      }
    ];
  },
  async redirects() {
    return redirects;
  }
};

module.exports = withContentlayer(nextConfig);
