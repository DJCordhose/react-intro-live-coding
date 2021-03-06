const path = require('path');

// const mainJs = path.resolve(__dirname, 'src/step-1/client/main.js');
// const mainJs = path.resolve(__dirname, 'src/step-1-typed/client/main.js');
// const mainJs = path.resolve(__dirname, 'src/step-2-typed/client/main.js');
const mainJs = path.resolve(__dirname, 'src/step-3/client/main.js');

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

