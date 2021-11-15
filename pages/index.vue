<template>
  <div class="home-root">
    <!-- Modals -->
    <PurchaseFundsModal />
    <FeaturedItemModal />

    <!-- Navbar -->
    <NavBar class="navbar-default" />
    <MobileNavMenu class="mobilenav-default" :class="{ show: !isVisible }" />

    <!-- Authentication -->
    <transition name="auth">
      <Auth v-if="isAuthOpen" />
    </transition>

    <HomeHero @click="clickOutside($event)" />
    <HomeSection2 @click="clickOutside($event)" />
  </div>
</template>

<script>
export default {
  computed: {
    isVisible() {
      return this.$store.state.isOpenHamburger;
    },
    isAuthOpen() {
      return this.$store.getters["auth/isAuthOpen"];
    },
  },
};
</script>

<style lang="scss">
.home-root {
  position: relative;

  // === Auth Animation ===
  .auth-enter,
  .auth-leave-to {
    opacity: 0;
  }
  .auth-enter-active,
  .auth-leave-active {
    transition: opacity 0.17s ease-in-out;
  }
  .auth-leave,
  .auth-enter-to {
    opacity: 1;
  }
}
</style>