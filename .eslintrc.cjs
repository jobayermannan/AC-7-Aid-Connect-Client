module.exports = {
  root: true,
    "extends": ["plugin:@typescript-eslint/recommended"],
    "rules": {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "unused-imports/no-unused-imports": "warn"
    },
    "plugins": ["unused-imports"]
  
}
