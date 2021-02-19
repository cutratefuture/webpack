module.exports = {
  entry: {
    //entry point can be multiple files
    main: './src/index.js', //The main file has all of our app code
    vendor: './src/vendor.js', // vendor file houses code that is less likely to change, 3rd party libraries
  },
  module: {
    rules: [
      // rules are declared so webpack knows what to look for
      {
        test: /\.html$/i,
        use: {
          loader: 'html-loader', // automatically require the files we reference in img tags
          options: {
            esModule: false,
          },
        },
      },
      {
        test: /\.(svg|png|jpg|gif)$/i,
        use: {
          loader: 'file-loader', // add our images to an imgs directory in dist
          options: {
            name: '[name].[hash].[ext]', // webpack syntax for adding hash to filename
            outputPath: 'imgs',
          },
        },
      },
    ],
  },
}
