<template>
  <div class="hero" @click="clickOutside">
    <h1 class="hero__title">Your Dashboard</h1>
    <p class="hero__text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
      consectetur justo bibendum
    </p>

    <div class="hero__polygons">
      <div class="polygon polygon-1">
        <img
          class="mobile-polygons polygons"
          src="../../assets/icons/polygons/squares/red-sq.svg"
          alt="polygons for mobile"
        />
      </div>
      <div class="polygon polygon-2">
        <img
          class="mobile-polygons polygons"
          src="../../assets/icons/polygons/squares/pink-sq.svg"
          alt="polygons for mobile"
        />
      </div>
      <div class="polygon polygon-3">
        <img
          class="mobile-polygons polygons"
          src="../../assets/icons/polygons/squares/yellow-sq.svg"
          alt="polygons for mobile"
        />
      </div>
      <div class="polygon polygon-4">
        <img
          class="mobile-polygons polygons"
          src="../../assets/icons/polygons/squares/blue-sq.svg"
          alt="polygons for mobile"
        />
      </div>
      <div class="polygon polygon-5">
        <img
          class="mobile-polygons polygons"
          src="../../assets/icons/polygons/squares/green-sq.svg"
          alt="polygons for mobile"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeDropdown() {
      this.$store.commit("others/CLOSE_DROPDOWN");
    },
    clickOutside(e) {
      const arr = [];
      const dropdown = e.target.classList;
      for (let i = 0; i < dropdown.length; i++) {
        arr.push(dropdown[i]);
      }

      if (!arr.includes("drop")) {
        this.closeDropdown();
      }
    },
  },
};
</script>

<style lang='scss' scoped>
@import "~assets/scss/variables";
@import "~assets/scss/mixins";
@import "~assets/scss/polygons-mixins";
/**
@ Mobile First Design
 */

.hero {
  position: relative;
  height: rem(260);
  margin-top: rem(60);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $purple-dark;
  overflow: hidden;
  @include break-up(small) {
    height: rem(410);
    margin-top: rem(100);
  }

  // ========== Title ============
  &__title {
    font-size: rem(22);
    line-height: rem(26);
    margin-top: rem(83);
    margin-bottom: rem(14);
    z-index: 331;
    @include break-up(small) {
      font-size: rem(36);
      line-height: rem(42);
      margin-top: rem(171);
      margin-bottom: rem(36);
    }
  }

  // ========= Text ===========
  &__text {
    width: rem(358);
    font-size: rem(12);
    font-weight: 300;
    line-height: rem(14);
    text-align: center;
    z-index: 331;
    @include break-up(small) {
      width: rem(800);
      font-size: rem(17);
      font-weight: 400;
      line-height: rem(20);
    }
  }

  // === Polygons ===
  &__polygons {
    position: absolute;
    width: rem(329.43);
    height: rem(185.83);
    margin-top: rem(32);
    z-index: 330;
    @include animationMobile(
      0,
      // $pol1L,
      34,
      // $pol1PadT,
      122.45,
      // $pol2R,
      0,
      // $pol2PadT,
      0,
      // $pol3R,
      28,
      // $pol3PadT,
      59.59,
      // $pol4R,
      0,
      // $pol4PadB,
      14,
      // $pol5L,
      26.64 // $pol5PadB
    );
    @include break-up(small) {
      width: rem(1272.71);
      height: rem(285.44);
      @include animationMobile(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, none, block);
      @include animationPC(
        187,
        // $pol1L,
        69,
        // $pol1PadT,
        182.73,
        // $pol2R,
        400,
        // $pol2PadT,
        0,
        // $pol3R,
        147.27,
        // $pol3PadT,
        693,
        // $pol4R,
        0,
        // $pol4PadB,
        0,
        // $pol5L,
        25.25,
        // $pol5PadB
        // Extra
        195.71,
        // $pol6R,
        0,
        // $pol6PadT
        16.26,
        // $pol7R,
        75.42,
        // $pol7PadT
        0,
        // $pol8R,
        118.49,
        // $pol8PadB
      );
    }
  }
}
</style>