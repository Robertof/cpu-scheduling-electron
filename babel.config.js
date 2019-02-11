module.exports = function (api) {
  const environment = api.env()
  const presets = [['@babel/env']]
  const plugins = [['@babel/plugin-transform-runtime', {
    helpers: false
  }]]

  switch (environment) {
  case 'main':
    presets[0].push ({
      targets: { node: 7 }
    })
  //eslint-disable-next-line
  case 'renderer':
  case 'web':
    // api.cache (true)
    presets[0].push ({
      modules: false
    })
    plugins.push ('@babel/plugin-proposal-class-properties')
    break
  default:
    console.error ('babel.config.js: Unknown environment: %s', environment)
  }

  return {
    presets,
    plugins
  }
}
