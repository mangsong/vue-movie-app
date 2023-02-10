import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './Home'
import Movie from './Movie'
import About from './About'
import NotFound from './NotFound'

export default createRouter ({
  //Hash,History 모드 두개가 있음(히스토리모드는 서버에 세팅을 해야하기때문에)
  //Hash모드는 https://google.com/#/search <- 같이 #/을 써서 주소로 접근하는 방식
  history: createWebHashHistory(),
  scrollBehavior() {
    return { top:0 }
  },

  //페이지 ; 웹페이지를 말함. 내가 연결하려는 하나하나의 웹페이지를 설정.
  //path의 /기호는 https://google.com/<- 메인페이지로 접근하겠다는 뜻을 가짐.
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/movie/:id',
      component: Movie
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})