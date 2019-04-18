import * as types from '../types.js';

const state = {
    counter: 0
};

const getters = {
    // doubleCounter: state => state.counter * 2,
    [types.DOUBLE_COUNTER]: state => state.counter * 2,// namespaced
    [types.CLICK_COUNTER]: state => state.counter + " clicks!",
};

const mutations = {
    increment: (state, payload) => state.counter += payload,
    decrement: (state, payload) => state.counter -= payload,
};

const actions = {
    increment: (context, payload) => { context.commit('increment', payload) }, // commits the mutation named "increment"
    decrement: (context, payload) => { context.commit('decrement', payload) },
    asyncIncrement: (context, payload) => { setTimeout(() => context.commit('increment', payload.by), payload.duration) },
    asyncDecrement: (context, payload) => { setTimeout(() => context.commit('decrement', payload.by), payload.duration) },
};

export default {
    // state: state
    state, //es6 syntax
    getters,
    mutations,
    actions
}