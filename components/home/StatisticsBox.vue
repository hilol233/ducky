<template>
  <div class="stat-box">
    <div class="stat-box__inside">
      <div class="stat-box__users">
        <h1>11K</h1>
        <span>users</span>
      </div>
      <div class="stat-box__items-sold">
        <h1>24K</h1>
        <span>Items Sold</span>
      </div>
      <div class="stat-box__earned">
        <h1>$1M</h1>
        <span>earned</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
@import "~assets/scss/variables";
@import "~assets/scss/mixins";

.stat-box {
  &__inside {
    width: rem(1169);
    height: rem(238);
    display: grid;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: repeat(3, rem(300));
    justify-content: space-around;
    align-items: center;
    background: $purple-thick;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: rem(25);
    @include break-down(small) {
      grid-template-columns: repeat(3, rem(79));
      width: rem(328);
      height: rem(99);
      border-radius: rem(20);
    }

    & > div {
      // border: 1px solid red;
      display: flex;
      justify-content: center;
      align-items: center;
      width: rem(300);
      height: rem(150);
      color: #fff;
      background: $purple-2;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: rem(25);
      @include break-down(small) {
        width: rem(79);
        height: rem(50);
        flex-direction: column;
        border-radius: rem(8);
      }

      h1 {
        // border: 1px solid magenta;
        font-size: rem(72);
        line-height: rem(84);
        margin-right: rem(26);
        @include break-down(small) {
          font-size: rem(24);
          line-height: rem(28);
          text-align: center;
          width: 100%;
          margin-right: rem(0);
        }
      }

      span {
        font-size: rem(17);
        line-height: rem(20);
        text-transform: uppercase;
        @include break-down(small) {
          font-weight: bold;
          font-size: rem(10);
          line-height: rem(12);
        }
      }
    }
  }
}
</style>