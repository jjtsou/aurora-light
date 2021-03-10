const path = require('path');

module.exports = {
  entry: { index: path.resolve(__dirname, 'src', 'index.jsx') },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  stats: 'errors-only',
  resolve: {
    // extensions: ['*', '.js', '.jsx'],
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2)$/,
        use: ['url-loader'],
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    open: true,
    port: 9000,
  },
};
