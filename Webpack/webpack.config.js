const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, {mode}) => {
  return {
    devtool: false,
    entry: './src/ts/index',
    output: {
      filename: mode === 'production' ? 'app.[chunkhash].js' : 'app.js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      })
    ],
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
        }
      ]
    },
    resolve: {
      extensions: [ '.ts', '.js' ]
    },
  };
};
