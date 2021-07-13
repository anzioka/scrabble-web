/* eslint-disable */
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks'
  ],
  rules: {
    "no-param-reassign": "off",
    "import/no-named-as-default": "off",
    'comma-dangle': 'off',
    'no-unused-vars': ["warn"],
    "import/order": [
      "warn",
      {
        "groups": ["builtin", "external", "internal", ["parent", "sibling"], "index"]
      }
    ],
    'react/jsx-filename-extension': 'off',
    "react/default-props-match-prop-types": [
      "error",
      {
        "allowRequiredDefaults": true
      }
    ],
    "react/forbid-prop-types": "warn",
    "react/jsx-closing-bracket-location": [
      "error",
      {
        "selfClosing": "after-props",
        "nonEmpty": "after-props"
      }
    ],
    "react/jsx-filename-extension": [
      "warn",
      {
        "extensions": [".js", ".jsx"]
      }
    ],
    "jsx-ally/label-has-associated-control": 'off',
    "react/jsx-indent-props": ["error", 4],
    "react/jsx-one-expression-per-line": "warn",
    "react/no-did-update-set-state": "warn",
    "react/jsx-props-no-spreading": "off",
    "react/prefer-stateless-function": "warn",
    "react/require-default-props": [
      "error",
      {
        "forbidDefaultForRequired": false,
      }
    ],
    'react/forbid-prop-types': 'off',
    'react/prop-types': 0,
    "react/sort-comp": "off",
    "react/state-in-constructor": ["warn", "always"],
    "react/static-property-placement": ["error", "static public field"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/no-array-index-key": 'off',
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  },
};
/* eslint-enable */
