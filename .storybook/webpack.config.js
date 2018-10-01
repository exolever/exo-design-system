const path = require("path");
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve("awesome-typescript-loader")
  });
  return config;
};