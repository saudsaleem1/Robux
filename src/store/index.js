import Vue from 'vue'
import Vuex from 'vuex'
import user from '@/store/modules/user.module'
import withdraw from '@/store/modules/withdraw.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    withdraw
  }
})
