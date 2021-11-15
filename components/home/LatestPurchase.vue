<template>
  <div class="latest-purchase">
    <div class="latest-purchase__inside">
      <button class="latest-purchase__left-btn" @click="prevItems">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="chevron-right"
          class="svg-inline--fa fa-chevron-right fa-w-10"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="#fff"
            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
          ></path>
        </svg>
      </button>
      <div class="latest-purchase__content">
        <div class="title">Latest Purchase</div>
        <!-- <latestPItem /> -->
        <div class="latest-purchase__all-items" :style="translating">
          <LatestPItem
            v-for="(item, inx) in items"
            :item="item"
            :index="inx"
            :key="inx"
            class="latest"
          />
        </div>
      </div>
      <button class="latest-purchase__right-btn" @click="nextItems">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="chevron-right"
          class="svg-inline--fa fa-chevron-right fa-w-16"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="#fff"
            d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transLeft: 0,
      items: [
        {
          name: "Item Name",
          desc: "Item Description",
          price: 199,
        },
        {
          name: "Item Name",
          desc: "Item Description",
          price: 199,
        },
        {
          name: "Item Name",
          desc: "Item Description",
          price: 199,
        },
        {
          name: "Item Name",
          desc: "Item Description",
          price: 199,
        },
        {
          name: "Item Name",
          desc: "Item Description",
          price: 199,
        },
        {
          name: "Item Name",
          desc: "Item Description",
          price: 199,
        },
        {
          name: "Item Name",
          desc: "Item Description",
          price: 199,
        },
        {
          name: "Item Name",
          desc: "Item Description",
          price: 199,
        },
        {
          name: "Item Name",
          desc: "Item Description",
          price: 199,
        },
        {
          name: "Item Name",
          desc: "Item Description",
          price: 199,
        },
      ],
    };
  },
  computed: {
    translating() {
      return `transform: translateX(${this.transLeft}rem)`;
    },
  },
  mounted() {
    this.$axios.setHeader('Authorization', localStorage.getItem('token') );
    this.$axios.get("api/user/orders")
      .then( (res) => {
        this.items = res.data.entity;
      })
  },
  methods: {
    nextItems() {
      const limit = (this.items.length - 2) * -8.375;
      const limit_pc = (this.items.length - 5) * -12.1125;
      const screen = window.innerWidth;

      if (screen < 611) {
        if (this.transLeft > limit) {
          this.transLeft -= 8.375;
        }
      } else {
        if (this.transLeft > limit_pc) {
          this.transLeft -= 12.1125;
        }
      }
    },
    prevItems() {
      const screen = window.innerWidth;

      if (screen < 611) {
        if (this.transLeft < 0) {
          this.transLeft += 8.375;
        }
      } else {
        if (this.transLeft < -1) {
          this.transLeft += 12.1125;
        }
      }
    },
  },
};
</script>

<style lang='scss' scoped>
@import "~assets/scss/variables";
@import "~assets/scss/mixins";
/**
@ Mobile Design
 */
.latest-purchase {
  color: #fff;

  &__inside {
    width: rem(332);
    height: rem(124);
    margin-right: auto;
    margin-left: auto;
    border-radius: rem(20);
    background-color: $coal-dark;
    display: grid;
    grid-template-columns: rem(32) rem(268) rem(32);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    overflow: hidden;
    @include break-up(small) {
      width: rem(1169);
      height: rem(245);
      grid-template-columns: rem(100) rem(969) rem(100);
    }
  }

  &__right-btn,
  &__left-btn {
    width: rem(30);
    height: rem(124);
    border: none;
    outline: none;
    background-color: $purple;
    z-index: 336;
    @include break-up(small) {
      width: rem(100);
      height: rem(245);
    }

    svg {
      height: rem(10.16);
      @include break-up(small) {
        height: rem(30.47);
      }

      path {
        fill: "#fff";
      }
    }
  }
  &__right-btn {
    border-radius: 0 rem(20) rem(20) 0;
  }
  &__left-btn {
    border-radius: rem(20) 0 0 rem(20);

    svg {
      transform: rotate(180deg);
    }
  }
  &__content {
    position: relative;
    overflow: hidden;

    .title {
      position: absolute;
      top: rem(8);
      left: rem(10);
      font-weight: 500;
      font-size: rem(8);
      line-height: rem(9);
      @include break-up(small) {
        top: rem(20);
        left: rem(22);
        font-size: rem(17);
        line-height: rem(20);
      }
    }
  }
  &__all-items {
    height: rem(91);
    margin-top: rem(25);
    white-space: nowrap;
    z-index: 335;
    transition: all 0.5s ease-in-out;
    @include break-up(small) {
      height: rem(165);
      margin-top: rem(60);
    }

    .latest {
      width: 50%;
      display: inline-block;
      @include break-up(small) {
        width: 20%;
      }
    }
  }
}
</style>