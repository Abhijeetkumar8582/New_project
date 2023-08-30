const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "img.icons8.com",
      "gartner.com",
      "langoly.com",
      "www.coursera.org",
      "thesparksfoundationsingapore.org",
      "media.licdn.com",
      "logosandtypes.com",
      "www.langoly.com",
      "media.licdn.com",
      "www.thesparksfoundationsingapore.org",
      "img.freepik.com",
      "cdn-icons-png.flaticon.com",
      "randomuser.me"
      
    ]
  },
  distDir: '.next',
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'aos': path.resolve(__dirname, 'node_modules/aos/dist/aos.js'),
    };
    return config;
  },
};

module.exports = nextConfig;
