<template>
  <div class="contents" @click="clickOutside">
    <!-- Table Contents -->
    <div class="contents__table">
      <h1>Table of Contents</h1>
      <div class="line line1"></div>
      <div class="table">
        <div class="each-table" v-for="(lorem, inx) in 10" :key="inx">
          <p>{{ inx + 1 }}. Lorem ipsum dolor sit amet</p>
        </div>
      </div>
      <div class="line line2"></div>
    </div>

    <!-- Contents -->
    <div class="contents__contents">
      <div class="content" v-for="(cont, inx) in 10" :key="inx">
        <h2>Lorem ipsum dolor sit amet</h2>
        <div class="line"></div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          consectetur justo bibendum, facilisis mi sit amet, semper massa.
          Praesent mattis nisl lacus, a porta nibh sagittis a. Sed consequat,
          metus id hendrerit lacinia, sapien dui semper nulla, quis blandit dui
          augue sed arcu. Donec id mi aliquet, lobortis turpis et, commodo
          magna. Integer justo nulla, consequat ac maximus quis, consectetur ac
          ligula.
        </p>
      </div>
    </div>

    <!-- Circle Layer Vectors -->
    <div class="contents__layers">
      <img
        src="~assets/icons/layer1-icon.svg"
        alt="circle layer"
        class="layer-1 layer"
      />
      <img
        src="~assets/icons/layer2-icon.svg"
        alt="circle layer"
        class="layer-2 layer"
      />
      <img
        src="~assets/icons/layer3-icon.svg"
        alt="circle layer"
        class="layer-3 layer"
      />
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

<style lang='scss' scoped>
@import "~assets/scss/variables";
@import "~assets/scss/mixins";

/**
@ Mobile First Design
 */

.contents {
  position: relative;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: rem(33);
  background-color: $coal;
  @include break-up(small) {
    padding-top: rem(70);
  }

  &:not(:last-child) {
    margin-bottom: rem(20);
  }

  &__table {
    width: rem(344);
    margin-bottom: rem(34);
    z-index: 331;
    @include break-up(small) {
      width: rem(970);
      margin-bottom: rem(43);
    }
    h1 {
      font-size: rem(16);
      line-height: rem(19);
      margin-bottom: rem(7);
      @include break-up(small) {
        font-size: rem(24);
        line-height: rem(28);
        margin-bottom: rem(16.72);
      }
    }
    .line {
      height: rem(1);
      background: linear-gradient(
        90deg,
        #a4a4a4 0%,
        rgba(196, 196, 196, 0) 100%
      );
    }
    .line1 {
      margin-bottom: rem(9);
    }
    .table {
      margin-bottom: rem(7);
      @include break-up(small) {
        margin-bottom: rem(18);
      }
      .each-table {
        @include break-up(small) {
          margin-bottom: rem(10);
        }
      }
      p {
        font-size: rem(10);
        font-weight: 300;
        line-height: rem(12);

        @include break-up(small) {
          font-size: rem(17);
          line-height: rem(20);
        }
      }
    }
  }

  &__contents {
    width: rem(344);
    margin-bottom: rem(21);
    z-index: 331;
    @include break-up(small) {
      width: rem(970);
      margin-bottom: rem(64);
    }

    .content {
      &:not(:last-child) {
        margin-bottom: rem(20);
      }
      h2 {
        font-size: rem(12);
        line-height: rem(14);
        margin-bottom: rem(12);
        @include break-up(small) {
          font-size: rem(17);
          line-height: rem(20);
          margin-bottom: rem(6);
        }
      }
      .line {
        height: rem(1);
        margin-bottom: rem(20);
        background: linear-gradient(
          90deg,
          #a4a4a4 0%,
          rgba(196, 196, 196, 0) 100%
        );
      }
      p {
        font-size: rem(10);
        line-height: rem(12);
        font-weight: 300;
        text-align: justify;
        @include break-up(small) {
          font-size: rem(14);
          line-height: rem(16);
        }
      }
    }
  }

  &__layers {
    .layer {
      position: absolute;
      z-index: 330;
    }
    .layer-1 {
      width: rem(180);
      height: rem(360);
      left: 0;
      top: 35%;
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
    .layer-3 {
      width: rem(180);
      height: rem(180);
      right: 0;
      bottom: 0;
      @include break-up(small) {
        width: rem(390);
        height: rem(390);
      }
    }
  }
}
</style>