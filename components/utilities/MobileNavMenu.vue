<template>
  <div class="navbar">
    <div class="navbar__mobile-nav-menu">
      <!-- Search input -->
      <div class="navbar__mobile-search-div">
        <input type="text" placeholder="Search..." />
        <img src="../../assets/icons/search-icon.svg" alt="search-icon" />
      </div>

      <!-- Nav Menu -->
      <div class="navbar__mobile-nav-menu-items">
        <div>
          <button class="home-btn" @click="homeClick">
            <img src="../../assets/icons/home-icon.svg" alt="home-icon" />
            <span>Home</span>
          </button>
          <button class="market-btn" @click="marketClick">
            <img src="../../assets/icons/market-icon.svg" alt="market-icon" />
            <span>Market</span>
          </button>
          <button class="history-btn" @click="historyClick">
            <img src="../../assets/icons/history-icon.svg" alt="history-icon" />
            <span>History</span>
          </button>
          <button class="support-btn" @click="supportClick">
            <img src="../../assets/icons/support-icon.svg" alt="support-icon" />
            <span>Support</span>
          </button>
          <button class="faq-btn" @click="faqClick">
            <img src="../../assets/icons/faq-icon.svg" alt="faq-icon" />
            <span>FAQ</span>
          </button>
          <button
            v-if="isLoggedIn"
            class="account-btn"
            @click="accDropdown = !accDropdown"
          >
            <img
              class="icon"
              src="~assets/icons/user-icon.svg"
              alt="user-icon"
            />
            <span>Account </span>
            <img
              src="~assets/icons/dropdown-icon.svg"
              alt="dropdown"
              class="dropdown"
            />
            <div class="dropdown-list" v-if="accDropdown">
              <button @click="dashClick">Dashboard</button>
              <button @click="accClick">Accounts</button>
              <button @click="subClick">Subscriptions</button>
              <button @click="settingsClick">Settings</button>
              <button @click="boostsClick">Purchase Boosts</button>
              <button @click="logoutClick" v-if="isLoggedIn">Log Out</button>
            </div>
          </button>
        </div>
      </div>

      <!-- Balance and Auth -->
      <div class="navbar__balance-auth" v-if="!accDropdown">
        <div class="navbar__balance" v-if="isLoggedIn">
          <div class="title">Balance</div>
          <div class="counting">$967.64</div>
        </div>
        <div class="navbar__auth" v-else>
          <button class="login" @click="promptLoginModal">Login</button>
        </div>
      </div>

      <!-- Layer vector cvg images -->
      <img
        class="layer1-mobile layer"
        src="../../assets/icons/layer1-icon.svg"
        alt="layer1 vector"
      />
      <img
        class="layer3-mobile layer"
        src="../../assets/icons/layer3-icon.svg"
        alt="layer2 vector"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accDropdown: false,
    };
  },
  computed: {
    isOpenHamburger() {
      return this.$store.state.isOpenHamburger;
    },
    isLoggedIn() {
      return this.$store.getters["auth/isLoggedIn"];
    },
  },
  watch: {
    isOpenHamburger() {
      if (this.isOpenHamburger === false) {
        this.accDropdown = false;
      }
    },
  },
  methods: {
    homeClick() {
      this.$store.commit("TOGGLE_HAMBURGER");
      this.$router.push("/");
    },
    marketClick() {
      this.$store.commit("TOGGLE_HAMBURGER");
      this.$router.push({ name: "index", hash: "#market" });
    },
    historyClick() {
      this.$store.commit("TOGGLE_HAMBURGER");
      this.$router.push("/history");
    },
    supportClick() {
      this.$store.commit("TOGGLE_HAMBURGER");
      this.$router.push({ name: "faq", hash: "#support" });
    },
    faqClick() {
      this.$store.commit("TOGGLE_HAMBURGER");
      this.$router.push("/faq");
    },
    promptLoginModal() {
      if (
        this.$route.path === "/" ||
        this.$route.path === "/faq" ||
        this.$route.path === "/privacy-policy" ||
        this.$route.path === "/subscription" ||
        this.$route.path === "/terms-of-service"
      ) {
        this.$store.commit("auth/AUTH_OPEN_CLOSE");
        this.$store.commit("auth/OPEN_LOGIN");
      }
    },

    // Account Btn
    dashClick() {
      this.$router.push("/dashboard");
      this.$store.commit("TOGGLE_HAMBURGER");
    },
    accClick() {
      this.$router.push("/roblox-accounts");
      this.$store.commit("TOGGLE_HAMBURGER");
    },
    subClick() {
      this.$router.push("/subscription");
      this.$store.commit("TOGGLE_HAMBURGER");
    },
    settingsClick() {
      this.$router.push("/settings");
      this.$store.commit("TOGGLE_HAMBURGER");
    },
    boostsClick() {
      this.$router.push("/boosts");
      this.$store.commit("TOGGLE_HAMBURGER");
    },
    logoutClick() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      this.$store.commit("auth/LOGIN");
      this.$router.push("/");
      this.$store.commit("TOGGLE_HAMBURGER");
    },
  },
};
</script>

