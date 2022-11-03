/** @type {import('next').NextConfig} */
const NextFederationPlugin = require("@module-federation/nextjs-mf");

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    // const { webpack } = options;
    // Object.assign(config.experiments, { topLevelAwait: true });
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: "host",
          library: {
            type: config.output.libraryTarget,
            name: "host",
          },
          remotes: {
            host: `host@http://localhost:3000/_next/static/chunks/remoteEntry.js`,
          },
          filename: "static/chunks/remoteEntry.js",
          exposes: {
            "./CustomCounter": "./src/components/CustomCounter.js",
            "./CustomLink": "./src/components/CustomLink.js",
          },
          shared: {
            // whatever else
          },
        })
      );
    }

    return config;
  },
};

module.exports = nextConfig;
