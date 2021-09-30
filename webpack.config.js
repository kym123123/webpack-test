const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let mode = 'development';
let target = 'web';

if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = 'browserslist';
}

module.exports = {
  mode,
  target,
  module: {
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: './dist',
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    assetModuleFilename: 'images/[hash][ext][query]',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new Dotenv(),
    new BundleAnalyzerPlugin(),
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'), // localhost:3001 기본경로
    hot: true,
    port: 3001,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
};
