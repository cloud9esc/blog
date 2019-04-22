const cssLoaderConfig = require('@zeit/next-css/css-loader-config');

module.exports = {
  webpack(config, options) {
    const { dev, isServer } = options

    options.defaultLoaders.sass = cssLoaderConfig(config, {
      extensions: ['scss', 'sass', 'css'],
      dev,
      isServer,
      loaders: [
        {
          loader: 'sass-loader',
          options: {}
        }
      ]
    })

    config.module.rules.push(
      {
        test: /\.scss$/,
        use: options.defaultLoaders.sass
      },
      {
        test: /\.sass$/,
        use: options.defaultLoaders.sass
      },
      {
        test: /\.css$/,
        use: options.defaultLoaders.sass
      }
    )

    return config
  }
}