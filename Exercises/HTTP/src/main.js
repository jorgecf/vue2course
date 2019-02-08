import Vue from 'vue'
import App from './App.vue'
import VR from 'vue-resource'

// import vue-resource
Vue.use(VR);

// base url
Vue.http.options.root = 'https://vue2course.firebaseio.com';
// Vue.http.options.headers


Vue.http.interceptors.push((request, next) => { // intercept request
  console.log(request.method);
  console.log(request);
  next((response) => { // intercept response
    console.log(response);
   });
});

new Vue({
  el: '#app',
  render: h => h(App)
})