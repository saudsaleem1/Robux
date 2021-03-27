import axios from 'axios'
import router from '@/router/index'

const BASE_API = 'http://138.197.72.113';

const user_storage = JSON.parse(localStorage.getItem('user'));
const state = user_storage
    ? { status: { loggedIn: true }, user: user_storage }
    : { status: {}, user: null };

const getters = {
  isLoggedIn: function (state) {
    return state.user !== null
  },
  getUser: function (state) {
    return state.user
  }
};

const mutations = {
  SET_ERROR (state, payload) {
    state.errorMessage = payload
  }
};

const actions = {
  async stats ({ commit }, data) {
    const response = await axios.post(`${BASE_API}/api/withdraw/stats`);
    if(response.data.error){
      commit('SET_ERROR', response.data.message);
    }else{
      data.callback(response.data.stats)
    }
  },

  async games (context, data) {
    const response = await axios.post(`${BASE_API}/api/withdraw/games`, {user_id: data.user_id});
    // Send response as callback data
    data.callback(response.data);
  },

  async withdraw({ commit }, username, amount) {
    axios.post(`${BASE_API}/api/withdraw/cash-out`,{
      username: username,
      amount: amount
    })
    .then(res => {
      if(res.data.error){
        commit('SET_ERROR', res.data.message)
      }else{
        commit('SET_USER', res.data.user_data)
        localStorage.setItem('user', JSON.stringify(res.data.user_data));
        router.push({
          name: 'Earn'
        })
      }
    })
  },

  async withdraw_vip({ commit }, username, amount) {
    axios.post(`${BASE_API}/api/withdraw/cash-out-vip`,{
      username: username,
      amount: amount
    })
    .then(res => {
      if(res.data.error){
        commit('SET_ERROR', res.data.message)
      }else{
        commit('SET_USER', res.data.user_data)
        localStorage.setItem('user', JSON.stringify(res.data.user_data));
        router.push({
          name: 'Earn'
        })
      }
    })
  }
};

const withdraw = {
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}

export default withdraw
