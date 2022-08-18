/*
 * @Author: hly
 * @Date: 2022-08-17 16:29:38
 * @LastEditors: hly
 * @LastEditTime: 2022-08-17 17:15:44
 * @Description:
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  globals: {
    ga: true,
    chrome: true,
    __DEV__: true
  },
  // 解析 .vue 文件
  parser: 'vue-eslint-parser',
  extends: [
    'plugin:json/recommended',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/prettier'
  ],
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser' // 解析 .ts 文件
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': 'error',
    "linebreak-style": [
      2,
      "unix"
    ]
  }
}