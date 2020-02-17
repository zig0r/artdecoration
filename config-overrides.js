module.exports = function override(config) {
  config.module.rules[2].oneOf.unshift({
    type: 'json',
    test: /\.ya?ml$/,
    use: [
      { loader: require.resolve('xyaml-webpack-loader') }
    ],
  });

  // console.dir(config.module.rules)
  // throw 'test'

  return config;
}