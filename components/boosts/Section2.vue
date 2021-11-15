<template>
  <div class="sec-2" @click="clickOutside">
    <!-- Status part -->
    <div class="sec-2__status">
      <div class="sec-2__status-inside">
        <div class="part-1">
          <h2 class="title">Premium Account Status</h2>
          <h2 class="content">Inactive</h2>
        </div>
        <div class="part-2">
          <h2 class="title">Available Boosts</h2>
          <h2 class="content">103</h2>
        </div>
      </div>
    </div>

    <!-- Subscription Button -->
    <div class="sec-2__subscription">
      <div class="sub-text">
        Become a Premium Subscriber today and get 3 free boosts per month along
        with massive savings on purchasing additional boosts!
      </div>
      <button class="sub-btn" @click="$router.push('/subscription')">
        Subscribe Now
      </button>
    </div>

    <!-- All Boosts -->
    <div class="sec-2__all-boosts">
      <!-- For Mobile -->
      <div class="sec-2__boosts-mobile">
        <Boost
          class="each-boost"
          v-for="(boost, inx) in boosts"
          :boost="boost"
          :key="inx"
        />
      </div>

      <!-- For PC -->
      <div class="sec-2__boosts-pc">
        <div class="header">
          <div class="boosts">Boosts</div>
          <div class="amount">Amount</div>
          <div class="discount">
            <div class="discount-inside">
              Premium Subscribers get huge discounts!
            </div>
          </div>
        </div>

        <div class="sec-2__boost" v-for="(boost, inx) in boosts" :key="inx">
          <button>{{ boost.quantity }} Boost</button>
          <div class="amount"><small>$</small>{{ boost.regularPrice }}</div>
          <div class="discounted" @click="$router.push('/subscription')">
            <div class="price"><small>$</small>{{ boost.discountedPrice }}</div>
            <div class="text">+ 3 free monthly boosts!</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      boosts: [
        {
          quantity: 1,
          regularPrice: 1.99,
          discountedPrice: 1.49,
        },
        {
          quantity: 5,
          regularPrice: 4.99,
          discountedPrice: 3.99,
        },
        {
          quantity: 25,
          regularPrice: 19.99,
          discountedPrice: 14.99,
        },
        {
          quantity: 50,
          regularPrice: 29.99,
          discountedPrice: 23.99,
        },
        {
          quantity: 100,
          regularPrice: 49.99,
          discountedPrice: 40.99,
        },
      ],
    };
  },
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
/**
@ Mobile First Design
 */

.sec-2 {
  position: relative;
  padding-top: rem(105);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $coal;
  @include break-up(small) {
    padding-top: rem(80);
  }

  // ==== Status ====
  &__status {
    position: absolute;
    top: 0;
    width: 100%;
    height: rem(105);
    background-color: $coal-dark;
    display: flex;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @include break-up(small) {
      height: rem(80);
    }
  }

  &__status-inside {
    width: 100%;
    margin-left: rem(15);
    margin-right: rem(15);
    @include break-up(small) {
      width: rem(1040);
      margin-left: auto;
      margin-right: auto;
      display: flex;
      justify-content: space-between;
    }

    > div {
      display: flex;
      justify-content: space-between;
      @include break-up(small) {
        display: initial;
      }

      .title,
      .content {
        font-size: rem(18);
        line-height: rem(21);
      }
    }

    .part-1 {
      margin-bottom: rem(3);
      @include break-up(small) {
        margin-bottom: rem(0);
      }
      .title {
        @include break-up(small) {
          margin-bottom: rem(3);
        }
      }
      .content {
        color: red;
      }
    }
    .part-2 {
      .title {
        @include break-up(small) {
          display: inline;
          margin-right: rem(10);
        }
      }
      .content {
        color: #00ff47;
        @include break-up(small) {
          display: inline;
        }
      }
    }
  }

  // ==== Subscription Button ====
  &__subscription {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: rem(371);
    background-color: $coal-dark;
    margin: rem(30) 0;
    border-radius: rem(15);
    @include break-up(small) {
      width: rem(970);
      flex-direction: row;
      justify-content: space-between;
    }

    .sub-text {
      width: rem(341);
      font-size: rem(14);
      line-height: rem(16);
      font-weight: bold;
      text-align: center;
      margin: rem(15) 0;
      @include break-up(small) {
        width: rem(593);
        font-size: rem(17);
        line-height: rem(20);
        text-align: left;
        margin-left: rem(25);
      }
    }

    .sub-btn {
      width: rem(164);
      height: rem(32);
      border-radius: rem(50);
      margin-bottom: rem(19);
      margin-left: auto;
      margin-right: auto;
      color: #fff;
      background-color: $purple-2;
      border: none;
      outline: none;
      font-weight: 500;
      font-size: rem(18);
      line-height: rem(21);
      @include break-up(small) {
        width: rem(200);
        height: rem(40);
        font-size: rem(18);
        line-height: rem(21);
        margin-bottom: rem(0);
        margin-left: 0;
        margin-right: rem(25);
      }

      &:hover {
        color: $purple-2;
        background-color: #fff;
        border: rem(2) solid $purple-2;
        cursor: pointer;
      }
    }
  }

  &__all-boosts {
    padding: rem(10);
    border-radius: rem(15);
    margin-bottom: rem(30);
    background-color: $coal-dark;
    @include break-up(small) {
      padding: rem(20);
      margin-bottom: rem(75);
    }
  }

  &__boosts-mobile {
    background-color: $purple-dark;
    border-radius: rem(12);
    padding: rem(20);
    @include break-up(small) {
      display: none;
    }
    .each-boost {
      &:not(:last-child) {
        margin-bottom: rem(15);
      }
    }
  }

  &__boosts-pc {
    width: rem(930);
    background-color: $purple-dark;
    border-radius: rem(15);
    padding-top: rem(20);
    padding-bottom: rem(41);
    @include break-down(small) {
      display: none;
    }

    .header {
      position: relative;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: rem(8);
      margin-bottom: rem(30);

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        width: 100%;
        height: rem(1);
        background: linear-gradient(
          90deg,
          #a4a4a4 0%,
          rgba(196, 196, 196, 0) 100%
        );
      }

      > div {
        width: rem(200);
        text-align: center;
        font-size: rem(14);
        line-height: rem(16);
        font-weight: 300;
      }
      .boosts {
        margin-left: rem(51);
      }
      .discount {
        margin-right: rem(51);
        display: flex;
        justify-content: center;
        > div {
          width: rem(150);
        }
      }
    }
  }

  &__boost {
    position: relative;
    display: flex;
    justify-content: space-between;
    margin-left: rem(54);
    margin-right: rem(54);
    &:not(:last-child) {
      margin-bottom: rem(15);
      padding-bottom: rem(15);

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        height: rem(1);
        width: 100%;
        background: linear-gradient(
          90deg,
          #a4a4a4 0%,
          rgba(196, 196, 196, 0) 100%
        );
      }
    }

    button {
      width: rem(200);
      height: rem(40);
      color: #fff;
      font-size: rem(18);
      line-height: rem(21);
      border-radius: rem(50);
      background-color: $purple;
      border: none;
      outline: none;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    .amount {
      width: rem(200);
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      font-size: rem(12);
      line-height: rem(14);
    }

    .discounted {
      width: rem(200);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;

      .price {
        color: #00ff47;
        font-weight: bold;
        font-size: rem(12);
        line-height: rem(14);
      }
      .text {
        font-weight: 300;
        font-size: rem(12);
        line-height: rem(14);
      }
    }
  }
}
</style>