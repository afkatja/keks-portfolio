const path = require('path');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config.js');
const webpackDevServer = require('webpack-dev-server');

const options = {
  publicPath: config.output.publicPath,
  contentBase: path.join(__dirname, 'src'),
  hot: true,
  historyApiFallback: true
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(3333, 'localhost', err => {
  if (err) {
    return console.log(err); // eslint-disable-line no-console
  }

  console.log('Listening at localhost:3333'); // eslint-disable-line no-console
});
