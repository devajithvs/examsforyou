import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import {store} from './store/store';

import Ads from 'vue-google-adsense'
 
Vue.use(require('vue-script2'))
Vue.use(Ads.Adsense)
Vue.use(Ads.InArticleAdsense)
Vue.use(Ads.InFeedAdsense)

Vue.config.productionTip = false;
Vue.config.performance = true;

new Vue({
  store: store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')