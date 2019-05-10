import fs from "fs";
const babel = require("@babel/core");

const withBabelLoader = {
  test: /\.js$/,
  loader: "babel-loader",
  include: [
    path.resolve(buildPaths.rootPath),
    fs.realpathSync(path.resolve(buildPaths.srcPath))
  ],
  exclude: [path.join(__dirname, "/node_modules")],
  options: {
    presets: [
      [
        "@babel/preset-env",
        {
          modules: false,
          useBuiltIns: "entry",
          targets: {
            ie: "11"
          }
        }
      ],
      "@babel/preset-react"
    ],
    plugins: [
      "@babel/plugin-proposal-class-properties",
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-proposal-object-rest-spread"
    ]
  }
};
module.exports = {
  process(src) {
    const transformCfg = withBabelLoader.options;
    transformCfg.plugins.push("transform-es2015-modules-commonjs");
    transformCfg.compact = true;
    return babel.transform(src, transformCfg).code;
  }
};
