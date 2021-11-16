<template>
  <!-- <transition name="find-acc"> -->
  <div class="find-acc">
    <button class="find-acc__close-btn" @click="closeModal">
      <img src="~assets/icons/close-icon.svg" alt="close" />
    </button>

    <div class="find-acc__item-info">
      <div class="details">
        <h1 class="name">Item Name : {{ findAccModalData.name }}</h1>
        <div class="desc">
          Item Description : {{ findAccModalData.description }}
        </div>
        <div v-if="findAccModalData.sold_by" class="username">
          Sold By <span> {{ findAccModalData.sold_by }} </span>
        </div>
        <div class="rap-text">Rap</div>
        <div class="rap-amount">99.9K</div>
      </div>
      <div class="price">${{ findAccModalData.price }}</div>
    </div>
    <!-- 
    <img
      class="find-acc__char"
      src="~assets/vectors/char-1.svg"
      alt="character"
    /> -->
    <img
      class="find-acc__char"
      :src="findAccModalData.icon_url"
      alt="character"
    />

    <!-- Find Your Account -->
    <div class="find-acc__find-acc">
      <h2 class="title">Find your Roblox Account</h2>

      <!-- Search Roblox Account -->
      <div class="find-acc__search-acc">
        <input
          type="text"
          placeholder="Roblox Username"
          @keyup.enter="nextPage"
          v-model="username"
        />
        <img
          src="~assets/icons/search-icon.svg"
          alt="search-icon"
          @click="nextPage"
        />
      </div>
    </div>

    <!-- Account Requirements -->
    <div class="find-acc__acc-req">
      <h2>Account Requirements</h2>
      <div class="req">
        <div class="owns-small-item">
          <div class="icon">
            <img
              src="~assets/icons/contra-arrow.svg"
              alt="contradictory arrow"
            />
          </div>
          <div class="text">Owns Small Item worth less than 1.5K</div>
        </div>
        <div class="premium-acc">
          <div class="icon">
            <img src="~assets/icons/star-circle.svg" alt="star circle" />
          </div>
          <div class="text">Account is a Premium Account</div>
        </div>
        <div class="public">
          <div class="icon">
            <img src="~assets/icons/eye-blink.svg" alt="eye blink" />
          </div>
          <div class="text">Inventory and Trades are set to Public</div>
        </div>
      </div>
    </div>
  </div>
  <!-- </transition> -->
</template>

<script>
import Transaction from "../Transaction.vue";
export default {
  data() {
    return {
      username: "",
    };
  },
  components: { Transaction },
  computed: {
    findAccModalData() {
      return this.$store.getters["modals/findAccModalData"];
    },
  },
  methods: {
    closeModal() {
      this.$store.commit("modals/OPEN_FEATURED_ITEM_MODAL");
      this.$store.commit("modals/CLOSE_FEAT_ITEM_MODAL");
    },
    nextPage() {
      this.$axios
        .post("api/users/check-username", { username: this.username })
        .then((res) => {
          let data = res.data.data;
          if (!data.length >= 1) {
            return this.$toast.error("Your username was not found");
          } else {
            this.$toast.success("Your username was found");
            this.$store.commit("modals/OPEN_USER_ROBLOX_MODAL");
            this.$store.commit("auth/USERNAME_CHECKED", data[0]);
          }
        })
        .catch((res) => {
          this.$toast.error(res.response.data.message);
        });

      /*** For Frontend ***/
      // this.$store.commit("modals/OPEN_USER_ROBLOX_MODAL");
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

.find-acc {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: $purple-dark;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @include break-up(small) {
    width: rem(700);
    height: auto;
    border-radius: rem(25);
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

  &__item-info {
    width: rem(341);
    display: flex;
    margin-top: rem(70);
    justify-content: space-between;
    @include break-up(small) {
      width: rem(581);
    }

    .details {
      .name {
        font-size: rem(22);
        line-height: rem(26);
      }
      .desc {
        font-size: rem(17);
        line-height: rem(20);
        margin-bottom: rem(3);
      }
      .username {
        font-size: rem(12);
        line-height: rem(14);
        margin-bottom: rem(5);

        span {
          color: $purple-2;
        }
      }
      .rap-text {
        color: $purple-2;
        text-transform: uppercase;
        font-size: rem(24);
        line-height: rem(28);
        font-weight: 500;
      }
    }
    .price {
      font-size: rem(24);
      line-height: rem(28);
      font-weight: 500;
    }
  }

  &__char {
    width: rem(143);
    height: rem(143);
    margin-top: rem(-30);
    margin-bottom: rem(17);
    @include break-up(small) {
      margin-top: rem(-40);
    }
  }

  &__find-acc {
    margin-bottom: rem(29);
    @include break-up(small) {
      margin-bottom: rem(25);
    }
    .title {
      font-size: rem(17);
      line-height: rem(20);
      margin-bottom: rem(16);
      text-align: center;
    }
  }

  &__search-acc {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: rem(271);
    height: rem(40);
    background: $navy-blue;
    border: 1px solid white;
    border-radius: 50px;
    @include break-up(small) {
      width: rem(419);
    }

    ::placeholder {
      color: white;
    }

    input {
      color: white;
      font-size: rem(14);
      line-height: rem(16);
      font-weight: 300;
      border: none;
      outline: none;
      background: none;
      margin-left: rem(15);
      @include break-up(small) {
        margin-left: rem(21);
      }
    }
    img {
      cursor: pointer;
      margin-right: rem(13.31);
      @include break-up(small) {
        margin-right: rem(21);
      }
    }
  }

  &__acc-req {
    @include break-up(small) {
      margin-bottom: rem(35);
    }
    h2 {
      font-size: rem(17);
      line-height: rem(20);
      margin-bottom: rem(20);
      text-align: center;
    }

    .req {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: rem(340);
      height: rem(249);
      @include break-up(small) {
        flex-direction: row;
        justify-content: space-between;
        width: rem(400);
        height: auto;
      }

      > div {
        width: rem(340);
        height: rem(70);
        border-radius: rem(10);
        display: flex;
        align-items: center;
        padding: rem(10);
        background-color: $purple-thick;
        @include break-up(small) {
          flex-direction: column;
          margin-bottom: 0;
          padding: 0;
          width: rem(100);
          height: rem(150);
        }

        .icon {
          width: rem(50);
          height: rem(50);
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: $purple-2;
          border-radius: rem(12);
          margin-right: rem(20);
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          @include break-up(small) {
            width: rem(70);
            height: rem(70);
            margin-top: rem(15);
            margin-bottom: rem(12);
            margin-right: 0;
          }

          img {
            width: rem(28.57);
            height: rem(28.57);
            @include break-up(small) {
              width: rem(40);
              height: rem(40);
            }
          }
        }

        .text {
          font-size: rem(10);
          line-height: rem(12);
          font-weight: 300;
          @include break-up(small) {
            width: rem(70);
            text-align: center;
          }
        }
      }
    }
  }
}
</style>