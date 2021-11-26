export default {
  namespaced: true,
  state: () => ({
    isAuthOpen: false,
    isLoginOpen: true,
    isLoggedIn: false,
    logoutAlert: false,
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
    },
    logoutAlert(state){
      return state.logoutAlert;
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
    },
    LOGOUT_ALERT(state){
      state.logoutAlert = !state.logoutAlert;
    }
  },
  actions: {
    
  }
};
