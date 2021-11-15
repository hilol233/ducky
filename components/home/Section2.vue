<template>
  <div class="sec-2" @click="clickOutside">
    <!-- Statistics box -->
    <HomeStatisticsBox class="sec-2__stat-box" v-if="!isLoggedIn" />
    <HomeLatestPurchase class="sec-2__latest-purchase" v-else />

    <!-- Circle Vectors -->
    <img
      class="sec-2__layer1 layer"
      src="../../assets/icons/layer1-icon.svg"
      alt="layer1 vector"
    />
    <img
      class="sec-2__layer2 layer"
      src="../../assets/icons/layer2-icon.svg"
      alt="layer2 vector"
    />
    <img
      class="sec-2__layer3 layer"
      src="../../assets/icons/layer3-icon.svg"
      alt="layer3 vector"
    />

    <!-- Purchase Funds -->
    <div class="sec-2__purchase-funds">
      <h2>Purchase Funds</h2>
      <div class="purchase-items">
        <PurchaseFundsItem
          v-for="(item, indx) in fundItems"
          :fundItem="item"
          :fundIndx="indx"
          :key="indx"
        />
      </div>
      <div class="custom-amount-btn">
        <button class="load-btn">Load More</button>
        <button class="custom-btn" @click="purchaseFund">Custom Amount</button>
      </div>
    </div>

    <!-- Featured Items -->
    <div class="sec-2__featured-items" id="market">
      <!-- header part -->
      <div class="header-part">
        <h1>Featured Items</h1>
        <button>
          Featured Items
          <img src="../../assets/icons/dropdown-icon.svg" alt="dropdown" />
        </button>
      </div>

      <!-- The Featured Items -->
      <div class="all-items">
        <FeaturedItem
          v-for="(item, index) in 10"
          :featureItem="featureItem"
          :featIndx="index"
          :key="index"
        />
      </div>
      <div class="load-btn">
        <button>Load More</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fundItems: [
        {
          name: "name Lorem",
          description: "description Lorem",
          money: 1000,
          icon_url: "assets/icons/money-icon-1.svg",
          price: 5.75,
        },
        {
          name: "name Lorem",
          description: "description Lorem",
          money: 5000,
          icon_url: "assets/icons/money-icon-2.svg",
          price: 28.75,
        },
        {
          name: "name Lorem",
          description: "description Lorem",
          money: 10000,
          icon_url: "assets/icons/money-icon-3.svg",
          price: 57.5,
        },
        {
          name: "name Lorem",
          description: "description Lorem",
          money: 20000,
          icon_url: "assets/icons/money-icon-4.svg",
          price: 115.0,
        },
        {
          name: "name Lorem",
          description: "description Lorem",
          money: 50000,
          icon_url: "assets/icons/money-icon-5.svg",
          price: 287.5,
        },
      ],
      featureItem: {
        id: 1,
        price: "5200",
        name: "Name Lorem",
        description: "Description Lorem",
        sold_by: "hacker",
        rap: 19.2,
        icon_url: "assets/vectors/char-1.svg",
      },
    };
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters["auth/isLoggedIn"];
    },
  },
  methods: {
    purchaseFund() {
      this.$store.commit("modals/OPEN_PURCHASE_FUND_MODAL");
      this.$store.commit("modals/OPEN_PURCHASE_MODAL");
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

.sec-2 {
  position: relative;
  background: $coal;
  color: #fff;
  padding-top: rem(172);
  padding-bottom: rem(42);
  @include break-down(small) {
    padding-top: rem(85);
    padding-bottom: rem(34);
  }

  &__latest-purchase {
    position: absolute;
    top: 0;
    width: 100%;
    transform: translateY(-50%);
    z-index: 331;
  }

  &__stat-box {
    position: absolute;
    top: 0;
    transform: translateY(-50%);
    width: 100%;
    z-index: 331;
  }

  // ========= Circle layer vectors ==========
  .layer {
    z-index: 1;
    position: absolute;
  }
  &__layer1 {
    top: rem(50);
    @include break-down(small) {
      width: rem(180);
      height: rem(360);
    }
  }
  &__layer2 {
    top: 0;
    right: 0;
    @include break-down(small) {
      width: rem(180);
      height: rem(180);
    }
  }
  &__layer3 {
    bottom: 0;
    right: 0;
    @include break-down(small) {
      width: rem(180);
      height: rem(180);
    }
  }

  // ========= Purchase Funds =========
  &__purchase-funds {
    position: relative;
    width: rem(1168);
    margin-right: auto;
    margin-left: auto;
    z-index: 150;
    @include break-down(small) {
      width: rem(327);
    }

    h2 {
      font-size: rem(24);
      line-height: rem(28);
      margin-bottom: rem(44);
      @include break-down(small) {
        font-size: rem(14);
        line-height: rem(16);
        margin-bottom: rem(36);
      }
    }

    .purchase-items {
      display: grid;
      gap: rem(27);
      grid-template-columns: repeat(5, rem(200));
      justify-content: space-between;
      margin-bottom: rem(42);
      @include break-down(small) {
        grid-template-columns: repeat(2, rem(150));
        margin-bottom: rem(34);
      }
    }

    .custom-amount-btn {
      text-align: center;
      margin-bottom: rem(55);
      @include break-down(small) {
        display: flex;
        justify-content: space-between;
      }
      .load-btn {
        width: rem(128);
        height: rem(28);
        color: #fff;
        font-size: rem(14);
        line-height: rem(16);
        font-weight: bold;
        margin-left: rem(11);

        background: $purple;
        border: none;
        outline: none;
        cursor: pointer;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 50px;
        @include break-up(small) {
          display: none;
        }

        &:hover {
          color: #6d40cd;
          background-color: #fff;
          border: rem(2) solid #6d40cd;
        }
      }
      .custom-btn {
        width: rem(250);
        height: rem(60);
        color: #fff;
        font-size: rem(18);
        line-height: rem(21);
        font-weight: bold;
        margin-right: rem(11);

        background: $purple;
        border: none;
        outline: none;
        cursor: pointer;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 50px;
        @include break-down(small) {
          font-weight: bold;
          width: rem(128);
          height: rem(28);
          font-size: rem(14);
          line-height: rem(16);
        }

        &:hover {
          color: #6d40cd;
          background-color: #fff;
          border: rem(2) solid #6d40cd;
        }
      }
    }
  }

  // ========= Featured Items ===========
  &__featured-items {
    position: relative;
    width: rem(1169);
    margin-right: auto;
    margin-left: auto;
    z-index: 150;
    @include break-down(small) {
      width: rem(327);
    }

    .header-part {
      display: flex;
      justify-content: space-between;
      margin-bottom: rem(44);
      @include break-down(small) {
        margin-bottom: rem(36);
      }

      h1 {
        font-size: rem(24);
        line-height: rem(28);
        @include break-down(small) {
          font-size: rem(14);
          line-height: rem(16);
        }
      }

      button {
        width: rem(243);
        height: rem(40);
        color: #fff;
        font-weight: 500;
        font-size: rem(18);
        line-height: rem(21);
        background: $purple-thick;
        border: none;
        outline: none;
        cursor: pointer;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: rem(50);
        @include break-down(small) {
          width: rem(131);
          height: rem(20);
          font-size: rem(12);
          line-height: rem(14);
        }

        img {
          @include break-down(small) {
            position: relative;
            top: rem(2.5);
            width: rem(12);
            height: rem(12);
          }
        }
      }
    }

    .all-items {
      display: grid;
      gap: rem(42);
      grid-template-columns: repeat(5, auto);
      justify-content: space-between;
      margin-bottom: rem(42);
      @include break-down(small) {
        gap: rem(27);
        grid-template-columns: repeat(2, auto);
        margin-bottom: rem(34);
      }
    }

    .load-btn {
      text-align: center;

      button {
        width: rem(250);
        height: rem(60);
        color: #fff;
        font-weight: bold;
        font-size: rem(18);
        line-height: rem(21);
        cursor: pointer;
        background: #6e40cd;
        border: none;
        outline: none;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: rem(50);
        @include break-down(small) {
          width: rem(128);
          height: rem(28);
          font-size: rem(14);
          line-height: rem(16);
        }

        &:hover {
          color: #6d40cd;
          background-color: #fff;
          border: rem(2) solid #6d40cd;
        }
      }
    }
  }
}
</style>