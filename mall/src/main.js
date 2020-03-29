import Vue from 'vue'
import App from './App.vue'
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/assets/css/reset.css'
import '@/assets/js/rem.js'
import router from "./router.js" 
Vue.config.productionTip = false;
Vue.use(Vant);
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
