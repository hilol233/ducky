<template>
  <div class="settings">
    <!-- Navbar -->
    <NavBar class="navbar-default" />
    <MobileNavMenu class="mobilenav-default" :class="{ show: !isVisible }" />

    <SetHero />
    <SetSettings />
  </div>
</template>

<script>
export default {
  computed: {
    isVisible() {
      return this.$store.state.isOpenHamburger;
    },
  },
};
</script>

<style>
</style>