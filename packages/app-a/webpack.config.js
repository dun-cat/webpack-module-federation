// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require("webpack").container;

const deps = require("./package.json").dependencies;

const isProduction = process.env.NODE_ENV == 'production';


const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        open: true,
        host: 'localhost',
        port: '3001'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "app_a",
            filename: 'a_entry.js',
            exposes: {
                './hooks': "./src/hooks/",
                "./button": "./src/Button.js"
            },
            remotes: {
                "@lumin-ui": 'ui_lib@http://localhost:3003/ui.js',

            },
            shared: {
                react: {
                    requiredVersion: deps.react,
                    singleton: true,
                },
                "react-dom": {
                    requiredVersion: deps['react-dom'],
                    singleton: true,
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
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
