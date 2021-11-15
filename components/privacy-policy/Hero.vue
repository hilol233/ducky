<template>
  <div class="hero" @click="clickOutside">
    <h1>Privacy Policy</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
      consectetur justo bibendum, facilisis mi sit amet, semper massa. Praesent
      mattis nisl lacus, a porta nibh sagittis a. Sed consequat, metus id
      hendrerit lacinia, sapien dui semper nulla, quis blandit dui augue sed
      arcu. Donec id mi aliquet, lobortis turpis et, commodo magna.<br /><br />
      Integer justo nulla, consequat ac maximus quis, consectetur ac ligula.
      Maecenas ultricies molestie ex. Vivamus sit amet mi sed leo tincidunt
      interdum vel sit amet lacus. Curabitur sollicitudin mattis lectus vitae
      elementum. Nam eget commodo ex. Ut molestie elit nisi, sed scelerisque
      velit sodales a. Nam posuere elit nec tellus venenatis, at commodo erat
      feugiat. Sed tincidunt arcu ac nulla condimentum facilisis.<br /><br />
      Aliquam feugiat rutrum magna, eu posuere sapien placerat quis. Vivamus sed
      dictum lectus. Ut a lacus a lacus condimentum tempor. Nunc pretium metus
      quis ex suscipit aliquet.
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
  height: rem(458);
  margin-top: rem(60);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $purple-dark;
  overflow: hidden;
  @include break-up(small) {
    height: rem(641);
    margin-top: rem(100);
  }

  h1 {
    position: relative;
    margin-top: rem(83);
    margin-bottom: rem(14);
    font-size: rem(22);
    line-height: rem(26);
    z-index: 321;
    @include break-up(small) {
      margin-top: rem(171);
      margin-bottom: rem(36);
      font-size: rem(36);
      line-height: rem(42);
    }
  }
  p {
    position: relative;
    width: rem(358);
    min-height: rem(308);
    font-size: rem(12);
    font-weight: 300;
    line-height: rem(14);
    text-align: justify;
    letter-spacing: 0.05em;
    z-index: 321;
    @include break-up(small) {
      width: rem(1080);
      min-height: rem(260);
      font-size: rem(17);
      line-height: rem(20);
    }
  }
  // === Polygons ===
  &__polygons {
    // border: 1px solid red;
    position: absolute;
    width: rem(345.43);
    height: rem(404.19);
    margin-top: rem(32);
    @include animationMobile(
      16,
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
      6,
      // $pol4R,
      26.36,
      // $pol4PadB,
      0,
      // $pol5L,
      0,
      // $pol5PadB,
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