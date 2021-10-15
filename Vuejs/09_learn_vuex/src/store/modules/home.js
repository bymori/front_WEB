/*
 * @Descripttion:
 * @version:
 * @Author: by_mori
 * @Date: 2021-10-16 00:02:28
 * @LastEditors: by_mori
 * @LastEditTime: 2021-10-16 00:07:31
 */
const homeModule = {
  namespaced: true,
  state() {
    return {
      homeCounter: 120,
    };
  },
  getters: {
    doubleHomeCounter(state, getters, rootState, rootGetters) {
      return state.homeCounter * 2;
    },
    otherGetter(state) {
      return 100;
    },
  },
  mutations: {
    increment(state) {
      state.homeCounter++;
    },
  },
  actions: {
    incrementAction({
      commit,
      dispatch,
      state,
      rootState,
      getters,
      rootGetters,
    }) {
      commit('increment');
      commit('increment', null, { root: true });

      // dispatch
      // dispatch("incrementAction", null, {root: true})
    },
  },
};

export default homeModule;
