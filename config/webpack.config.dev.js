var path = require('path');
var autoprefixer = require('autoprefixer');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
var paths = require('./paths');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    require.resolve('webpack-dev-server/client') + '?/',
    require.resolve('webpack/hot/dev-server'),
    require.resolve('./polyfills'),
    path.join(paths.appSrc, 'index')
  ],
  output: {
    // Next line is not used in dev but WebpackDevServer crashes without it:
    path: paths.appBuild,
    pathinfo: true,
    filename: 'static/js/bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['', '.js', '.json'],
    modules: [paths.appSrc, paths.root, paths.appNodeModules]
  },
  resolveLoader: {
    root: paths.ownNodeModules,
    moduleTemplates: ['*-loader']
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'eslint',
        include: paths.appSrc,
      }
    ],
    loaders: [
      {
        test: /\.js$/,
        include: paths.appSrc,
        loaders: [
          { loader: 'react-hot' },
          {
            loader: 'babel',
            query: require('./babel.dev')
          }
        ]
      },
      {
        test: /\.scss$/,
        include: [paths.appSrc, paths.appNodeModules],
        loader: 'style!css!postcss!resolve-url!sass?sourceMap'
      },
      {
        test: /\.(jpg|png|gif|eot|svg|otf|ttf|woff|woff2)(\?.*)?$/,
        include: [paths.appSrc, paths.appNodeModules, paths.appAssets],
        loader: 'file',
        query: {
          name: 'static/media/[name].[ext]'
        }
      }
    ]
  },
  eslint: {
    configFile: path.join(__dirname, 'eslint.js'),
    useEslintrc: false
  },
  postcss: function() {
    return [autoprefixer];
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
      favicon: paths.appFavicon,
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
    // Note: only CSS is currently hot reloaded
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin()
  ]
};
