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
  devtool: 'cheap-module-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3333',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'client', 'main.js')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js|jsx?$/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            }
          }
        ],
        include: path.join(__dirname, 'src')
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
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
  ],
  devServer: {
    publicPath: '/',
    contentBase: path.join(__dirname, 'src'),
    compress: true,
    port: 3333,
    hot: true,
    historyApiFallback: true
  },
}

module.exports = devConfig;
