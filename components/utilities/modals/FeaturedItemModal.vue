<template>
  <!-- <transition name="fimodal"> -->
  <div class="f-item" @click="close" v-if="featuredItemModalOpen">
    <FindAcc v-if="findAccModalOpen" />
    <AskUserRoblox v-if="userRobloxModalOpen" />
    <SupportFav v-if="supportFavModalOpen" />
  </div>
  <!-- </transition> -->
</template>

<script>
export default {
  computed: {
    featuredItemModalOpen() {
      return this.$store.getters["modals/featuredItemModalOpen"];
    },
    findAccModalOpen() {
      return this.$store.getters["modals/findAccModalOpen"];
    },
    userRobloxModalOpen() {
      return this.$store.getters["modals/userRobloxModalOpen"];
    },
    supportFavModalOpen() {
      return this.$store.getters["modals/supportFavModalOpen"];
    },
  },
  methods: {
    close(e) {
      const arr = [];
      const modal = e.target.classList;
      for (let i = 0; i < modal.length; i++) {
        arr.push(modal[i]);
      }

      if (arr.includes("f-item")) {
        this.$store.commit("modals/OPEN_FEATURED_ITEM_MODAL");
        this.$store.commit("modals/CLOSE_FEAT_ITEM_MODAL");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";
@import "~assets/scss/mixins";
/**
@ Mobile First Design
 */
.f-item {
  position: fixed;
  top: 0%;
  right: 0;
  left: 0;
  height: 100vh;
  color: #fff;
  display: flex;
  // background-color: rgba(0, 0, 0, 0.5);
  // backdrop-filter: blur(rem(2));
  z-index: 1003;
  @include break-up(small) {
    justify-content: center;
    align-items: center;
    margin-top: rem(100);
    height: calc(100vh - rem(100));
  }
}

// .fimodal-enter,
// .fimodal-leave-to {
//   opacity: 0;
// }
// .fimodal-enter-active,
// .fimodal-leave-active {
//   transition: opacity 0.17s ease-in-out;
// }
// .fimodal-leave,
// .fimodal-enter-to {
//   opacity: 1;
// }
</style>