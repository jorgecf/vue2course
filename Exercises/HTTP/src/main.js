import Vue from 'vue'
import App from './App.vue'
import VR from 'vue-resource'

// import vue-resource
Vue.use(VR);

// base url
Vue.http.options.root = 'https://vue2course.firebaseio.com/data.json';
// Vue.http.options.headers

new Vue({
  el: '#app',
  render: h => h(App)
})