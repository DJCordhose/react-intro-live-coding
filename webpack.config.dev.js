const path = require('path');

// adapt step here
const mainJs = path.resolve(__dirname, 'src/step0/client/main.js');
const outputPath = path.resolve(__dirname, 'public/dist');

module.exports = {
  devtool: 'source-map',
  entry:   [
    mainJs
  ],
  output:  {
    path:       outputPath,
    filename:   'app.js',
    publicPath: '/dist'
  },
  module:  {
    loaders: [
      {
        test:    /\.jsx?/,
        loader:  'babel',
        exclude: /node_modules/
      },
      {
        test:    /\.jsx?$/,
        exclude: /node_modules/,
        loader:  'eslint'
      }
    ]
  }
};

