const path = require('path');

// TODO add uglify
module.exports = {
  entry: './src/browser.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'http://localhost:9000',
    filename:'exo-design-system.js',
    jsonpFunction: 'exo-design-system-jsonp'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    modules: ['node_modules'],
    alias: {
      src: path.resolve(__dirname, 'src'),
      mwc: path.resolve(__dirname, 'mwc'),
    }
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