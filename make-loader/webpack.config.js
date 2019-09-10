const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  resolveLoader: {
    modules: ['node-modules', './loaders']
  },
  module: {
    rules: [{
      test: /\.js/,
      use: [{
        loader: 'replaceLoader',
        options: {
          name: 'hello world'
        }
      }, {
          loader: 'replaceLoaderAsync',
          options: {
            name: 'hello world 111'
          }
      }],
      
    }]
  }
}