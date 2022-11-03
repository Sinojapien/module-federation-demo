const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
// const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("../package.json").dependencies;

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          // necessary if webpack / babel is not present is remote
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "host",
      library: { type: "var", name: "host" },
      filename: "remoteEntry.js",
      remotes: {
        host: "host",
      },
      exposes: {
        "./Header": "../src/components/Header",
        "./Footer": "../src/components/Footer",
        "./CustomLink": "../src/components/CustomLink",
        "./CustomCounter": "../src/components/CustomCounter",
      },
      shared: {
        ...deps,
        // react: {
        //   singleton: true,
        //   requiredVersion: deps.react,
        // },
        // "react-dom": {
        //   singleton: true,
        //   requiredVersion: deps["react-dom"],
        // },
      },
    }),
  ],
};
