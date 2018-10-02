const path = require('path');

// TODO add uglify
module.exports = {
  entry: './src/browser.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:9000',
    filename:'exo-design-system.js', //TODO add version
    jsonpFunction: 'exo-design-system-jsonp'// TODO add version
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  plugins: []
};