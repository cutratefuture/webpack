const path = require('path')
const common = require('./webpack.common') // config to merge
const { merge } = require('webpack-merge') // merges webpack config files
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  mode: 'development', //set to development to output unminified code
  // devtool: 'inline-cheap-module-source-map', // doesnt wrap code in eval statements
  output: {
    filename: '[name].bundle.js', //ouputs un-minfied bundle
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({ ////generate a new index.html from template
      template: './src/template.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          'style-loader', //3. Inject styles into DOM
          'css-loader', //2. Turns css into commonjs
          'sass-loader', //1. Turns sass into css
        ],
      },
    ],
  },
})
