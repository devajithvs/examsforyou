import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store/store';


Vue.config.productionTip = false;
Vue.config.performance = true;

new Vue({
  store: store,
  router,
  render: h => h(App)
}).$mount('#app')