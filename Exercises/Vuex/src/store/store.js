import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: { // properties of the app
        value: 0
    },
    getters: {
        value: state => state.value
    },
    mutations: { // setter: always synchronous!!!
        updateValue: (state, payload) => state.value = payload
    },
    actions: { // an action give us async functionality to our defined mutations
        // we can pass a payload (parameter) to the mutations
        updateValue: ({ commit }, payload) => commit('updateValue', payload) // es6 syntax
    },
    modules: {
        counter,
    }
});