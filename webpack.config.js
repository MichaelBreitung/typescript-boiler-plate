const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const projectInfo = require('./projectInfo');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: projectInfo.minifiedLibraryFileName,
    library: projectInfo.minifiedLibraryName,
    libraryTarget: 'var',
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css?$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              injectType: 'singletonStyleTag',
            },
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]_[hash:base64:3]',
              },
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {          
          mangle: {
            properties: {
              regex: /^_/,
            },
          },
          compress: {
            drop_console: true,
          },
        },
      })
    ],
  },
};
