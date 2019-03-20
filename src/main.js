import Vue from 'vue';
import App from './App.vue';

import IonicVue from '@ionic/vue';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';


Vue.config.productionTip = false;

Vue.use(IonicVue);


Vue.config.productionTip = false
Vue.config.ignoredElements = [
  'ion-app',
  'ion-header',
  'ion-navbar',
  'ion-title',
  'ion-content',
  'ion-button',
  'ion-toolbar',
  'ion-card',
  'ion-card-header',
  'ion-card-subtitle',
  'ion-card-title',
  'ion-card-content'
];

new Vue({
  render: h => h(App)
}).$mount('#app')
