<template>
  <!-- <transition name="slide"> -->
  <div class="item">
    <div class="lp-item">
      <div class="part-1">
        <div class="intro">
          <div class="title">{{ item.product_name }}</div>
          <div class="desc">{{ item.product_description }}</div>
        </div>

        <img :src="item.product_icon_url" alt="character" />
      </div>
      <div class="part-2">
        <div class="sold-price">Sold For ${{ item.price }}</div>
      </div>
    </div>
  </div>
  <!-- </transition> -->
</template>

<script>
export default {
  props: ["item", "index"],
  computed: {},
};
</script>

<style lang='scss' scoped>
@import "~assets/scss/variables";
@import "~assets/scss/mixins";
/**
@ Mobile First Design
 */

.item {
  overflow: hidden;

  .lp-item {
    width: rem(82);
    height: rem(91);
    color: #fff;
    margin: 0 auto;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @include break-up(small) {
      width: rem(150);
      height: rem(165);
    }

    .part-1 {
      position: relative;
      height: rem(73);
      background-color: $coal;
      border-radius: rem(15) rem(15) 0 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      @include break-up(small) {
        height: rem(135);
        justify-content: flex-end;
      }

      .intro {
        @include break-up(small) {
          position: absolute;
          top: rem(15.79);
          left: rem(18.91);
        }
        .title {
          margin-top: rem(9);
          margin-bottom: rem(5);
          font-weight: 500;
          font-size: rem(10);
          line-height: rem(12);
          @include break-up(small) {
            font-size: rem(12);
            line-height: rem(14);
            margin-bottom: rem(2.11);
          }
        }

        .desc {
          display: none;
          @include break-up(small) {
            display: initial;
            font-size: rem(9);
            line-height: rem(11);
          }
        }
      }

      img {
        width: rem(42);
        height: rem(36);
        @include break-up(small) {
          width: rem(97.06);
          height: rem(81.05);
        }
      }
    }

    .part-2 {
      height: rem(18);
      background-color: $coal-light;
      border-radius: 0 0 rem(15) rem(15);
      display: flex;
      justify-content: center;
      @include break-up(small) {
        height: rem(30);
      }

      .sold-price {
        font-weight: 500;
        font-size: rem(7);
        line-height: rem(8);
        margin-top: rem(5);
        @include break-up(small) {
          font-size: rem(14);
          line-height: rem(16);
          margin-top: rem(7);
        }
      }
    }
  }
}
</style>