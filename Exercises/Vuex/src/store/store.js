import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: { // properties of the app
        counter: 0,
        value: 0
    },
    getters: {
        doubleCounter: state => state.counter * 2,
        stringCounter: state => state.counter + " clicks!",
        value: state => state.value
    },
    mutations: { // setter: always synchronous!!!
        increment: (state, payload) => state.counter += payload,
        decrement: (state, payload) => state.counter -= payload,
        updateValue: (state, payload) => state.value = payload
    },
    actions: { // an action give us async functionality to our defined mutations
        // we can pass a payload (parameter) to the mutations
        increment: (context, payload) => { context.commit('increment', payload) }, // commits the mutation named "increment"
        decrement: (context, payload) => { context.commit('decrement', payload) },
        //es6 syntax: decrement: ({ commit }, payload) => { commit('decrement', payload) },
        asyncIncrement: (context, payload) => { setTimeout(() => context.commit('increment', payload.by), payload.duration)},
        asyncDecrement: (context, payload) => { setTimeout(() => context.commit('decrement', payload.by), payload.duration)},
        updateValue: ({ commit }, payload) => commit('updateValue', payload) // es6 syntax
    }
});