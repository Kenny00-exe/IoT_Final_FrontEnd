import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.prototype.$axios = Axios
Axios.defaults.baseURL = '/api'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    worldMapSelect:'中国',
    provinceMapSelect:'上海市',
  },
  mutations: {
    increment(state,type){
      state.worldMapSelect=type
  },
    increment_p(state,type){
      state.provinceMapSelect=type
  },
  },
  actions: {
    changeWorldMapSelect({commit},type){
      commit('increment',type)
  },
    changeProvinceMapSelect({commit},type){
      commit('increment_p',type)
  },
  },
  getters: {
    getWorldMapSelect:function(state){
      return state.worldMapSelect
  },
    getProvinceMapSelect:function(state){
      return state.provinceMapSelect
  },
  }
})
export default store;
