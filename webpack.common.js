const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production',
      template: path.join(__dirname, 'public/index.html'),
      filename: 'index.html',
      inject: 'body',
    }),
    new Dotenv(),
  ],
  entry: './src/client/index.tsx',
  resolve: { extensions: ['*', '.js', '.jsx', '.ts', '.tsx'] },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /(node_modules)/,
        loader: ['ts-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      // {
      //   test: /\.ts(x?)$/,
      //   exclude: /node_modules/,
      //   loader: 'eslint-loader',
      // },
    ],
  },
  output: {
    // filename: 'main.js',
    // publicPath: "dist/",
    path: path.resolve(__dirname, 'dist'),
  },
};
