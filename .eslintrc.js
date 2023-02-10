module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: [
    //vue
    //'plugin:vue/vue3-essential',
    'plugin:vue/vue3-strongly-recommended',
    //'plugin:vue/vue3-recommended', --제일엄격한 권장코드규칙
    //js
    'eslint:recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: { 
      "vue/html-closing-bracket-newline": ["error", {
        "singleline": "never",
        "multiline": "never"
      }],
      "vue/html-self-closing": ["error", {
        "html": {
          "void": "always",
          "normal": "never",
          "component": "always"
        },
        "svg": "always",
        "math": "always"
      }],
      "vue/multi-word-component-names": 0, //두개이상단어를 조합하지 않을경우 생기는 오류를 없는걸로함.
      
    
  }
}