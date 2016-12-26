module.exports = function(webpackConfig) {
  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.module.loaders.unshift({
    test: /\.(png|jpg)$/,
    loader: 'url?limit=250000'
  });

  return webpackConfig;
};
