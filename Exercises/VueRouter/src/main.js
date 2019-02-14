import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes' // { routes } because we didnt export it as default

Vue.use(VueRouter);

// vue-router
const router = new VueRouter({
  routes: routes
});

// global before guard
router.beforeEach( (to, from, next) => {
  console.log("global beforeEach");
  next();
});

new Vue({
  el: '#app',
  router: router, // or simply router,
  render: h => h(App)
})
