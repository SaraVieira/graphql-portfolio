import path from 'path'
import webpack from 'webpack'

const isProduction = process.env.NODE_ENV === 'production'

export const babelLoaderOptions = {
  cacheDirectory: !isProduction,
  plugins: [
    'transform-object-rest-spread',
    ...(isProduction && ['transform-react-remove-prop-types'])
  ]
}

export const cssLoaderOptions = {
  minimize: isProduction
}

export const urlLoaderOptions = {
  limit: 10000,
  name: `media/[name]${isProduction ? '.[hash:8]' : ''}.[ext]`
}

export default {
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: '/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    ...(isProduction && [
      new webpack.optimize.UglifyJsPlugin({ comments: false })
    ])
  ]
}
