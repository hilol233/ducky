<template>
  <nav class="navbar" @click="clickOutside($event)">
    <div class="navbar__navbar-obj">
      <nuxt-link class="logo-btn" to="/"
        ><img src="../assets/logo.svg" alt="logo"
      /></nuxt-link>

      <!-- Search input -->
      <div class="navbar__search-div">
        <input type="text" placeholder="Search..." />
        <img src="../assets/icons/search-icon.svg" alt="search-icon" />
      </div>

      <!-- Nav Menu -->
      <div class="navbar__nav-menu">
        <nuxt-link to="/" class="home-btn">
          <img src="../assets/icons/home-icon.svg" alt="home-icon" />
          <span>Home</span>
        </nuxt-link>
        <nuxt-link :to="{ name: 'index', hash: '#market' }" class="market-btn">
          <img src="../assets/icons/market-icon.svg" alt="market-icon" />
          <span>Market</span>
        </nuxt-link>
        <nuxt-link to="/history" class="history-btn">
          <img src="../assets/icons/history-icon.svg" alt="history-icon" />
          <span>History</span>
        </nuxt-link>
        <nuxt-link :to="{ name: 'faq', hash: '#support' }" class="support-btn">
          <img src="../assets/icons/support-icon.svg" alt="support-icon" />
          <span>Support</span>
        </nuxt-link>
        <nuxt-link to="/faq" class="faq-btn">
          <img src="../assets/icons/faq-icon.svg" alt="faq-icon" />
          <span>FAQ</span>
        </nuxt-link>
        <button
          class="account-btn drop"
          @click="toggleDropdown"
          v-if="isLoggedIn"
        >
          <img
            class="drop"
            src="../assets/icons/user-icon.svg"
            alt="user-icon"
          />
          <span class="drop"
            >Account
            <img
              src="~assets/icons/dropdown-icon.svg"
              alt="dropdown"
              class="dropdown drop"
          /></span>
          <transition name="dropdown">
            <div class="dropdown-list" v-if="accDropdownOpen">
              <button @click="$router.push('/dashboard')">
                <img
                  src="~/assets/icons/dropdownMenus/dashboard.svg"
                  alt="Dashboard icon"
                />
                Dashboard
              </button>
              <button @click="$router.push('/roblox-accounts')">
                <img
                  src="~/assets/icons/dropdownMenus/accounts.svg"
                  alt="Dashboard icon"
                />
                Accounts
              </button>
              <button @click="$router.push('/subscription')">
                <img
                  src="~/assets/icons/dropdownMenus/subscription.svg"
                  alt="Dashboard icon"
                />
                Subscriptions
              </button>
              <button @click="$router.push('/settings')">
                <img
                  src="~/assets/icons/dropdownMenus/settings.svg"
                  alt="Dashboard icon"
                />
                Settings
              </button>
              <button @click="$router.push('/boosts')">
                <img
                  src="~/assets/icons/dropdownMenus/boost.svg"
                  alt="Dashboard icon"
                />
                Purchase Boosts
              </button>
              <button @click="logoutClick" v-if="isLoggedIn">
                <img
                  src="~/assets/icons/dropdownMenus/logout.svg"
                  alt="Dashboard icon"
                />
                Log Out
              </button>
            </div>
          </transition>
        </button>
      </div>

      <!-- Balance Counting====== -->
      <div class="navbar__right-side">
        <div class="navbar__auth" v-if="!isLoggedIn">
          <button
            class="login"
            :disabled="isAuthBtnDisabled"
            @click="promptLoginModal"
          >
            Login
          </button>
        </div>
        <div class="navbar__balance" v-else>
          <div class="title">Balance</div>
          <div class="counting">$967.64</div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div class="navbar__mobile-menu">
        <button class="open-btn" @click="openHamburger" v-if="isOpenHamburger">
          <img
            class="hamburger-menu"
            src="../assets/icons/hamburger-menu.svg"
            alt="hamburger menu"
          />
        </button>
        <button class="close-btn" @click="openHamburger" v-else>
          <img
            class="hamburger-close"
            src="../assets/icons/hamburger-close.svg"
            alt="hamburger menu"
          />
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import Transaction from "./utilities/Transaction.vue";
export default {
  components: { Transaction },
  computed: {
    isOpenHamburger() {
      return this.$store.state.isOpenHamburger;
    },
    accDropdownOpen() {
      return this.$store.getters["others/accDropdownOpen"];
    },
    isLoggedIn() {
      return this.$store.getters["auth/isLoggedIn"];
    },
    isAuthBtnDisabled() {
      return this.$store.getters["auth/isAuthBtnDisabled"];
    },
  },
  methods: {
    logoutClick() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      this.$store.commit("auth/LOGIN");
      this.$router.push("/");
    },
    openHamburger() {
      this.$store.commit("TOGGLE_HAMBURGER");
    },
    promptLoginModal() {
      if (
        this.$route.path === "/" ||
        this.$route.path === "/faq" ||
        this.$route.path === "/privacy-policy" ||
        this.$route.path === "/subscription" ||
        this.$route.path === "/terms-of-service"
      ) {
        this.$store.dispatch("auth/startBlinking");
        // this.$store.commit("auth/AUTH_OPEN_CLOSE");
        this.$store.commit("auth/OPEN_LOGIN");
      }
    },
    toggleDropdown() {
      this.$store.commit("others/TOGGLE_DROPDOWN");
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

.invisible {
  transform: translateY(calc(-100% - rem(60)));
}

.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  height: 6.25rem;
  color: white;
  background-color: $purple-3;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @include break-down(small) {
    height: rem(60);
  }

  &__navbar-obj {
    // border: 1px solid magenta;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 6.25rem);
    margin: 0 auto;
    @include break-down(small) {
      width: calc(100% - 1.25rem);
      margin: 0 auto;
    }

    .logo-btn {
      @include break-down(small) {
        width: rem(200);
        height: rem(39.5);
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  // =========== Mobile Menu ============
  &__mobile-menu {
    > button {
      width: rem(25);
      height: rem(20);
      margin-right: rem(45);
      border: none;
      outline: none;
      background: none;
    }
    .open-btn {
      animation: openmove 0.3s ease-out;
    }
    .close-btn {
      animation: closemove 0.3s ease-in;
    }
    @keyframes openmove {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(180deg);
      }
    }
    @keyframes closemove {
      from {
        transform: rotate(180deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
    .hamburger-menu {
      width: 100%;
      height: 100%;
    }
    @include break-up(small) {
      display: none;
    }
  }

  // ============ Search ============
  &__search-div {
    @include break-down(small) {
      display: none;
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: rem(247);
    height: rem(40);
    background: none;
    border: 1px solid white;
    border-radius: 50px;

    ::placeholder {
      color: white;
    }

    input {
      color: white;
      font-size: rem(14);
      border: none;
      outline: none;
      background: none;
      margin-left: rem(17);
    }
    img {
      margin-right: rem(13.31);
    }
  }

  // ============ Nav Menu ============
  &__nav-menu {
    @include break-down(small) {
      display: none;
    }
    display: grid;
    grid-template-columns: repeat(6, auto);
    gap: rem(30);

    a {
      color: white;
      border: none;
      outline: none;
      background: none;

      span {
        position: relative;
        bottom: rem(5);
        margin-left: rem(5);
        font-size: rem(14);
      }
    }

    .account-btn {
      position: relative;
      background: none;
      color: #fff;
      border: none;
      outline: none;
      display: flex;
      align-items: center;
      cursor: pointer;

      span {
        margin-left: rem(9);
        img {
          width: rem(10);
          height: rem(10);
          margin-left: rem(3.66);
        }
      }
      .dropdown-list {
        position: absolute;
        top: rem(30 + 12.52);
        left: rem(-65);
        width: rem(250);
        background-color: $purple-3;
        border: 1px solid #403063;
        padding: rem(8);
        border-radius: rem(5);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        > button {
          // border: 1px solid magenta;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          width: 100%;
          text-align: right;
          background: none;
          color: #fff;
          padding: rem(6) rem(13);
          border: none;
          outline: none;
          cursor: pointer;
          margin-right: rem(13);
          font-size: rem(16);
          line-height: rem(16);
          letter-spacing: 0.05em;
          border-radius: rem(8);
          &:not(:last-child) {
            margin-bottom: rem(8);
          }

          &:hover {
            background-color: $purple-thick;
          }

          img {
            width: rem(25);
            height: rem(25);
            margin-right: rem(15);
          }
        }
      }

      .dropdown-enter,
      .dropdown-leave-to {
        transform: translateY(-10%);
        opacity: 0;
      }
      .dropdown-enter-active,
      .dropdown-leave-active {
        transition: all 0.2s ease-in-out;
      }
      .dropdown-leave,
      .dropdown-enter-to {
        transform: translateY(0%);
        opacity: 1;
      }
    }
  }

  //============ Right Side =============
  &__right-side {
    @include break-down(small) {
      display: none;
    }
  }

  // ============ Balance Counting ==============
  &__balance {
    .title {
      text-align: center;
      font-size: rem(10);
      text-transform: uppercase;
    }
    .counting {
      font-weight: bold;
      font-size: 17px;
      line-height: 20px;
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