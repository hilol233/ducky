<template>
  <div class="footer" @click="clickOutside">
    <div class="footer__inside">
      <div class="footer__links">
        <nuxt-link to="/terms-of-service">Terms of Service</nuxt-link> |
        <nuxt-link to="/privacy-policy">Privacy Policy</nuxt-link>
      </div>
      <div class="footer__copyright">
        Copyright © 2021 DominusGG. All Rights Reserved
      </div>
      <div class="footer__social-links">
        <div class="discord-div">
          <a href="#" class="discord"
            ><img
              src="../assets/icons/social/discord-icon.svg"
              alt="discord icon"
          /></a>
        </div>
        <div class="instagram-div">
          <a href="#" class="instagram"
            ><img
              src="../assets/icons/social/instagram-icon.svg"
              alt="instagram icon"
          /></a>
        </div>
        <div class="twitter-div">
          <a href="#" class="twitter"
            ><img
              src="../assets/icons/social/twitter-icon.svg"
              alt="twitter icon"
          /></a>
        </div>
        <div class="youtube-div">
          <a href="#" class="youtube"
            ><img
              src="../assets/icons/social/youtube-icon.svg"
              alt="youtube icon"
          /></a>
        </div>
      </div>
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

<style lang="scss" scoped>
@import "~assets/scss/variables";
@import "~assets/scss/mixins";

.footer {
  background: $purple-dark;

  &__inside {
    width: rem(1169);
    height: rem(100);
    color: #fff;
    font-size: rem(17);
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    @include break-down(small) {
      width: inherit;
      height: rem(91);
      flex-direction: column;
      justify-content: space-around;
    }
  }

  // Footer Links
  &__links {
    line-height: rem(20);
    @include break-down(small) {
      order: 2;
      font-size: rem(12);
      line-height: rem(14);
    }
  }

  &__copyright {
    @include break-down(small) {
      order: 3;
      font-weight: 300;
      font-size: rem(12);
      line-height: rem(14);
    }
  }

  &__social-links {
    display: flex;
    justify-content: space-between;
    @include break-down(small) {
      order: 1;
    }

    > div {
      width: rem(25);
      height: rem(25);
      &:not(:last-child) {
        margin-right: rem(20);
      }
      a {
        width: 100%;
        height: 100%;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>