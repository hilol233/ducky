<template>
  <div class="sec-2" @click="clickOutside">
    <!-- Accounts -->
    <div class="sec-2__accounts">
      <div class="sec-2__acc-1">
        <!-- Part 1 -->
        <div class="part-1">
          <div class="part-1-left">
            <h2 class="title">Username</h2>
            <p>
              <img
                src="~assets/icons/roblox-currency.svg"
                alt="roblox currency"
              />
              99.9K
            </p>
          </div>
          <div class="part-1-right">
            <button>Remove Account</button>
          </div>
        </div>
        <!-- Part 2 -->
        <div class="part-2">
          <img src="~assets/images/avatar-1.png" alt="avatar" />
          <button class="list">List Items</button>
          <button class="view">View Listings</button>
        </div>
      </div>

      <div class="sec-2__acc-2">
        <!-- Part 1 -->
        <div class="part-1">
          <div class="part-1-left">
            <h2 class="title">Username</h2>
            <p>
              <img
                src="~assets/icons/roblox-currency.svg"
                alt="roblox currency"
              />
              24.6K
            </p>
          </div>
          <div class="part-1-right">
            <button>Remove Account</button>
          </div>
        </div>
        <!-- Part 2 -->
        <div class="part-2">
          <img src="~assets/images/avatar-2.png" alt="avatar" />
          <button class="list">List Items</button>
          <button class="view">View Listings</button>
        </div>
      </div>

      <div class="sec-2__acc-3">
        <button class="add-acc">Add an Account</button>
      </div>
    </div>
    <!-- Circle Layer Vectors -->
    <div class="sec-2__layers">
      <img
        src="~assets/icons/layer1-icon.svg"
        alt="circle layer"
        class="layer-1 layer"
      />
      <img
        src="~assets/icons/layer3-icon.svg"
        alt="circle layer"
        class="layer-3 layer"
      />
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
/**
@ Mobile First Design
 */

.sec-2 {
  position: relative;
  color: #fff;
  display: flex;
  justify-content: center;
  padding-top: rem(30);
  background-color: $coal;
  overflow: hidden;
  @include break-up(small) {
    padding-top: rem(75);
  }

  &__accounts {
    width: rem(310);
    margin-bottom: rem(30);
    z-index: 331;
    @include break-up(small) {
      width: rem(970);
      margin-bottom: rem(75);
      display: flex;
      justify-content: space-between;
    }
  }

  &__acc-1,
  &__acc-2 {
    width: 100%;
    height: rem(352);
    margin-bottom: rem(20);
    @include break-up(small) {
      margin-bottom: rem(0);
      margin-right: rem(20);
    }

    .part-1 {
      position: relative;
      height: rem(82);
      display: flex;
      justify-content: space-between;
      background: #262d4a;
      border-radius: rem(15) rem(15) 0px 0px;

      &-left {
        margin-left: rem(32);
        margin-top: rem(16);
        margin-bottom: rem(16);
        .title {
          font-size: rem(24);
          line-height: rem(28);
        }
        p {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          font-size: rem(12);
          line-height: rem(14);
          img {
            width: rem(16);
            height: rem(18);
            margin-right: rem(8);
          }
        }
      }

      &-right {
        button {
          position: absolute;
          top: rem(16);
          right: rem(16);
          font-size: rem(9);
          line-height: rem(11);
          color: #cd4040;
          border: none;
          outline: none;
          background: none;
        }
      }
    }

    .part-2 {
      display: flex;
      flex-direction: column;
      align-items: center;

      background-color: $purple-dark;
      border-radius: 0px 0px rem(15) rem(15);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

      img {
        width: rem(100);
        height: rem(100);
        margin: rem(25) 0;
      }

      button {
        width: rem(200);
        height: rem(40);
        border-radius: rem(50);
        border: none;
        outline: none;
        font-size: rem(18);
        font-weight: 600;
        line-height: rem(21);
        color: #fff;
        letter-spacing: 0.05em;
        margin-bottom: rem(20);

        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      }
      .list {
        background-color: $purple;
      }
      .view {
        background-color: $coal;
      }
    }
  }

  &__acc-3 {
    width: 100%;
    height: rem(352);
    border-radius: rem(15);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: $purple-dark;

    button {
      width: rem(200);
      height: rem(40);
      border-radius: rem(50);
      border: none;
      outline: none;
      font-size: rem(18);
      font-weight: 600;
      line-height: rem(21);
      color: #fff;
      letter-spacing: 0.05em;
      margin-bottom: rem(20);
      background-color: $purple;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }

  // Circle Layers
  &__layers {
    .layer {
      position: absolute;
      z-index: 330;
    }
    .layer-1 {
      width: rem(180);
      height: rem(360);
      left: 0;
      top: 35%;
      @include break-up(small) {
        width: rem(390);
        height: rem(780);
      }
    }
    .layer-3 {
      width: rem(180);
      height: rem(180);
      right: 0;
      bottom: 0;
      @include break-up(small) {
        width: rem(390);
        height: rem(390);
      }
    }
  }
}
</style>