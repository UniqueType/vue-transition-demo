module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add global variable
  globals: {
    "document": false,
    "window": false,
    "location": false,
    "User": false,
    "App": false,
    "util": false,
    "sessionStorage": false,
    "localStorage": false
  },
  // add your custom rules here
  'rules': {
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,

    // Custom rule add by King
    "indent": ["warn", 4],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "prefer-const": ["warn", {
        "destructuring": "any",
        "ignoreReadBeforeAssign": false
    }],
    "comma-dangle": [
      "error", 
      {
        "arrays": "never",
        "objects": "never",
        "imports": "never",
        "exports": "never",
        "functions": "never",
    }],
    "max-len": ["warn", 2000],
    "global-require": "off",
    "import/no-dynamic-require": "off",
    "no-console": ["off", { allow: ["warn", "error"] }],
  },
  default_line_ending:"system"
}
