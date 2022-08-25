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
    source: "/performance",
    destination: "/performance/optimizations",
    permanent: false
  },
  {
    source: "/reference",
    destination: "/reference/overview",
    permanent: false
  },
  {
    source: "/frisbee",
    destination: "/frisbee/overview",
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
      },
      {
        source: "/bear.js",
        destination: "https://cdn.panelbear.com/analytics.js"
      }
    ];
  },
  async redirects() {
    return redirects;
  },
  env: {
    PASSWORD: process.env.PASSWORD,
    PANELBEAR: process.env.PANELBEAR
  }
};

module.exports = withContentlayer(nextConfig);
