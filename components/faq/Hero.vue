<template>
  <div class="hero" @click="clickOutside">
    <!-- Text Buttons -->
    <div class="hero__text-btns">
      <h1 class="title">Frequently Asked Questions</h1>
      <p class="text">
        Hi, we’re here to help. Find answers to frequently asked questions here.
      </p>

      <div class="hero__search-q">
        <input type="text" placeholder="Ask a question..." />
        <img src="../../assets/icons/search-icon.svg" alt="search-icon" />
      </div>
    </div>

    <!-- Question mark Polygons -->
    <!-- Polygons -->
    <div class="hero__polygons">
      <div class="polygon polygon-1">
        <img
          class="mobile-polygons polygons"
          src="../../assets/icons/polygons/qMark/blue-q.svg"
          alt="polygons for mobile"
        />
      </div>
      <div class="polygon polygon-2">
        <img
          class="mobile-polygons polygons"
          src="../../assets/icons/polygons/qMark/pink-q.svg"
          alt="polygons for mobile"
        />
      </div>
      <div class="polygon polygon-3">
        <img
          class="mobile-polygons polygons"
          src="../../assets/icons/polygons/qMark/green-q.svg"
          alt="polygons for mobile"
        />
      </div>
      <div class="polygon polygon-4">
        <img
          class="mobile-polygons polygons"
          src="../../assets/icons/polygons/qMark/red-q.svg"
          alt="polygons for mobile"
        />
      </div>
      <div class="polygon polygon-5">
        <img
          class="mobile-polygons polygons"
          src="../../assets/icons/polygons/qMark/yellow-q.svg"
          alt="polygons for mobile"
        />
      </div>
      <div class="polygon polygon-6">
        <img
          class="mobile-polygons polygons"
          src="../../assets/icons/polygons/qMark/orange-q.svg"
          alt="polygons for mobile"
        />
      </div>
      <div class="polygon polygon-5">
        <img
          class="mobile-polygons polygons"
          src="../../assets/icons/polygons/qMark/green-q2.svg"
          alt="polygons for mobile"
        />
      </div>
    </div>

    <!-- Demonstrations -->
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

<style lang="scss" scoped>
@import "~assets/scss/variables";
@import "~assets/scss/mixins";
@import "~assets/scss/polygons-mixins";
/**
@ Mobile First Design
 */

.hero {
  position: relative;
  height: rem(380);
  margin-top: rem(60);
  background-color: $purple-dark;
  color: #fff;
  display: flex;
  justify-content: center;
  overflow: hidden;
  @include break-up(small) {
    height: rem(550);
    margin-top: rem(100);
  }

  // =========== Text Buttons =============
  &__text-btns {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: rem(141);
    z-index: 321;
    @include break-up(small) {
      margin-top: rem(174);
    }
    .title {
      font-size: rem(22);
      line-height: rem(26);
      margin-bottom: rem(10);
      @include break-up(small) {
        font-size: rem(36);
        line-height: rem(42);
        margin-bottom: rem(23);
      }
    }
    .text {
      width: rem(289);
      font-size: rem(12);
      line-height: rem(14);
      text-align: center;
      margin-bottom: rem(20);
      @include break-up(small) {
        width: 100%;
        font-weight: bold;
        font-size: rem(17);
        line-height: rem(20);
        margin-bottom: rem(62);
      }
    }
  }
  &__search-q {
    width: rem(314);
    height: rem(40);
    border: 1px solid #ffffff;
    border-radius: rem(50);
    background: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @include break-up(small) {
      width: rem(661);
    }

    input {
      color: white;
      font-size: rem(14);
      border: none;
      outline: none;
      background: none;
      margin-left: rem(17);
    }
    img {
      margin-right: rem(13.31);
    }
    ::placeholder {
      color: white;
    }
  }

  // === Polygons ===
  &__polygons {
    // border: 1px solid red;
    position: absolute;
    width: rem(319.03);
    height: rem(250.69);
    margin-top: rem(53);
    @include animationMobile(
      0,
      // $pol1L,
      15.91,
      // $pol1PadT,
      117.04,
      // $pol2R,
      0,
      // $pol2PadT,
      18.25,
      // $pol3R,
      55.82,
      // $pol3PadT,
      0,
      // $pol4R,
      0,
      // $pol4PadB,
      5,
      // $pol5L,
      0,
      // $pol5PadB
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