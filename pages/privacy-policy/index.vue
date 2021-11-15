<template>
  <div>
    <!-- Navbar -->
    <NavBar class="navbar-default" />
    <MobileNavMenu class="mobilenav-default" :class="{ show: !isVisible }" />

    <!-- Authentication -->
    <Auth v-if="isAuthOpen" />

    <PrivacyHero />
    <PrivacyContents />
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