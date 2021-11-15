export default {
  state: () => ({
    accDropdownOpen: false,
    mobileItem: 0
  }),

  getters: {
    accDropdownOpen(state) {
      return state.accDropdownOpen;
    },
    mobileItem(state) {
      return state.mobileItem;
    }
  },

  mutations: {
    TOGGLE_DROPDOWN(state) {
      state.accDropdownOpen = !state.accDropdownOpen;
    },
    CLOSE_DROPDOWN(state) {
      state.accDropdownOpen = false;
    },
    NEXT_MOBILE_ITEM(state) {
      if (state.mobileItem !== 8) {
        state.mobileItem++;
      }
    },
    PREV_MOBILE_ITEM(state) {
      if (state.mobileItem !== 0) {
        state.mobileItem--;
      }
    }
  },

  actions: {}
};
