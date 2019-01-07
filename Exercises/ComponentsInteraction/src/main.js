import Vue from 'vue'
import App from './App.vue'

// Create a eventBus
export const EventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})