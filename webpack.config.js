const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')


module.exports = {
  resolve: {
    extensions: ['.js', '.vue'], //확장자를 생략할수 있는 옵션
    alias: { //경로별칭 :해당하는 폴더로 바로 이동
      '~': path.resolve(__dirname, 'src'),
      'assets': path.resolve(__dirname, 'src/assets')
    }
  },

  entry: './src/main.js', //어디에서부터 파일을 읽는지(경로,주의점은 js를 경로로 한다.)
  output: { //결과물을 반환하는 설정, 주석처리해도 같은 결과가 나오는건 디폴트로 설정되어있어서임. 
    // path: path.resolve(__dirname, 'dist'), //상대경로는 읽지 못하기때문에 절대경로로 해줘야한다.
    // filename: 'main.js',
    clean: true
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.s?css$/,
        use: [ //순서가 중요함
          'vue-style-loader',
          //'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              additionalData: '@import "~/scss/main";'
            }
          }
        ]
      },
      {
        test:/\.js$/,
        exclude: /node_modules/, //제외할 경로
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpg?e|gif|webp)$/,
        use: 'file-loader'
      }
    ]
  },
  
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        { from: 'static' }
      ]
    }),
    new VueLoaderPlugin()
  ]
}