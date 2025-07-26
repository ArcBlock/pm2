const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: {
        ...globals.node,
        ...globals.commonjs
      }
    },
    rules: {
      // 关闭所有格式化相关的规则
      'indent': 'off',
      'linebreak-style': 'off',
      'quotes': 'off',
      'semi': 'off',
      'comma-dangle': 'off',
      'key-spacing': 'off',
      'keyword-spacing': 'off',
      'space-before-blocks': 'off',
      'space-before-function-paren': 'off',
      'space-in-parens': 'off',
      'space-infix-ops': 'off',
      'space-unary-ops': 'off',
      'spaced-comment': 'off',
      'no-multi-spaces': 'off',
      'no-multiple-empty-lines': 'off',
      'no-trailing-spaces': 'off',
      'no-mixed-spaces-and-tabs': 'off',
      'no-whitespace-before-property': 'off',
      'object-curly-spacing': 'off',
      'array-bracket-spacing': 'off',
      'computed-property-spacing': 'off',
      'func-call-spacing': 'off',
      'block-spacing': 'off',
      'brace-style': 'off',
      'comma-spacing': 'off',
      'arrow-spacing': 'off',
      'generator-star-spacing': 'off',
      'yield-star-spacing': 'off',
      'template-curly-spacing': 'off',
      'template-tag-spacing': 'off',
      'switch-colon-spacing': 'off',
      'rest-spread-spacing': 'off',
      'padding-line-between-statements': 'off',
      'lines-between-class-members': 'off',
      'function-paren-newline': 'off',
      'implicit-arrow-linebreak': 'off',
      'lines-around-comment': 'off',
      'lines-around-directive': 'off',
      'multiline-ternary': 'off',
      'newline-per-chained-call': 'off',
      'nonblock-statement-body-position': 'off',
      'object-curly-newline': 'off',
      'object-property-newline': 'off',
      'operator-linebreak': 'off',
      'padded-blocks': 'off',
      'unicode-bom': 'off',
      'wrap-regex': 'off',
      'wrap-iife': 'off',

      // 只保留关键的代码错误检查
      'no-undef': 'error',        // 未定义变量错误
      'no-dupe-keys': 'error',    // 对象中重复的键
      'no-unreachable': 'error',  // 不可达代码
      'valid-typeof': 'error',    // typeof 比较
      'no-const-assign': 'error', // const 重新赋值
      'no-this-before-super': 'error', // 在 super() 之前使用 this
      'no-dupe-class-members': 'error', // 类中重复成员

      // 其他规则全部关闭
      'no-unused-vars': 'off',
      'no-console': 'off',
      'no-redeclare': 'off',
      'no-empty': 'off',
      'no-prototype-builtins': 'off',
      'no-useless-escape': 'off',
      'no-irregular-whitespace': 'off',
      'no-control-regex': 'off',
      'no-misleading-character-class': 'off',
      'no-global-assign': 'off'
    }
  }
]; 