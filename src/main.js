import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// eslint-disable-next-line import/order
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import './assets/scss/index.scss';

Vue.config.productionTip = false;

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
