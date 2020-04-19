module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'comma-dangle': ['error', 'never'],
    'no-use-before-define': 'off',
    'no-undef': 'off',
    'quotes': ['error', 'double'],
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading' : 'off',
    'react/prop-types': 'off',
  },
  'globals': {
    "fetch": false
  }
}
