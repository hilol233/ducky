import modals from "./modals";
import auth from "./auth";
import others from "./others";

const state = () => ({
  isOpenHamburger: true
});

const getters = {};

const mutations = {
  TOGGLE_HAMBURGER(state) {
    state.isOpenHamburger = !state.isOpenHamburger;
  }
};

const actions = {};

const modules = {
  modals,
  auth,
  others
};

export default {
  state,
  getters,
  mutations,
  actions,
  modules
};
