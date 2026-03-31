const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ThemeWatcher = require('@salla.sa/twilight/watcher.js');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

const asset = (file) => path.resolve('src/assets', file || '');
const dist = (file) => path.resolve('public', file || '');

module.exports = {
  entry: {
    app: [asset('styles/app.scss'), asset('js/app.js')],
    home: asset('js/home.js'),
    checkout: asset('js/checkout.js'),
    product: asset('js/product.js'),
  },
  output: {
    path: dist(),
    clean: true,
  },
  stats: { modules: false, assetsSort: 'size', assetsSpace: 50 },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: 'css-loader', options: { url: false } },
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new ThemeWatcher(),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
      patterns: [{ from: asset('images'), to: dist('images') }],
    }),
  ],
  optimization: {
    minimizer: ['...', new CssMinimizerPlugin()],
  },
};
