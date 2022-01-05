// module.exports = {
//   env: {
//     browser: false,
//     es2021: true,
//     mocha: true,
//     node: true,
//   },
//   plugins: ["@typescript-eslint"],
//   extends: [
//     "standard",
//     "plugin:prettier/recommended",
//     "plugin:node/recommended",
//   ],
//   parser: "@typescript-eslint/parser",
//   parserOptions: {
//     ecmaVersion: 12,
//   },
//   rules: {
//     "node/no-unsupported-features/es-syntax": [
//       "error",
//       { ignores: ["modules"] },
//     ],
//   },
// };

module.exports = {
  extends: "next",
  rules: {
    "react/no-unescaped-entities": "off",
    "@next/next/no-page-custom-font": "off",
    "react/jsx-no-target-blank": "off",
    "react-hooks/exhaustive-deps": "off",
    "jsx-a11y/alt-text": "off",
  },
};
