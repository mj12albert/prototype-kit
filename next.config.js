/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  env: {},

  webpack: (config) => {
    const rules = config.module.rules.find(
      (rule) => rule.test && rule.test.test(".svg")
    );

    rules.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve("@svgr/webpack")
    });

    return config;
  },

  poweredByHeader: false
};

module.exports = nextConfig;
