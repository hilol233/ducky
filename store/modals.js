export default {
  namespaced: true,
  state: () => ({
    purchaseFundModalOpen: false,
    featuredItemModalOpen: false,

    purchaseModalOpen: false,
    findAccModalOpen: false,
    findAccModalData: {},
    userRobloxModalOpen: false,
    supportFavModalOpen: false
    // itemOpen: false
  }),
  getters: {
    purchaseFundModalOpen(state) {
      return state.purchaseFundModalOpen;
    },
    featuredItemModalOpen(state) {
      return state.featuredItemModalOpen;
    },

    purchaseModalOpen(state) {
      return state.purchaseModalOpen;
    },
    findAccModalOpen(state) {
      return state.findAccModalOpen;
    },
    findAccModalData(state) {
      return state.findAccModalData;
    },
    userRobloxModalOpen(state) {
      return state.userRobloxModalOpen;
    },
    supportFavModalOpen(state) {
      return state.supportFavModalOpen;
    }
  },
  mutations: {
    OPEN_PURCHASE_FUND_MODAL(state) {
      state.purchaseFundModalOpen = !state.purchaseFundModalOpen;
    },
    OPEN_FEATURED_ITEM_MODAL(state) {
      state.featuredItemModalOpen = !state.featuredItemModalOpen;
    },

    OPEN_PURCHASE_MODAL(state) {
      state.purchaseModalOpen = true;
    },
    OPEN_FIND_ACC_MODAL(state) {
      state.findAccModalOpen = true;
    },
    OPEN_USER_ROBLOX_MODAL(state) {
      state.userRobloxModalOpen = true;
      state.findAccModalOpen = false;
    },
    OPEN_SUPPORT_FAV_MODAL(state) {
      state.supportFavModalOpen = true;
      state.userRobloxModalOpen = false;
      state.findAccModalOpen = false;
    },
    CLOSE_USER_ROBLOX_MODAL(state) {
      state.userRobloxModalOpen = false;
      state.findAccModalOpen = true;
    },

    CLOSE_PURCHASE_MODAL(state) {
      state.purchaseModalOpen = false;
    },
    CLOSE_FEAT_ITEM_MODAL(state) {
      state.findAccModalOpen = false;
      state.userRobloxModalOpen = false;
      state.supportFavModalOpen = false;
    },
    SET_FIND_ACC_MODAL_DATA(state,_data) {
      state.findAccModalData = _data;
    },
  },
  actions: {}
};
