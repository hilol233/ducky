export default {
  namespaced: true,
  state: () => ({
    isAuthOpen: false,
    isLoginOpen: true,
    isLoggedIn: false,
    blinkingInterval: false,
    isAuthBtnDisabled: false,
    usernameChecked: {},
  }),
  getters: {
    usernameChecked(state) {
      return state.usernameChecked;
    },
    isAuthOpen(state) {
      return state.isAuthOpen;
    },
    // blinkingInterval(state){
    //   return state.blinkingInterval;
    // },
    isAuthBtnDisabled(state){
      return state.isAuthBtnDisabled;
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
    AUTH_OPEN(state){
      state.isAuthOpen = true;
    },
    AUTH_CLOSE(state){
      state.isAuthOpen = false;
    },
    AUTH_OPEN_CLOSE(state) {
      state.isAuthOpen = !state.isAuthOpen;
    },
    TAKE_AUTH_INTERVAL(state, payload){
      state.blinkingInterval = payload;
    },
    CLEAR_INTERVAL(state){
      clearInterval(state.blinkingInterval);
    },
    DISABLE_AUTH_BTN(state){
      state.isAuthBtnDisabled = true;
    },
    ENABLE_AUTH_BTN(state){
      state.isAuthBtnDisabled = false;
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
    startBlinking(context){
      let interval = setInterval(()=>{
        context.commit("AUTH_OPEN_CLOSE");
      },1200)
      context.commit("TAKE_AUTH_INTERVAL", interval);
      context.commit("DISABLE_AUTH_BTN");
    },
    stopBlinking(context){
      context.commit("CLEAR_INTERVAL");
      context.commit("AUTH_OPEN");
    }
  }
};
