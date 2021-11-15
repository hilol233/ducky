<template>
  <div class="hero" @click="clickOutside">
    <!-- hero section's text and button -->
    <div class="hero__text-btn">
      <h1>Lorem Ipsum Dolor Sit Amet</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        consectetur justo bibendum, facilisis mi sit amet, semper massa.
      </p>
      <div class="hero__cta-btn-div">
        <button
          class="hero__cta-btn"
          :disabled="isAuthBtnDisabled"
          @click="promptSignupModal"
        >
          Sign Up Now
        </button>
      </div>
    </div>

    <!-- Polygons -->
    <div class="hero__polygons">
      <div class="polygon polygon-1">
        <img
          class="mobile-polygons polygons"
          src="../../assets/icons/polygons/shapes/blue-triangle.svg"
          alt="polygons for mobile"
        />
      </div>
      <div class="polygon polygon-2">
        <img
          class="mobile-polygons polygons"
          src="../../assets/icons/polygons/shapes/brown-circle.svg"
          alt="polygons for mobile"
        />
      </div>
      <div class="polygon polygon-3">
        <img
          class="mobile-polygons polygons"
          src="../../assets/icons/polygons/shapes/red-square.svg"
          alt="polygons for mobile"
        />
      </div>
      <div class="polygon polygon-4">
        <img
          class="mobile-polygons polygons"
          src="../../assets/icons/polygons/shapes/pink-triangle.svg"
          alt="polygons for mobile"
        />
      </div>
      <div class="polygon polygon-5">
        <img
          class="mobile-polygons polygons"
          src="../../assets/icons/polygons/shapes/green-square.svg"
          alt="polygons for mobile"
        />
      </div>
      <div class="polygon polygon-6">
        <img
          class="mobile-polygons polygons"
          src="../../assets/icons/polygons/shapes/green-circle.svg"
          alt="polygons for mobile"
        />
      </div>
      <div class="polygon polygon-7">
        <img
          class="mobile-polygons polygons"
          src="../../assets/icons/polygons/shapes/reddish-triangle.svg"
          alt="polygons for mobile"
        />
      </div>
      <div class="polygon polygon-8">
        <img
          class="mobile-polygons polygons"
          src="../../assets/icons/polygons/shapes/yellow-square.svg"
          alt="polygons for mobile"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    isAuthBtnDisabled() {
      return this.$store.getters["auth/isAuthBtnDisabled"];
    },
  },
  methods: {
    promptSignupModal() {
      this.$store.dispatch("auth/startBlinking");
      // this.$store.commit("auth/AUTH_OPEN_CLOSE");
      this.$store.commit("auth/OPEN_SIGNUP");
    },
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

.hero {
  position: relative;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 43.75rem;
  margin-top: rem(100);
  background-color: $purple-dark;
  overflow: hidden;
  @include break-down(small) {
    height: rem(411);
    margin-top: rem(60);
    overflow: hidden;
  }

  // ======== Text Button Section =======
  &__text-btn {
    position: relative;
    // border: 1px solid magenta;
    width: rem(1110);
    min-height: rem(207);
    z-index: 331;
    @include break-down(small) {
      width: rem(335);
      min-height: rem(142);
    }

    h1 {
      font-size: rem(64);
      text-align: center;
      @include break-down(small) {
        font-size: rem(24);
        margin-bottom: rem(9);
      }
    }
    p {
      // border: 1px solid magenta;
      text-align: center;
      line-height: rem(19.92);
      font-size: rem(17);
      margin-bottom: rem(39);
      @include break-down(small) {
        text-align: justify;
        font-size: rem(12);
        line-height: rem(14);
        margin: 0 rem(7) rem(33) rem(7);
      }
    }
  }

  &__cta-btn-div {
    // border: 1px solid yellow;
    // position: absolute;
    // bottom: 0;
    width: 100%;
    text-align: center;
    z-index: 331;
  }

  &__cta-btn {
    width: 15.625rem;
    height: rem(60);
    letter-spacing: 5%;
    font-size: rem(18);
    line-height: 21px;
    color: #ffffff;
    font-weight: bold;
    border: none;
    outline: none;
    background-color: $purple;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50px;
    @include break-down(small) {
      width: rem(128);
      height: rem(28);
      font-size: rem(14);
      line-height: rem(16);
    }

    &:hover {
      cursor: pointer;
      color: $purple;
      background-color: #fff;
      border: rem(2) solid $purple;
    }
  }

  // === Polygons ===
  &__polygons {
    // border: 1px solid red;
    position: absolute;
    width: rem(350.1);
    height: rem(257.63);
    z-index: 330;
    @include animationMobile(
      26.14,
      // $pol1L,
      0,
      // $pol1PadT,
      60.96,
      // $pol2R,
      23,
      // $pol2PadT,
      0,
      // $pol3R,
      158,
      // $pol3PadT,
      55.65,
      // $pol4R,
      0,
      // $pol4PadB,
      0,
      // $pol5L,
      33.93,
      // $pol5PadB
    );
    @include break-up(small) {
      width: rem(1322.71);
      height: rem(413.19);
      @include animationMobile(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, none, block);
      @include animationPC(
        16.9,
        // $pol1L,
        42.32,
        // $pol1PadT,
        1037.71,
        // $pol2R,
        275,
        // $pol2PadT,
        1084.73,
        // $pol3R,
        82,
        // $pol3PadT,
        238.84,
        // $pol4R,
        87.32,
        // $pol4PadB,
        0,
        // $pol5L,
        0,
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