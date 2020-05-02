import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
import router from "./router.js" 
import moment from 'moment';
import Vuex from 'vuex';
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.config.productionTip = false;
moment.locale('zh-cn');

Vue.prototype.moment = moment;

Vue.prototype.random = n => Math.floor(n * Math.random());

// Vuex
Vue.use(Vuex);

// axios
Vue.use(VueAxios, axios);
Vue.use(Vant);
const store = new Vuex.Store({
  state: {
    name: '',
    // avatarUrl: `https://icdn.microzz.com/20170426_vue_chat/icon-avatar${Vue.prototype.random(21)}.svg`,
    avatarUrl: `http://omratag7g.bkt.clouddn.com/icon-avatar${Vue.prototype.random(21)}.svg`,
    addr: '未知',
    isShowAbout: false
  },

  mutations: {
    changeName(state, name) {
      state.name = name;
    },
    setAddr(state, addr) {
      state.addr = addr;
    },
    showAbout(state, flag) {
      state.isShowAbout = flag;
    }
  }
});


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
