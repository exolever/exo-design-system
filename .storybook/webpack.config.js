const path = require("path");
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts)$/,
    loader: require.resolve("awesome-typescript-loader")
  });
  config.resolve.alias = {
    ...config.resolve.alias,
    "src": path.resolve(__dirname, '../src/'),
  }
  config.resolve.extensions.push('.ts', '.tsx');
  console.log(config.resolve);
  return config;
};