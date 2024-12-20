import Vue from 'vue'
import Vuex from 'vuex'

import Products from './Products'
import Home from './Home'
import Global from './Global'

Vue.use(Vuex)

const modules = {
  Products,
  Home,
  Global
}

export default new Vuex.Store({
  modules
})
