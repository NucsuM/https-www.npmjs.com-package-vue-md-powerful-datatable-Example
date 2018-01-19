import Vue from 'vue'
import App from './App.vue'
import VueMdl from 'vue-mdl';
import VueMaterial from 'vue-material';
 
require('vue-material/dist/vue-material.css');
 
Vue.use(VueMaterial);
Vue.material.registerTheme('blue', {});
 
require('material-design-lite/material.min.js');
require('material-design-lite/material.min.css');
new Vue({
  el: '#app',
  render: h => h(App)
})
