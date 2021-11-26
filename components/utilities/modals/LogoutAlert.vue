<template>
  <div class="l-alert">
    <div class="l-alert__part-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 33 41.25"
        enable-background="new 0 0 33 33"
        xml:space="preserve"
      >
        <path
          d="M31.911,26.285L19.836,3.085c-0.781-1.501-1.997-2.361-3.336-2.361s-2.555,0.86-3.336,2.361L1.089,26.284  c-0.759,1.458-0.786,2.968-0.072,4.143c0.713,1.176,2.064,1.85,3.708,1.85h23.551c1.644,0,2.995-0.674,3.708-1.85  C32.697,29.251,32.67,27.742,31.911,26.285z M29.389,28.853c-0.15,0.244-0.566,0.389-1.113,0.389H4.725  c-0.547,0-0.963-0.145-1.112-0.386c-0.149-0.246-0.086-0.683,0.168-1.171L15.855,4.486c0.109-0.209,0.23-0.388,0.35-0.518  L16.5,3.647l0.295,0.321c0.119,0.13,0.24,0.309,0.349,0.517L29.22,27.686C29.474,28.173,29.537,28.609,29.389,28.853z"
        />
        <path
          d="M17.789,21.381c-0.095,0.663-0.675,1.206-1.289,1.206c-0.615,0-1.195-0.543-1.289-1.206l-1.23-8.681  c-0.234-1.66,0.898-3.019,2.52-3.019s2.754,1.358,2.52,3.019L17.789,21.381z"
        />
        <circle cx="16.5" cy="25.815" r="1.867" />
        <text
          x="0"
          y="48"
          fill="#ffffff"
          font-size="5px"
          font-weight="bold"
          font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
        >
          Created by Thuy Nguyen
        </text>
        <text
          x="0"
          y="53"
          fill="#ffffff"
          font-size="5px"
          font-weight="bold"
          font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif"
        >
          from the Noun Project
        </text>
      </svg>
    </div>
    <div class="l-alert__part-2">
      <h2>Are you sure to logout ?</h2>
      <div class="buttons">
        <button class="cancel" @click="cancelLogout">Cancel</button>
        <button class="yes" @click="yesLogout">Yes</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    cancelLogout() {
      this.$store.commit("auth/LOGOUT_ALERT");
    },
    yesLogout() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      this.$store.commit("auth/LOGIN");
      this.$router.push("/");

      this.$store.commit("auth/LOGOUT_ALERT");
    },
  },
};
</script>

<style lang='scss' scoped>
@import "~assets/scss/variables";
@import "~assets/scss/mixins";
/**
@ PC first design
 */
.l-alert {
  // border: 1px solid magenta;
  min-height: rem(220);
  width: rem(450);

  &__part-1 {
    // border: 1px solid yellow;
    background-color: $tomato;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: rem(115);
    border-radius: rem(7) rem(7) 0 0;
    svg {
      // border: 1px solid yellow;
      position: relative;
      top: rem(10);
      height: rem(100);
      path,
      circle {
        fill: #ffffff;
      }
    }
  }

  &__part-2 {
    min-height: rem(105);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $coal-light;
    border-radius: 0 0 rem(7) rem(7);

    h2 {
      margin-bottom: rem(8);
    }

    .buttons {
      button {
        font-size: rem(18);
        font-weight: bold;
        padding: rem(4) rem(18);
        border-radius: rem(50);
        border: none;
        outline: none;
      }
      .cancel {
        margin-right: rem(5);
        border: rem(2) solid #ffffff;
        background-color: #fff;

        &:hover {
          // background-color: rgb(92, 92, 92);
          // color: #fff;
          cursor: pointer;
        }
      }
      .yes {
        margin-left: rem(5);
        color: #fff;
        border: rem(2) solid $tomato;
        background-color: $tomato;

        &:hover {
          color: $tomato;
          background-color: #fff;
          cursor: pointer;
        }
      }
    }
  }
}
</style>