const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader", 
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      },
    ]
  },
  performance: false, // 性能异常提醒
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new CleanWebpackPlugin({
      root: path.resolve(__dirname, '../')
    }, 'dist'),
  ],
  optimization: {
    // mainfast
    // runtimeChunk: {
    //   name: 'runtime'
    // },
    
    //识别package.json中的sideEffects以剔除无用的模块，用来做Tree Shaking
    usedExports: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/node_modules[\\/]/,
          priority: -10,
          name: 'vendors'
        }
      }
    }
  },
  
  output: {
    path: path.resolve(__dirname, '../dist')
  }
}