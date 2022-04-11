const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const { common } = require('./config.common');

module.exports = {
  ...common,
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    port: 8081,
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: './index.html',
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: './assets/styles/[name].css',
    }),
    new Dotenv()
  ],
}

