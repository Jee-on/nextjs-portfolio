module.exports = {
  "trailingComma": "es5",
  "semi": true,
  "singleQuote": false,
  "jsxSingleQuote": false,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "bracketSpacing": true,
  "bracketSameLine": true,
  "arrowParens": "always",
  "endOfLine": "auto",
  "importOrder": ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
  "importOrderSeparation": true,
  "importOrderSortSpecifiers": true,
  "plugins": ["@trivago/prettier-plugin-sort-imports"]
};
