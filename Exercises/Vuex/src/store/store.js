import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: { // properties of the app
        counter: 0
    },
    getters: {
        doubleCounter: state => state.counter * 2,
        stringCounter: state => state.counter + " clicks!"
    }
});