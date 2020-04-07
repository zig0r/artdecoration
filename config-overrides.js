module.exports = function override(config) {
  config.resolve.alias['@'] = `${__dirname}/src`;
  config.module.rules[2].oneOf.unshift({
    type: 'json',
    test: /\.ya?ml$/,
    use: [
      {
        loader: require.resolve('xyaml-webpack-loader'),
        query: {
          markdown: {
            use: {
              'markdown-it-container': ['image']
            }
          }
        }
      }
    ],
  });

  return config;
}