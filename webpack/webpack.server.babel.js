/* eslint-disable import/no-unresolved, global-require */
import nodeExternals from 'webpack-node-externals'
import webpack from 'webpack'

import common, {
  babelLoaderOptions,
  cssLoaderOptions,
  urlLoaderOptions
} from './common'

const isProduction = process.env.NODE_ENV === 'production'

export default {
  name: 'server',
  entry: './src/server',
  target: 'node',
  node: {
    __dirname: false
  },
  output: {
    ...common.output,
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: cssLoaderOptions
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              ...babelLoaderOptions,
              presets: [
                [
                  'env',
                  {
                    targets: {
                      node: true
                    },
                    modules: false
                  }
                ],
                'react'
              ]
            }
          }
        ]
      },
      {
        test: /\.flow$/,
        use: 'null-loader'
      },
      {
        test: /\.graphql$/,
        use: 'raw-loader'
      },
      {
        include: /\.(png|jpeg|jpg|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              ...urlLoaderOptions,
              emitFile: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    ...common.plugins,
    new webpack.DefinePlugin({
      CLIENT_BUNDLE: JSON.stringify(
        isProduction
          ? require('../build/assets.json').client.js
          : '/js/client.js'
      ),
      VENDOR_BUNDLE: JSON.stringify(
        isProduction
          ? require('../build/assets.json').vendor.js
          : '/js/vendor.js'
      ),
      'process.env': {
        PORT: JSON.stringify(process.env.PORT)
      }
    })
  ],
  externals: [nodeExternals()],
  bail: isProduction
}
