<template>
  <div class="help">
    <div class="help__inside">
      <img
        src="~assets/icons/help-icon.svg"
        alt="help"
        class="help__help-sign"
      />

      <h3 class="help__title">Did you know?</h3>

      <div class="help__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        facilisis nisl ut arcu mollis tempus.
      </div>

      <button @click="okClick" class="help__ok-btn">OK</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    okClick() {
      this.$emit("vanish", false);
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

.help {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(rem(3));
  background-color: rgba(0, 0, 0, 0.479);

  &__inside {
    width: rem(381);
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: $purple-dark;
    border-radius: rem(25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    @include break-up(small) {
      width: rem(640);
    }
  }

  &__help-sign {
    margin-top: rem(30);
    margin-bottom: rem(20);
  }

  &__title {
    font-size: rem(17);
    line-height: rem(20);
    margin-bottom: rem(20);
  }

  &__text {
    width: rem(331);
    font-size: rem(17);
    line-height: rem(20);
    text-align: center;
    margin-bottom: rem(15);
    @include break-up(small) {
      width: rem(379);
    }
  }

  &__ok-btn {
    width: rem(90);
    height: rem(40);
    border-radius: rem(50);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: #fff;
    border: none;
    outline: none;
    margin-bottom: rem(30);
    background-color: $purple;
    cursor: pointer;
  }
}
</style>