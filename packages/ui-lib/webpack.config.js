// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;
const deps = require("./package.json").dependencies;

const isProduction = process.env.NODE_ENV == 'production';


const config = {
  entry: './src/index.js',
  output: {
    // publicPath: 'auto',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '@lumin-ui/components': path.resolve(__dirname, './src/components/index.js')
    }
  },
  devServer: {
    open: true,
    host: 'localhost',
    port: '3003'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "ui_lib",
      filename: 'ui.js',
      exposes: {
        "./components": "./src/components/",
      },
      shared: {
        ...deps,
        react: {
          requiredVersion: deps.react,
          singleton: true,
        },
        "react-dom": {
          requiredVersion: deps['react-dom'],
          singleton: true,
        }
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
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
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
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
