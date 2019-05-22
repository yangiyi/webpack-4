const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development', 
  devtool: 'cheap-module-inline-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    port:8080,
    hot: true,
    // hotOnly: true
  },
  
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  //识别package.json中的sideEffects以剔除无用的模块，用来做Tree Shaking
  optimization: {
    usedExports: true
  }
}

module.exports = merge(commonConfig, devConfig);