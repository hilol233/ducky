<template>
  <div class="sec-2" @click="clickOutside">
    <!-- Account Status -->
    <div class="sec-2__account-status">
      <div class="status-inside-active" v-if="isLoggedIn">
        <div class="part-1">
          <div class="title">Premium Account Status</div>
          <div class="content">Active</div>
        </div>
        <div class="part-2-3">
          <div class="part-2">
            <div class="title">Expires On</div>
            <div class="content">31 Oct, 2021</div>
          </div>
          <div class="part-3">
            <div class="title">Days Remaining</div>
            <div class="content">26</div>
          </div>
        </div>
      </div>

      <div class="status-inside-inactive" v-else>
        <div class="title">Premium Account Status</div>
        <div class="content">Inactive</div>
      </div>
    </div>

    <!-- Free - Standard membership -->
    <div class="sec-2__free">
      <div class="header">
        <h1>Free</h1>
        <p>Standard Membership</p>
      </div>
      <div class="details">
        <div class="checklist">
          <div class="check" v-for="(check, inx) in 7" :key="inx">
            <div class="checkbox">
              <img
                class="checked-icon"
                v-if="inx < 3"
                src="~assets/icons/checked-icon.svg"
                alt="checked icon"
              />
              <img
                class="unchecked-icon"
                v-else
                src="~assets/icons/unchecked-icon.svg"
                alt="unchecked icon"
              />
            </div>

            <div class="text">Lorem ipsum dolor amet</div>
          </div>
        </div>
        <div class="current-text">You are currently on this plan</div>
      </div>
    </div>

    <!-- Premium -->
    <div class="sec-2__premium">
      <div class="header">
        <h1>Premium</h1>
        <p>Standard Membership</p>
      </div>
      <div class="details">
        <!-- Checkbox list -->
        <div class="checklist">
          <div class="check" v-for="(check, inx) in 7" :key="inx">
            <div class="checkbox">
              <img
                class="checked-icon"
                src="~assets/icons/checked-icon.svg"
                alt="checked icon"
              />
            </div>

            <div class="text">Lorem ipsum dolor amet</div>
          </div>
        </div>

        <!-- Time and Price -->
        <div class="sec-2__time-price">
          <!-- 1 month -->
          <div
            class="_1m"
            :class="{ active: isActive1 }"
            @click="makeActive(1)"
          >
            <div class="tick-icon" v-if="isActive1">
              <img src="~assets/icons/tick.svg" alt="tick" class="tick" />
            </div>
            <div class="time">1 Month</div>
            <div class="price">$19.99</div>
          </div>
          <!-- 6 months -->
          <div
            class="_6m"
            :class="{ active: isActive2 }"
            @click="makeActive(2)"
          >
            <div class="tick-icon" v-if="isActive2">
              <img src="~assets/icons/tick.svg" alt="tick" class="tick" />
            </div>
            <div class="time">6 Month</div>
            <div class="price">$109.99</div>
            <div class="discount">14 Days Free</div>
          </div>
          <!-- 12 months -->
          <div
            class="_12m"
            :class="{ active: isActive3 }"
            @click="makeActive(3)"
          >
            <div class="tick-icon" v-if="isActive3">
              <img src="~assets/icons/tick.svg" alt="tick" class="tick" />
            </div>
            <div class="time">12 Month</div>
            <div class="price">$199.99</div>
            <div class="discount">60 Days Free</div>
          </div>
        </div>

        <div class="sec-2__upgrade-btn">
          <button>Upgrade Now</button>
        </div>
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
        src="~assets/icons/layer2-icon.svg"
        alt="circle layer"
        class="layer-2 layer"
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
  data() {
    return {
      isChecked: null,
      isActive1: false,
      isActive2: true,
      isActive3: false,
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/isLoggedIn"];
    },
  },
  methods: {
    makeActive(num) {
      if (num === 1) {
        this.isActive1 = true;
        this.isActive2 = false;
        this.isActive3 = false;
      } else if (num === 2) {
        this.isActive1 = false;
        this.isActive2 = true;
        this.isActive3 = false;
      } else {
        this.isActive1 = false;
        this.isActive2 = false;
        this.isActive3 = true;
      }
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
/**
@ Mobile First Design
 */

.sec-2 {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding-top: rem(128);
  background-color: $coal;
  @include break-up(small) {
    flex-direction: row;
    align-items: initial;
    justify-content: center;
  }

  &__account-status {
    position: absolute;
    top: 0;
    width: 100%;
    height: rem(128);
    padding: 0 rem(15);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: $coal-dark;
    z-index: 331;
    @include break-up(small) {
      height: rem(80);
    }

    .status-inside-active {
      @include break-up(small) {
        width: rem(1040);
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
      }
      .part-1,
      .part-2,
      .part-3 {
        display: flex;
        justify-content: space-between;
        margin-bottom: rem(3);
        @include break-up(small) {
          justify-content: flex-end;
        }

        .title {
          font-size: rem(18);
          line-height: rem(21);
          font-weight: 600;
          margin-right: rem(10);
        }
        .content {
          text-align: right;
          font-weight: 600;
          color: #00ff47;
        }
      }
      .part-1 {
        @include break-up(small) {
          display: initial;

          .content {
            text-align: left;
          }
        }
      }
    }

    .status-inside-inactive {
      @include break-up(small) {
        width: rem(1040);
        margin: 0 auto;
      }

      .title,
      .content {
        font-size: rem(18);
        line-height: rem(21);
        font-weight: 600;
      }
      .content {
        color: red;
      }
    }
  }

  // ========= Free Services =========
  &__free {
    width: rem(381);
    border-radius: rem(15);
    margin-top: rem(30);
    margin-bottom: rem(25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 331;
    @include break-up(small) {
      width: rem(400);
      margin-top: rem(75);
      margin-bottom: rem(85);
      margin-right: rem(30);
    }

    .header {
      height: rem(82);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #262d4a;
      border-radius: rem(15) rem(15) 0 0;

      h1 {
        text-transform: uppercase;
        font-size: rem(24);
        line-height: rem(28);
        margin-bottom: rem(4);
      }

      p {
        font-size: rem(12);
        line-height: rem(14);
      }
    }

    .details {
      padding-top: rem(37);
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 0 0 rem(15) rem(15);
      background-color: $purple-dark;

      .checklist {
        width: rem(228);
        margin-bottom: rem(34.42);
        @include break-up(small) {
          margin-bottom: rem(244.42);
        }

        .check {
          display: flex;
          justify-content: space-between;
          align-items: center;
          &:not(:last-child) {
            margin-bottom: rem(18);
          }
          .text {
            font-size: rem(14);
            line-height: rem(16);
          }
        }
      }

      .current-text {
        font-size: rem(14);
        line-height: rem(16);
        margin-bottom: rem(18);
      }
    }
  }

  // ========= Premium Services ==========
  &__premium {
    width: rem(381);
    border-radius: rem(15);
    margin-bottom: rem(30);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 331;
    @include break-up(small) {
      width: rem(400);
      margin-top: rem(75);
      margin-bottom: rem(85);
    }

    .header {
      height: rem(82);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: $purple-2;
      border-radius: rem(15) rem(15) 0 0;

      h1 {
        text-transform: uppercase;
        font-size: rem(24);
        line-height: rem(28);
        margin-bottom: rem(4);
      }

      p {
        font-size: rem(12);
        line-height: rem(14);
      }
    }

    .details {
      padding-top: rem(37);
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 0 0 rem(15) rem(15);
      background-color: $purple-dark;

      .checklist {
        width: rem(228);
        margin-bottom: rem(36.64);

        .check {
          display: flex;
          justify-content: space-between;
          align-items: center;
          &:not(:last-child) {
            margin-bottom: rem(18);
          }
          .text {
            font-size: rem(14);
            line-height: rem(16);
          }
        }
      }

      .current-text {
        font-size: rem(14);
        line-height: rem(16);
        margin-bottom: rem(18);
      }
    }
  }

  // ====== Time and Price Of Premium Service =======
  &__time-price {
    display: flex;
    justify-content: space-between;
    width: rem(340);
    margin-bottom: rem(30);
    z-index: 331;

    > div {
      width: rem(100);
      height: rem(125);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: rem(12);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    ._1m,
    ._6m,
    ._12m {
      .time {
        font-size: rem(12);
        line-height: rem(14);
        margin-bottom: rem(2);
      }
      .price {
        font-size: rem(18);
        line-height: rem(21);
        margin-bottom: rem(4);
      }
    }
    ._6m,
    ._12m {
      .discount {
        font-size: rem(14);
        line-height: rem(16);
      }
    }
    ._1m,
    ._6m,
    ._12m {
      position: relative;
      cursor: pointer;
      background: #262e4d;
      .tick-icon {
        position: absolute;
        top: rem(-8);
        right: rem(-8);
        width: rem(26);
        height: rem(26);
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        border-radius: 50%;
      }
    }
    .active {
      background-color: $purple-2;
    }
  }

  &__upgrade-btn {
    margin-bottom: rem(54);
    z-index: 331;

    button {
      width: rem(164);
      height: rem(32);
      color: #fff;
      background-color: $purple-2;
      border-radius: rem(50);
      border: none;
      outline: none;
      font-size: rem(18);
      line-height: rem(21);
    }
  }

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
        top: rem(105);
      }
    }
    .layer-2 {
      width: rem(180);
      height: rem(180);
      right: 0;
      top: 0;
      @include break-up(small) {
        width: rem(390);
        height: rem(390);
      }
    }
    .layer-3 {
      width: rem(180);
      height: rem(180);
      right: 0;
      bottom: 0;
      @include break-up(small) {
        display: none;
      }
    }
  }
}
</style>