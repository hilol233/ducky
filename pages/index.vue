<template>
  <div class="home-root">
    <!-- Background of modals -->
    <transition name="back">
      <div class="back" v-if="anyModalOpen"></div>
    </transition>

    <!-- Purchase Modal -->
    <transition name="purchase">
      <PurchaseFundsModal v-if="purchaseFundModalOpen" />
    </transition>

    <!-- Feature Modal -->
    <transition name="feature">
      <FeaturedItemModal v-if="featuredItemModalOpen" />
    </transition>

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
    purchaseFundModalOpen() {
      return this.$store.getters["modals/purchaseFundModalOpen"];
    },
    featuredItemModalOpen() {
      return this.$store.getters["modals/featuredItemModalOpen"];
    },
    anyModalOpen() {
      if (
        this.isAuthOpen ||
        this.purchaseFundModalOpen ||
        this.featuredItemModalOpen
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss">
.home-root {
  position: relative;

  .auth-back {
    position: fixed;
    top: 6.25rem;
    right: 0;
    bottom: 0;
    left: 0;
    // backdrop-filter: blur(rem(5));
    background-color: rgba(0, 0, 0, 0.623);
    z-index: 1003;
  }
  .purch-back {
    position: fixed;
    top: 6.25rem;
    right: 0;
    bottom: 0;
    left: 0;
    // backdrop-filter: blur(rem(5));
    background-color: rgba(0, 0, 0, 0.623);
    z-index: 1003;
  }
  .feat-back {
    position: fixed;
    top: 6.25rem;
    right: 0;
    bottom: 0;
    left: 0;
    // backdrop-filter: blur(rem(5));
    background-color: rgba(0, 0, 0, 0.623);
    z-index: 1003;
  }

  /********************* */
  .back {
    position: fixed;
    top: 6.25rem;
    right: 0;
    bottom: 0;
    left: 0;
    // backdrop-filter: blur(rem(5));
    background-color: rgba(0, 0, 0, 0.623);
    z-index: 1003;
  }

  // === Auth Animation ===
  .auth-enter,
  .auth-leave-to {
    opacity: 0;
    transform: translateY(-10%);
  }
  .auth-enter-active,
  .auth-leave-active {
    transition: all 0.17s ease-in-out;
  }
  .auth-leave,
  .auth-enter-to {
    opacity: 1;
    transform: translateY(0);
  }

  .feature-enter,
  .feature-leave-to {
    opacity: 0;
    transform: translateY(-10%);
  }
  .feature-enter-active,
  .feature-leave-active {
    transition: all 0.17s ease-in-out;
  }
  .feature-leave,
  .feature-enter-to {
    opacity: 1;
    transform: translateY(0);
  }

  .purchase-enter,
  .purchase-leave-to {
    opacity: 0;
    transform: translateY(-10%);
  }
  .purchase-enter-active,
  .purchase-leave-active {
    transition: all 0.17s ease-in-out;
  }
  .purchase-leave,
  .purchase-enter-to {
    opacity: 1;
    transform: translateY(0);
  }

  /************ */
  .back-enter,
  .back-leave-to {
    opacity: 0;
    // transform: translateY(-10%);
  }
  .back-enter-active,
  .back-leave-active {
    transition: all 0.17s ease-in-out;
  }
  .back-leave,
  .back-enter-to {
    opacity: 1;
    // transform: translateY(0);
  }
}
</style>