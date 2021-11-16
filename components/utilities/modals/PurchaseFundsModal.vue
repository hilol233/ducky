<template>
  <div class="purchase-modal" @click="close">
    <div class="purchase-modal__inside" v-if="purchaseModal">
      <button class="purchase-modal__close-btn" @click="closeModal">
        <img src="~assets/icons/close-icon.svg" alt="close" />
      </button>

      <div class="purchase-modal__title-desc">
        <div class="title">Purchase Funds</div>
        <div class="desc">
          <div class="title">Available</div>
          <div class="content">R$ 999.9K</div>
        </div>
      </div>

      <!-- Money Icon -->
      <img
        src="~assets/icons/money-icon-3.svg"
        alt="money"
        class="money-icon"
      />

      <!-- Custom Amount -->
      <div class="purchase-modal__custom-amount">
        <div class="title">Type in a custom amount</div>
        <div class="amount-input">
          <input type="text" placeholder="Amount in Robux" />
        </div>
        <div class="worth">Worth $0.0</div>
      </div>

      <!-- Buy Button -->
      <button class="purchase-modal__buy-btn" @click="purchase">Buy Now</button>
    </div>
  </div>
  <!-- </transition> -->
</template>

<script>
export default {
  computed: {
    purchaseFundModalOpen() {
      return this.$store.getters["modals/purchaseFundModalOpen"];
    },
    purchaseModal() {
      return this.$store.getters["modals/purchaseModalOpen"];
    },
    // Modals opeing control
  },
  methods: {
    purchase() {
      // close purchase funds modal
      this.$store.commit("modals/OPEN_PURCHASE_FUND_MODAL");
      this.$store.commit("modals/CLOSE_PURCHASE_MODAL");
    },
    closeModal() {
      this.$store.commit("modals/OPEN_PURCHASE_FUND_MODAL");
      this.$store.commit("modals/CLOSE_PURCHASE_MODAL");
    },
    close(e) {
      const arr = [];
      const modal = e.target.classList;
      for (let i = 0; i < modal.length; i++) {
        arr.push(modal[i]);
      }

      if (arr.includes("purchase-modal")) {
        this.$store.commit("modals/OPEN_PURCHASE_FUND_MODAL");
        this.$store.commit("modals/CLOSE_PURCHASE_MODAL");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";
@import "~assets/scss/mixins";
/**
@ Mobile First Design
 */

.purchase-modal {
  position: fixed;
  top: 0%;
  right: 0;
  left: 0;
  height: 100vh;
  color: #fff;
  display: flex;
  z-index: 1003;
  @include break-up(small) {
    justify-content: center;
    align-items: center;
    margin-top: rem(100);
    height: calc(100vh - rem(100));
  }

  &__inside {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: $purple-dark;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @include break-up(small) {
      width: rem(700);
      height: auto;
      border-radius: rem(25);
    }
  }

  &__close-btn {
    position: absolute;
    right: rem(20);
    top: rem(20);
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
  }

  &__title-desc {
    width: rem(351);
    margin-top: rem(70);
    margin-bottom: rem(69);
    display: flex;
    justify-content: space-between;
    @include break-up(small) {
      width: rem(580);
      margin-top: rem(62);
      margin-bottom: rem(13);
    }

    .title {
      font-size: rem(22);
      line-height: rem(26);
    }

    .desc {
      text-align: right;
      .title {
        font-size: rem(14);
        line-height: rem(16);
      }
      .content {
        font-size: rem(17);
        line-height: rem(20);
        color: $purple-2;
      }
    }
  }
  .money-icon {
    width: rem(123);
    height: rem(92.59);
    margin-bottom: rem(72.41);
    @include break-up(small) {
      margin-bottom: rem(42.41);
    }
  }

  // ====== Custom Amount ======
  &__custom-amount {
    width: rem(271);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: rem(41);
    @include break-up(small) {
      margin-bottom: rem(32);
    }

    .title {
      font-size: rem(17);
      line-height: rem(20);
      margin-bottom: rem(16);
    }

    .amount-input {
      width: 100%;
      height: rem(40);
      padding: rem(12) rem(15);
      background: $navy-blue;
      margin-bottom: rem(29);
      border: 1px solid #fff;
      border-radius: rem(50);
      @include break-up(small) {
        width: rem(419);
        margin-bottom: rem(25);
      }

      input {
        width: 100%;
        border: none;
        outline: none;
        background: none;
        font-size: rem(14);
        line-height: rem(16);
        color: #fff;
        display: flex;
        align-items: center;
      }

      ::placeholder {
        color: #fff;
      }
    }

    .worth {
      font-size: rem(17);
      line-height: rem(20);
    }
  }

  // ====== Buy Button =======
  &__buy-btn {
    width: rem(200);
    height: rem(40);
    border: none;
    outline: none;
    color: #fff;
    font-size: rem(18);
    line-height: rem(21);
    background-color: $purple;
    border-radius: rem(50);
    cursor: pointer;
    margin-bottom: rem(129);
  }
}
</style>