import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'

const _defaultmessage = 'Search for the movie title'

export default {
  //모듈 옵션 : true로 표시하면 movie.js가 store에서 모듈화되서 사용할수 있다. 즉 index.js에 모듈스쪽에 써서 별개의 개념으로 활용할수 있다.
  namespaced: true, 
  
  //데이터 옵션
  state:  () => ({ 
    movies: [],
    message: _defaultmessage ,
    loading: false,
    theMovie: {}
  }), 
  
  //계산된 상태
  getters: {},
  
  //메쏘즈, 즉 함수를 만들수 있음 
  //mutations:변이(데이터들을 변경(수정)할수있음), mutations안에서만 변경가능. 다른곳에서는 불가능.
  //actions : 비동기로 처리됨(함수가)
  mutations: {
    updateState(state, payload) {
      Object.keys(payload).forEach(key => {
        state[key] = payload[key]
      })
    },
    resetMovies(state) {
      state.movies = []
      state.message = _defaultmessage
      state.loading = false
    }
  },
  actions: {
    async searchMovies( { state, commit }, payload) {
      if (state.loading) return

      commit('updateState', {
        message:'',
        loading: true
      })

      try {
        const res = await _fetchMovie({
          ...payload,
          page: 1
        })
        const { Search, totalResults } = res.data
        commit('updateState', {
          movies: _uniqBy(Search, 'imdbID')
        })
  
        const total = parseInt(totalResults, 10)
        const paseLength = Math.ceil(total / 10) // ceil은 올림처리해주는 계산함수
        
        //추가요청
        if (paseLength > 1) {
          for (let page = 2; page <= paseLength; page +=1 ) {
            if (page > (payload.number / 10)) break
            const res = await _fetchMovie({
              ...payload,
              page
            })
            const { Search } = res.data
            commit('updateState', {
              movies: [
                      ...state.movies, 
                      ..._uniqBy(Search, 'imdbID')]
            })
          }
        }
      } catch ({ message }) {
        commit('updateState', {
          movies: [],
          message
        })
      } finally {
        commit('updateState', {
          loading: false
        })
      }
    },
    async searchMovieWithId({state, commit}, payload) {
      if(state.loading) return

      commit('updateState',{
        theMovie: {},
        loading: true
      })

      try {
        const res = await _fetchMovie(payload)
        commit('updateState', {
          theMovie: res.data
        })
      } catch (error) {
        commit('updateState', {
          theMovie: {}
        })
      } finally {
        commit('updateState', {
          loading: false
        })
      }
    }
  }
}

async function _fetchMovie(payload) {
  return await axios.post('/.netlify/functions/movie', payload)
}