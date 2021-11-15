<template>
  <div>
    <!-- All Modals -->
    <!-- <PurchaseModal class="modal" :class="{ showP: purchaseOpen }" /> -->

    <Nuxt class="nuxt-default" />
    <Footer class="footer-default" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // isVisible: true,
    };
  },
  computed: {
    purchaseOpen() {
      return this.$store.getters["modals/purchaseOpen"];
    },
  },
};
</script>

<style lang='scss'>
@import "~assets/scss/variables";
@import "~assets/scss/mixins";

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-size: 16px;
  font-family: $kumbh-sans;
  letter-spacing: 0.05em;
  overflow-x: hidden;
}
a {
  text-decoration: none;
  color: #fff;
}
.for-mobile {
  @include break-up(small) {
    display: none;
  }
}

/***** Scrollbar *****/
::-webkit-scrollbar {
  width: 0;
}

// ======= This page styling ========

.navbar-default {
  z-index: 1002;
}
.mobilenav-default {
  position: fixed;
  top: -100%;
  transition: all 0.3s ease-in-out;
  z-index: 1001;
}
.nuxt-default {
  z-index: 400;
}
.footer-default {
  z-index: 1000;
}
.show {
  top: 0%;
}
</style>