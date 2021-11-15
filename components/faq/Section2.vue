<template>
  <div class="faq-sec2" @click="clickOutside">
    <FAQDemonstration class="faq-sec2__demonstration" />

    <!-- Getting Started -->
    <div class="faq-sec2__getting-started">
      <h2 class="title">Getting Started</h2>
      <p class="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        consectetur justo bibendum, facilisis mi sit amet, semper massa.
        Praesent mattis nisl lacus, a porta nibh sagittis a. Sed consequat,
        metus id hendrerit lacinia, sapien dui semper nulla, quis blandit dui
        augue sed arcu.
      </p>
    </div>

    <!-- Accordions -->
    <div class="faq-sec2__accordions">
      <Accordion
        class="accordion"
        v-for="(faq, inx) in faqs"
        :faq="faq"
        :index="inx"
        :open="faq.open"
        :key="inx"
        @toggleOpen="toggleOpen"
      />
    </div>

    <!-- Help Buttons -->
    <div class="faq-sec2__help" id="support">
      <h2 class="title">Still have questions</h2>
      <div class="buttons">
        <button class="discord">
          <img src="~assets/icons/discord-icon-2.svg" alt="discord icon" />
          <h3>Join us on Discord</h3>
          <p>Fastest response time</p>
        </button>
        <button class="email">
          <img src="~assets/icons/email-icon-2.svg" alt="discord icon" />
          <h3>Email Us</h3>
          <p>email@website.com</p>
        </button>
      </div>
    </div>

    <!-- Circle layer icons -->
    <div class="faq-sec2__circle-layers">
      <img
        src="../../assets/icons/layer1-icon.svg"
        alt="circle layer"
        class="layer-1 layer"
      />
      <img
        src="../../assets/icons/layer2-icon.svg"
        alt="circle layer"
        class="layer-2 layer"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqs: [
        {
          question: "Lorem ipsum dolor sit amet?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur justo bibendum, facilisis mi sit amet, semper massa. Praesent mattis nisl lacus, a porta nibh sagittis a. Sed consequat, metus id hendrerit lacinia, sapien dui semper nulla, quis blandit dui augue sed arcu. Donec id mi aliquet, lobortis turpis et, commodo magna. Integer justo nulla, consequat ac maximus quis, consectetur ac ligula.",
          open: false,
        },
        {
          question: "Lorem ipsum dolor sit amet?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur justo bibendum, facilisis mi sit amet, semper massa. Praesent mattis nisl lacus, a porta nibh sagittis a. Sed consequat, metus id hendrerit lacinia, sapien dui semper nulla, quis blandit dui augue sed arcu. Donec id mi aliquet, lobortis turpis et, commodo magna. Integer justo nulla, consequat ac maximus quis, consectetur ac ligula.",
          open: false,
        },
        {
          question: "Lorem ipsum dolor sit amet?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur justo bibendum, facilisis mi sit amet, semper massa. Praesent mattis nisl lacus, a porta nibh sagittis a. Sed consequat, metus id hendrerit lacinia, sapien dui semper nulla, quis blandit dui augue sed arcu. Donec id mi aliquet, lobortis turpis et, commodo magna. Integer justo nulla, consequat ac maximus quis, consectetur ac ligula.",
          open: false,
        },
        {
          question: "Lorem ipsum dolor sit amet?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur justo bibendum, facilisis mi sit amet, semper massa. Praesent mattis nisl lacus, a porta nibh sagittis a. Sed consequat, metus id hendrerit lacinia, sapien dui semper nulla, quis blandit dui augue sed arcu. Donec id mi aliquet, lobortis turpis et, commodo magna. Integer justo nulla, consequat ac maximus quis, consectetur ac ligula.",
          open: false,
        },
        {
          question: "Lorem ipsum dolor sit amet?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur justo bibendum, facilisis mi sit amet, semper massa. Praesent mattis nisl lacus, a porta nibh sagittis a. Sed consequat, metus id hendrerit lacinia, sapien dui semper nulla, quis blandit dui augue sed arcu. Donec id mi aliquet, lobortis turpis et, commodo magna. Integer justo nulla, consequat ac maximus quis, consectetur ac ligula.",
          open: false,
        },
        {
          question: "Lorem ipsum dolor sit amet?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent consectetur justo bibendum, facilisis mi sit amet, semper massa. Praesent mattis nisl lacus, a porta nibh sagittis a. Sed consequat, metus id hendrerit lacinia, sapien dui semper nulla, quis blandit dui augue sed arcu. Donec id mi aliquet, lobortis turpis et, commodo magna. Integer justo nulla, consequat ac maximus quis, consectetur ac ligula.",
          open: false,
        },
      ],
    };
  },
  methods: {
    toggleOpen(index) {
      this.faqs = this.faqs.map((faq, i) => {
        if (index === i) {
          faq.open = !faq.open;
        }
        return faq;
      });
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

<style lang='scss'>
@import "~assets/scss/variables";
@import "~assets/scss/mixins";
/**
@ Mobile First Design
 */

.faq-sec2 {
  position: relative;
  color: #fff;
  padding-top: rem(74);
  background-color: $coal;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include break-up(small) {
    padding-top: rem(153);
  }

  &__demonstration {
    position: absolute;
    top: 0;
    transform: translateY(-50%);
    z-index: 331;
  }

  // ========= Getting Started ========
  &__getting-started {
    max-width: rem(344);
    margin-bottom: rem(34);
    z-index: 331;
    @include break-up(small) {
      max-width: rem(970);
      margin-bottom: rem(66);
    }

    .title {
      font-size: rem(16);
      line-height: rem(19);
      text-align: center;
      margin-bottom: rem(17);
      @include break-up(small) {
        font-size: rem(24);
        line-height: rem(28);
        margin-bottom: rem(30);
      }
    }
    .text {
      font-size: rem(12);
      line-height: rem(14);
      text-align: justify;
      letter-spacing: 0.05em;
      @include break-up(small) {
        font-size: rem(17);
        line-height: rem(20);
      }
    }
  }

  // ========= Accordions =========
  &__accordions {
    width: rem(344);
    margin-bottom: rem(20);
    z-index: 331;
    @include break-up(small) {
      width: rem(970);
      margin-bottom: rem(70);
    }
  }

  // ========== Help Buttons ===========
  &__help {
    width: rem(246);
    margin-bottom: rem(24);
    @include break-up(small) {
      width: rem(556);
      margin-bottom: rem(45);
    }

    .title {
      font-size: rem(16);
      line-height: rem(19);
      text-align: center;
      margin-bottom: rem(17);
      @include break-up(small) {
        font-size: rem(24);
        line-height: rem(28);
        margin-bottom: rem(30);
      }
    }

    .buttons {
      display: flex;
      justify-content: space-between;
      > button {
        display: block;
        width: rem(118);
        height: rem(70);
        color: #fff;
        border: none;
        outline: none;
        cursor: pointer;
        background-color: $coal-dark;
        border-radius: rem(8);
        letter-spacing: 0.05em;
        @include break-up(small) {
          width: rem(250);
          height: rem(210);
          border-radius: rem(25);
        }

        img {
          height: rem(30);
          margin-bottom: rem(3);
          @include break-up(small) {
            height: rem(87);
            margin-bottom: rem(15);
          }
        }

        h3 {
          font-size: rem(9);
          line-height: rem(11);
          margin-bottom: rem(3);
          @include break-up(small) {
            font-size: rem(18);
            line-height: rem(21);
          }
        }
        p {
          font-size: rem(8);
          line-height: rem(9);
          @include break-up(small) {
            font-size: rem(12);
            line-height: rem(14);
          }
        }
      }
    }
  }

  // ======= Circle Layers ========
  &__circle-layers {
    .layer {
      position: absolute;
      z-index: 330;
    }
    .layer-1 {
      width: rem(180);
      height: rem(360);
      left: 0;
      top: rem(109);
      @include break-up(small) {
        width: rem(390);
        height: rem(780);
      }
    }
    .layer-2 {
      width: rem(180);
      height: rem(180);
      right: 0;
      top: 0;
      @include break-up(small) {
        width: rem(390);
        height: rem(390);
      }
    }
  }
}
</style>