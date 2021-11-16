export default {
  namespaced: true,
  state: () => ({
    isAuthOpen: false,
    isLoginOpen: true,
    isLoggedIn: false,
    usernameChecked: {},
  }),
  getters: {
    usernameChecked(state) {
      return state.usernameChecked;
    },
    isAuthOpen(state) {
      return state.isAuthOpen;
    },
    isLoginOpen(state) {
      return state.isLoginOpen;
    },
    isLoggedIn(state) {
      return state.isLoggedIn;
    }
  },
  mutations: {
    USERNAME_CHECKED(state, username) {
      state.usernameChecked = username;
    },
    AUTH_OPEN_CLOSE(state) {
      state.isAuthOpen = !state.isAuthOpen;
    },
    OPEN_LOGIN(state) {
      state.isLoginOpen = true;
    },
    OPEN_SIGNUP(state) {
      state.isLoginOpen = false;
    },
    LOGIN(state) {
      state.isLoggedIn = !state.isLoggedIn;
    }
  },
  actions: {
    
  }
};
