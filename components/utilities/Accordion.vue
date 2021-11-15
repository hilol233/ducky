<template>
  <div
    class="accordion"
    :class="open ? 'accordion open' : 'accordion'"
    @click="$emit('toggleOpen', index)"
  >
    <div class="accordion__question" @click="isDown = !isDown">
      <h2 class="title">{{ faq.question }}</h2>
      <img
        :class="open ? 'down chev-up' : 'down'"
        src="../../assets/icons/chevron-down.svg"
        alt="accordion down"
      />
    </div>
    <div class="accordion__line"></div>
    <div class="accordion__answer" :class="{ active: isDown }">
      <p>{{ faq.answer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["faq", "index", "open"],
  data() {
    return {
      isDown: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/variables";
@import "~assets/scss/mixins";
/**
@ Mobile First Design
 */

.accordion {
  &__question {
    display: flex;
    justify-content: space-between;
    margin-bottom: rem(12);
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    @include break-up(small) {
      margin-bottom: rem(6);
    }

    .title {
      font-size: rem(12);
      line-height: rem(14);
      @include break-up(small) {
        font-size: rem(17);
        line-height: rem(20);
      }
    }

    .down {
      transition: transform 0.4s ease-in-out;
    }
  }

  &__line {
    height: rem(1);
    background: linear-gradient(90deg, #a4a4a4 0%, rgba(196, 196, 196, 0) 100%);
  }

  &__answer {
    margin-bottom: rem(20);
    max-height: 0;
    opacity: 0;
    overflow-y: hidden;
    transition: all 0.4s ease-in-out;
  }
  &__answer p {
    font-size: rem(10);
    line-height: rem(12);
    text-align: justify;
    letter-spacing: 0.05em;
    padding-top: rem(20);
    @include break-up(small) {
      font-size: rem(14);
      line-height: rem(16);
    }
  }
}
.accordion.open .accordion__answer {
  opacity: 1;
  max-height: rem(1000);
}
.chev-up {
  transform: rotate(180deg);
}
</style>
