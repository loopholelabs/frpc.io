/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");
const config = require("./current.config.json");

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:section/:slug",
        destination: `/${config.defaultVersion}/:section/:slug`,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: `${config.defaultRedirect}`,
        permanent: false,
      },
    ];
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

module.exports = withContentlayer(nextConfig);
