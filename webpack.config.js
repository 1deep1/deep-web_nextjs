
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './foo.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'foo.bundle.js',
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.node = {
          fs: 'empty'
        }
        return config
      },
};