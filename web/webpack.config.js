const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '..', 'index.web.js'),
  output: { filename: 'bundle.js' },
  module: {
    rules: [{
      test: /\.js$/,
      include: path.resolve(__dirname, '..', 'src'),
      loader: 'babel-loader',
    }],
  },
  resolve: {
    alias: { 'react-native': 'react-native-web' },
  },
};