<style lang='scss' scoped>
@import "~assets/scss/variables";
@import "~assets/scss/mixins";

.navbar {
  transition: all 0.3s ease-in-out;
  overflow-y: scroll;
  &__mobile-nav-menu {
    position: fixed;
    right: 0;
    left: 0;
    height: 100vh;
    padding-top: rem(60);
    background-color: $coal;

    z-index: 1000;

    // ============ Layer Circle Vectors ==============
    .layer {
      position: absolute;
      z-index: 280;
    }
    .layer1-mobile {
      width: rem(180);
      height: rem(360);
      top: rem(139);
    }
    .layer3-mobile {
      width: rem(180);
      height: rem(180);
      bottom: 0;
      right: 0;
    }
  }

  &__mobile-search-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: rem(314);
    height: rem(40);
    margin: rem(35) auto rem(39) auto;
    background: none;
    border: 1px solid white;
    border-radius: 50px;
    z-index: 281;

    ::placeholder {
      color: white;
    }

    input {
      color: white;
      font-size: rem(14);
      font-weight: 300;
      border: none;
      outline: none;
      background: none;
      margin-left: rem(17);
    }
    img {
      margin-right: rem(13.31);
    }
  }

  &__mobile-nav-menu-items {
    // border: 1px solid yellow;
    position: relative;
    z-index: 281;
    text-align: right;
    display: flex;
    justify-content: flex-end;

    > div {
      // border: 1px solid red;
      width: rem(101);
      margin-right: rem(71);

      > button {
        border: none;
        width: 100%;
        outline: none;
        background: none;
        color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: rem(14);
        line-height: rem(16);

        &:not(:last-child) {
          margin-bottom: rem(35);
        }

        img {
          display: block;
          height: rem(24);
        }
        span {
          display: block;
        }
      }

      .account-btn {
        // border: 1px solid yellow;
        position: relative;
        border: none;
        outline: none;
        background: none;
        color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;

        .icon {
          margin-right: initial;
        }
        .dropdown {
          width: rem(10);
          height: rem(10);
        }
        .dropdown-list {
          position: absolute;
          top: rem(24 + 12);
          right: 0;
          width: rem(122);

          > button {
            position: relative;
            display: block;
            width: 100%;
            text-align: right;
            background: none;
            color: #fff;
            padding-bottom: rem(6);
            border: none;
            outline: none;
            cursor: pointer;
            margin-right: rem(13);
            font-size: rem(14);
            line-height: rem(16);
            letter-spacing: 0.05em;
            &:not(:last-child) {
              margin-bottom: rem(4);
            }

            &::after {
              content: "";
              position: absolute;
              bottom: 0;
              height: rem(1);
              display: block;
              width: 100%;
              background: linear-gradient(
                90deg,
                #a4a4a4 0%,
                rgba(196, 196, 196, 0) 100%
              );
              transform: rotate(180deg);
            }
          }
        }
      }
    }

    // a {
    //   display: flex;
    //   justify-content: space-between;
    //   align-items: center;
    //   &:not(:last-child) {
    //     margin-bottom: rem(40);
    //   }

    //   img {
    //     margin-right: rem(16);
    //   }
    // }
  }

  // ======== Balance and Auth =========
  &__balance-auth {
    position: absolute;
    right: rem(71);
    bottom: rem(20);
    color: #fff;
    z-index: 331;
  }
  &__balance {
    .title {
      font-size: rem(14);
      line-height: rem(16);
      text-align: right;
    }
    .counting {
      font-size: rem(17);
      line-height: rem(20);
      font-weight: bold;
      color: $purple-light;
    }
  }

  // ========== Auth Buttons ===========
  &__auth {
    > button {
      color: $purple-light;
      font-size: rem(17);
      line-height: rem(20);
      font-weight: bold;
      background: none;
      border: none;
      outline: none;
    }
  }
}
</style>