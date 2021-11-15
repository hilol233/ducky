<template>
  <!-- <transition name="asking"> -->
  <div class="user-roblox">
    <button class="user-roblox__close-btn" @click="closeModal">
      <img src="~assets/icons/close-icon.svg" alt="close" />
    </button>

    <div class="user-roblox__item-info">
      <div class="details">
        <h1 class="name">Item Name : {{ findAccModalData.name }} </h1>
        <div class="desc">Item Description : {{ findAccModalData.description }} </div>
        <div v-if="findAccModalData.sold_by" class="username">Sold By <span>{{ findAccModalData.sold_by }}</span></div>
        <div class="rap-text">Rap</div>
        <div class="rap-amount">99.9K</div>
      </div>
      <div class="price">${{ findAccModalData.price }}</div>
    </div>

    <img
      class="user-roblox__char"
      src="~assets/vectors/char-2.svg"
      alt="character"
    />
    <div class="user-roblox__asking">
      <h2>Is {{ usernameChecked.name }} your Roblox account?</h2>
      <div class="options">
        <button @click="yesRoblox" class="yes">Yes</button>
        <button @click="noRoblox" class="no">No</button>
      </div>
    </div>
  </div>
  <!-- </transition> -->
</template>

<script>
export default {
  computed: {
    findAccModalData() {
      return this.$store.getters["modals/findAccModalData"];
    },
    usernameChecked () {
      return this.$store.getters["auth/usernameChecked"];
    },
  },
  methods: {
    closeModal() {
      this.$store.commit("modals/OPEN_FEATURED_ITEM_MODAL");
      this.$store.commit("modals/CLOSE_FEAT_ITEM_MODAL");
      this.$store.commit("auth/USERNAME_CHECKED", {});
    },
    yesRoblox() {
      this.$store.commit("modals/OPEN_SUPPORT_FAV_MODAL");
    },
    noRoblox() {
      this.$store.commit("modals/CLOSE_USER_ROBLOX_MODAL");
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

// .asking-enter {
//   transform: translateX(-100%);
//   opacity: 0;
// }
// .asking-leave-to {
//   opacity: 0;
//   transform: translateX(100%);
// }
// .asking-leave-active,
// .asking-enter-active {
//   transition: all 0.17s ease-in-out;
// }
// .asking-leave,
// .asking-enter-to {
//   opacity: 1;
//   transform: translateX(0%);
// }

.user-roblox {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #fff;
  background-color: $purple-dark;
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
    width: rem(381);
    height: rem(381);
    margin-top: rem(-30);
    margin-bottom: rem(17);
    @include break-up(small) {
      margin-top: rem(-112);
    }
  }

  &__asking {
    width: rem(291);
    display: flex;
    flex-direction: column;
    align-items: center;
    @include break-up(small) {
      margin-top: rem(-45);
      margin-bottom: rem(97);
    }

    h2 {
      font-size: rem(17);
      line-height: rem(20);
      margin-bottom: rem(20);
    }

    .options {
      width: rem(235);
      display: flex;
      justify-content: space-between;

      > button {
        width: rem(90);
        height: rem(40);
        color: #fff;
        border: none;
        outline: none;
        font-size: rem(18);
        line-height: rem(21);
        cursor: pointer;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: rem(50);
      }
      .yes {
        background-color: $purple;
        &:hover {
          color: $purple;
          background-color: #fff;
          border: rem(2) solid $purple;
        }
      }
      .no {
        background: #cd4040;
        &:hover {
          color: #cd4040;
          background-color: #fff;
          border: rem(2) solid #cd4040;
        }
      }
    }
  }
}
</style>