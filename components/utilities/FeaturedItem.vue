<template>
  <div class="featured-item" :class="{ 'd-none': displayNone }">
    <div class="sec-1">
      <div class="info">
        <div class="title">{{ featureItem.name }}</div>
        <div class="desc">{{ featureItem.description }}</div>
      </div>
      <div class="image">
        <img
          :src="featureItem.icon_url"
          alt="character"
        />
      </div>
    </div>
    <div class="sec-2">
      <div class="price-rap">
        <div class="price">${{ featureItem.price }}</div>
        <div class="rap">
          <div class="title">Rap</div>
          <div class="amount">{{ featureItem.rap }}K</div>
        </div>
      </div>
      <button @click="purchase">Buy Now</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["featIndx", "featureItem"],
  computed: {
    displayNone() {
      if (this.featIndx > 3) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    purchase() {
      this.$store.commit("modals/SET_FIND_ACC_MODAL_DATA", this.featureItem);
      this.$store.commit("modals/OPEN_FEATURED_ITEM_MODAL");
      this.$store.commit("modals/OPEN_FIND_ACC_MODAL");
    },
  },
};
</script>

<style lang='scss' scoped>
@import "~assets/scss/variables";
@import "~assets/scss/mixins";

/*
@ PC First Design
 */

.d-none {
  @include break-down(small) {
    display: none;
  }
}

.featured-item {
  width: rem(200);
  height: rem(250);
  border-radius: rem(25);
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  @include break-down(small) {
    width: rem(150);
    height: rem(200);
    border-radius: rem(15);
  }

  .sec-1 {
    position: relative;
    height: rem(160);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: rem(15);
    background-color: $coal-dark;
    border-radius: rem(25) rem(25) 0 0;
    @include break-down(small) {
      height: rem(135);
      border-radius: rem(15) rem(15) 0 0;
    }

    .info {
      position: absolute;
      top: rem(15);
      left: rem(19);
      @include break-down(small) {
        top: rem(15);
        left: rem(18);
      }
      .title {
        font-weight: 500;
        font-size: rem(14);
        line-height: rem(16);
        @include break-down(small) {
          font-size: rem(12);
          line-height: rem(14);
        }
      }
      .desc {
        font-size: rem(10);
        line-height: rem(12);
        @include break-down(small) {
          font-size: rem(9);
          line-height: rem(11);
        }
      }
    }
    .image {
      position: absolute;
      bottom: 0;
      @include break-down(small) {
        width: 97.06px;
        height: 81.05px;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .sec-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: rem(90);
    padding-bottom: rem(11);
    background-color: $coal-light;
    border-radius: 0 0 rem(25) rem(25);
    @include break-down(small) {
      height: rem(65);
      border-radius: 0 0 rem(15) rem(15);
    }

    .price-rap {
      margin-top: rem(11);
      display: flex;
      justify-content: space-between;
      width: rem(164);
      @include break-down(small) {
        width: rem(128.57);
        height: rem(24.21);
        margin-top: rem(5);
      }

      .price {
        font-weight: 500;
        font-size: rem(18);
        line-height: rem(21);
        align-self: center;
        @include break-down(small) {
          font-size: rem(14);
          line-height: rem(16);
        }
      }

      .rap {
        .title {
          text-transform: uppercase;
          color: $purple-2;
          font-weight: 500;
          font-size: rem(14);
          line-height: rem(16);
          @include break-down(small) {
            font-size: rem(12);
            line-height: rem(14);
          }
        }
        .amount {
          font-weight: 500;
          font-size: rem(10);
          line-height: rem(12);
          @include break-down(small) {
            font-size: rem(9);
            line-height: rem(11);
          }
        }
      }
    }

    > button {
      width: rem(164);
      height: rem(32);
      font-size: rem(18);
      line-height: rem(21);
      color: #fff;
      margin-right: auto;
      margin-left: auto;

      background: #6d40cd;
      border: none;
      outline: none;
      cursor: pointer;
      margin-top: rem(10);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: rem(50);
      @include break-down(small) {
        width: rem(116.2);
        height: rem(21.05);
        font-size: rem(10);
        line-height: rem(12);
        margin-top: rem(5);
      }

      &:hover {
        color: #6d40cd;
        background-color: #fff;
        border: rem(2) solid #6d40cd;
      }
    }
  }
}
</style>