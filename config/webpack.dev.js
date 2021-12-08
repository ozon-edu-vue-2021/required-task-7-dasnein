const path = require('path');

const { merge } = require('webpack-merge');
const webpack = require('webpack');

const baseConfig = require('./webpack.config');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: false,
  watch: true,
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    static: [
      {
        directory: path.join(__dirname, '../dist'),
      },
      {
        directory: path.join(__dirname, '../static'),
      },
    ],
    compress: true,
    port: 8080,
  },
});
