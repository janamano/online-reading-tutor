const path = require('path');

// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    devServer: {
      contentBase: [
        path.resolve(__dirname, './src/assets/lib')
      ],
      open: true,
      openPage: '',
      compress: true
    }
  };
};
