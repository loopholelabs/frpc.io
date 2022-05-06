/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
const Config = require("./current.config.json");

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:section/:slug",
        destination: `/${Config.defaultVersion}/:section/:slug`,
      },
    ];
  },
};

module.exports = withContentlayer(nextConfig);
