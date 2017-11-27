const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const path = require('path');
// Import plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Configure plugins
const HtmlWebpackPluginConfig= new HtmlWebpackPlugin({
  template: path.join(__dirname, 'src', 'index.html'),
  filename: 'index.html',
});

const devConfig = {
  entry: path.join(__dirname, 'src', 'client', 'main.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'resolve-url-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 3333
  },
}

module.exports = devConfig;
