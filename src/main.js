import { createApp } from 'vue'
import App from './App'
import router from './routes' //특정한 폴더안에 index.js라는 이름은 생략가능하다.즉 './routes'는 './routes.index.js' 와 동일하다
import store from './store'
import loadImage from './plugins/loadImage'

createApp(App)
  .use(router) //use는 특정한 플러그인(라이브러리)을 연결할때 사용하는 메쏘드
  .use(store)
  .use(loadImage) //$loadImage로 사용가능
  .mount('#app')