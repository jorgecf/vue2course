import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes' // { routes } because we dont export as default

Vue.use(VueRouter);

// vue-router
const router = new VueRouter({
  routes: routes
});

new Vue({
  el: '#app',
  router: router, // or simply router,
  render: h => h(App)
})
