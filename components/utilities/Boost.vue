<template>
  <div class="boost">
    <div class="boost__prices">
      <div class="boost__regular">
        <div class="text">Regular Price</div>
        <div class="price"><small>$</small>{{ boost.regularPrice }}</div>
      </div>
      <div class="boost__discounted">
        <div class="text1">Discounted Price for Premium Subscribers</div>
        <div class="price"><small>$</small>{{ boost.discountedPrice }}</div>
        <div class="text2">+ 3 free monthly boosts!</div>
      </div>
    </div>
    <button>{{ boost.quantity }} Boost</button>
  </div>
</template>

<script>
export default {
  props: ["boost"],
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";
@import "~assets/scss/mixins";
/**
@ Mobile First Design
 */

.boost {
  color: #fff;
  width: rem(311);
  display: flex;
  padding: rem(12) rem(10);
  flex-direction: column;
  align-items: center;
  background-color: $coal;
  border-radius: rem(12);

  &__prices {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: rem(10);

    > div {
      width: rem(140);
      height: rem(86);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: $purple-dark;
      border-radius: rem(12);
    }
  }

  &__regular {
    .text {
      font-size: rem(10);
      line-height: rem(12);
      font-weight: 500;
      margin-bottom: rem(2);
    }
    .price {
      font-size: rem(12);
      line-height: rem(14);
      font-weight: 800;
    }
  }
  &__discounted {
    .text1 {
      text-align: center;
      width: rem(120);
      font-size: rem(10);
      line-height: rem(12);
      font-weight: bolder;
      margin-bottom: rem(7);
    }
    .price {
      color: #00ff47;
      font-size: rem(12);
      line-height: rem(14);
      margin-bottom: rem(2);
      font-weight: 800;
    }
    .text2 {
      text-align: center;
      font-size: rem(10);
      line-height: rem(12);
      font-weight: 300;
    }
  }
  > button {
    width: rem(164);
    height: rem(32);
    color: #fff;
    font-size: rem(18);
    line-height: rem(21);
    background-color: $purple-2;
    border-radius: rem(50);
    border: none;
    outline: none;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
}
</style>