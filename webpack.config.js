const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const TwilightWatcherPlugin = require('@salla.sa/twilight/watcher');

module.exports = (env, argv) => {
  const isProduction = argv.mode === 'production';

  return {
    entry: {
      app: ['./src/assets/styles/app.scss', './src/assets/js/app.js'],
      home: './src/assets/js/home.js',
      product: './src/assets/js/product.js',
      checkout: './src/assets/js/checkout.js',
    },
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: '[name].js',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { targets: '> 0.25%, not dead' }]],
            },
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]',
          },
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src/assets/images'),
            to: path.resolve(__dirname, 'public/images'),
            noErrorOnMissing: true,
          },
        ],
      }),
      new TwilightWatcherPlugin(),
    ],
    optimization: {
      minimizer: ['...', new CssMinimizerPlugin()],
    },
    devtool: isProduction ? false : 'source-map',
  };
};
