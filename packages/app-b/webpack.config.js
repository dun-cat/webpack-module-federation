// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;
const isProduction = process.env.NODE_ENV == 'production';


const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: '3002'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app_b",
      filename: 'b_entry.js',
      remotes: {
        "@lumin-ui": 'ui_lib@http://localhost:3003/ui.js',
      },

    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      }
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';


  } else {
    config.mode = 'development';
  }
  return config;
};
