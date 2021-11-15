<template>
  <div class="faq-demonstration">
    <div class="faq-demonstration__demonstrations">
      <div class="faq-demonstration__getting-started">
        <img src="../../assets/icons/rocket-icon.svg" alt="socket icon" />
        <p>Getting Started</p>
      </div>
      <div class="faq-demonstration__general">
        <img src="../../assets/icons/gear-icon.svg" alt="gear icon" />
        <p>General</p>
      </div>
      <div class="faq-demonstration__buying">
        <img src="../../assets/icons/buying-icon.svg" alt="buying icon" />
        <p>Buying</p>
      </div>
      <div class="faq-demonstration__selliny">
        <img src="../../assets/icons/selling-icon.svg" alt="gear icon" />
        <p>Selling</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";
@import "~assets/scss/mixins";
/**
@ Mobile First Design
 */
// ========== Demonstrations ==========
.faq-demonstration {
  width: 100%;
  display: flex;
  justify-content: center;
  &__demonstrations {
    bottom: rem(-35);
    display: flex;
    justify-content: space-between;
    width: rem(344);
    z-index: 331;
    @include break-up(small) {
      width: rem(1168);
      bottom: rem(-110);
    }

    > div {
      width: rem(80);
      height: rem(60);
      background-color: $coal-dark;
      border-radius: rem(8);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      @include break-up(small) {
        width: rem(250);
        height: rem(210);
        border-radius: rem(25);
      }

      img {
        height: rem(30);
        margin-bottom: rem(3);
        @include break-up(small) {
          height: rem(96.98);
          margin-bottom: rem(15.02);
        }
      }

      p {
        font-size: rem(9);
        line-height: rem(11);
        @include break-up(small) {
          font-size: rem(18);
          line-height: rem(21);
        }
      }
    }
  }
}
</style>