const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const clientPath = './Client/';
const serverPath = './Server/';

module.exports = {
  mode: 'production',
  entry: {
    index: `${clientPath}/src/index.js`,
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      Reducers: path.resolve(__dirname, `${clientPath}/src/reducers/`),
      Components: path.resolve(__dirname, `${clientPath}/src/components/`),
    },
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(html)$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      meta: {
        viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
        // Will generate: <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        'theme-color': '#4285f4',
        // Will generate: <meta name="theme-color" content="#4285f4">
      },
      hash: true,
      title: 'React App',
      template: `${clientPath}/src/index.html`,
      filename: './index.html',
    }),
  ],
};
