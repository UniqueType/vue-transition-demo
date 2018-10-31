/* eslint no-param-reassign: "off" */
/* eslint no-shadow: "off" */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    publicState: {}
};

const mutations = {
    updatePublicState(state, infos) {
        state.publicState = infos;
    }
};

export default new Vuex.Store({
    state,
    mutations
    // actions
});
