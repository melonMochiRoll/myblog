const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: "inline-source-map",
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.json',
    ],
    alias: {
      Src: path.resolve(__dirname, 'src/'),
      Pages: path.resolve(__dirname, 'src/pages/'),
      Styles: path.resolve(__dirname, 'src/styles/'),
    },
  },
  entry: './src/client.tsx',
  output: {
    filename: 'client.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              ['@babel/preset-react'],
              ['@babel/preset-typescript'],
            ],
          }
        }
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    open: true,
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
};