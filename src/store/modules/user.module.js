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
  SET_USER (state, payload) {
    state.user = payload
  },
  REMOVE_USER (state) {
    state.user = null;
    state.status = {};
  },
  SET_ERROR (state, payload) {
    state.errorMessage = payload
  }
};

const actions = {
  authenticate ({ commit }, username) {
    var ref = getQueryVariable("r");
    axios.post(`${BASE_API}/api/auth/login`, {
      username: username,
      ref: ref
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
  reauthenticate ({ commit }) {
    if(user_storage){
      axios.post(`${BASE_API}/api/auth/login`, {
        username: user_storage.roblox_username,
        ref: ""
      })
      .then(res => {
        if(res.data.error){
          commit('SET_ERROR', res.data.message)
          localStorage.removeItem('user');
        }else{
          commit('SET_USER', res.data.user_data)
        }
      })
    }
  },
  logout ({ commit }) {
    localStorage.removeItem('user');
    commit('REMOVE_USER');
  }
};

const user = {
  namespaced: true,
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions
}

/* FUNCTIONS */

function getQueryVariable(variable) {
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

export default user
