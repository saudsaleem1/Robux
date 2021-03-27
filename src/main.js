import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'
import VueAxios from 'vue-axios'
import axios from 'axios'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import App from './App.vue'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import router from './router'
import store from './store'

//axios.defaults.baseURL = 'http://localhost:5000'
//axios.defaults.withCredentials = true

const alert_options = {
  confirmButtonColor: '#f14668',
  cancelButtonColor: '#ff7674',
};

Vue.use(VueAxios, axios)
Vue.use(Buefy)
Vue.use(VueClipboard)
Vue.use(VueSweetalert2, alert_options)

Vue.config.devtools = process.env.NODE_ENV === 'development';
Vue.config.productionTip = false;
Vue.config.debug = process.env.NODE_ENV === 'development';

store.dispatch('user/reauthenticate').then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})
