const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    // index: './src/index.js',
    app: './src/index.js',
    print: './src/print.js'

  },
  // devtools: 'inline-soure-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    // filename: 'bundle.js',
    filename: '[name].bundle.js',    
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },
    {
      test: /\.(png|svg|jpg|gif)/,
      use: [
        'file-loader'
      ]
    }
  ]
  }
};
