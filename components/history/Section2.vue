<template>
  <div class="sec-2" @click="clickOutside">
    <!-- Balance Statistics -->
    <div class="sec-2__balance-stats">
      <!-- Part 1 -->
      <div class="part-1">
        <div class="title">Current Balance</div>
        <div class="amount">$967.64</div>
      </div>

      <!-- Part 2 -->
      <div class="part-2">
        <div class="part-2-inside">
          <div class="title">Total Withdrawn</div>
          <div class="amount">$485.32</div>
        </div>
        <div class="part-2-inside">
          <div class="title">Processing</div>
          <div class="amount">$292.16</div>
        </div>
      </div>
    </div>

    <!-- Transaction History Tables -->
    <div class="sec-2__history-table">
      <button class="sec-2__topics" @click="isTopicsOpen = !isTopicsOpen">
        <span class="active-topic">{{ presentTopic }}</span>
        <div class="dropdown">
          <img src="~assets/icons/dropdown-icon.svg" alt="dropdown" />
        </div>
        <transition name="topics">
          <div class="topic-list" v-if="isTopicsOpen">
            <button
              class="topic"
              v-for="(topic, inx) in topics"
              :key="inx"
              @click="changeComp(`Tab${inx + 1}`, topic)"
            >
              {{ topic }}
            </button>
          </div>
        </transition>
      </button>

      <div class="sec-2__topics-btn-pc">
        <button
          @click="changeComp('Tab1')"
          class="deposits"
          :class="componentId === 'Tab1' ? 'deposits active-color' : 'deposits'"
        >
          Deposits
        </button>
        <button
          @click="changeComp('Tab2')"
          :class="
            componentId === 'Tab2' ? 'withdrawals active-color' : 'withdrawals'
          "
        >
          Withdrawals
        </button>
        <button
          @click="changeComp('Tab3')"
          class=""
          :class="
            componentId === 'Tab3' ? 'acc-history active-color' : 'acc-history'
          "
        >
          Account History
        </button>
      </div>

      <!-- Tables -->
      <component :is="componentId"></component>
    </div>

    <!-- Circle Layer Vectors -->
    <div class="sec-2__layers">
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
import Tab1 from "./tabs/Tab1.vue";
import Tab2 from "./tabs/Tab2.vue";
import Tab3 from "./tabs/Tab3.vue";

export default {
  components: {
    Tab1,
    Tab2,
    Tab3,
  },
  data() {
    return {
      isTopicsOpen: null,
      selectedDate: "",
      componentId: "Tab1",
      presentTopic: "Deposits",
      topics: ["Deposits", "Withdrawals", "Account History"],
      transactions: [
        {
          depositId: 8795072,
          amount: 19.5,
          status: "Processing",
          date: "30 Nov, 2021",
          notes: "No notes added",
        },
        {
          depositId: 7845542,
          amount: 50.0,
          status: "Completed",
          date: "28 Nov, 2021",
          notes: "No notes added",
        },
        {
          depositId: 6425092,
          amount: 43.08,
          status: "Completed",
          date: "24 Nov, 2021",
          notes: "Green Glowing Eyes",
        },
        {
          depositId: 5084134,
          amount: 20.0,
          status: "Completed",
          date: "23 Nov, 2021",
          notes: "Blizzard Beast Mode",
        },
        {
          depositId: 4179133,
          amount: 180.5,
          status: "Completed",
          date: "19 Nov, 2021",
          notes: "Dominus Formidulosus",
        },
      ],
    };
  },
  methods: {
    getOurDate() {
      console.log(this.selectedDate);
      console.log("I am clicked");
    },
    changeComp(comp, topic) {
      this.componentId = comp;
      this.presentTopic = topic;
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
/**
@ Mobile First Design
 */

.sec-2 {
  position: relative;
  display: flex;
  color: #fff;
  flex-direction: column;
  align-items: center;
  padding-top: rem(26.35);
  background-color: $coal;
  overflow: hidden;
  @include break-up(small) {
    padding-top: rem(28);
  }

  // ========= Balance Statistics =========
  &__balance-stats {
    width: rem(344);
    margin-bottom: rem(23.65);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 331;
    @include break-up(small) {
      width: rem(871);
      margin-bottom: rem(73);
    }

    .part-1 {
      .title {
        font-size: rem(12);
        line-height: rem(14);
        color: $purple-light;
      }
      .amount {
        font-size: rem(28);
        line-height: rem(33);
      }
    }
    .part-2 {
      &-inside {
        &:not(:last-child) {
          margin-bottom: rem(7.1);
        }
        .title {
          font-size: rem(9);
          line-height: rem(11);
          color: $purple-light;
          margin-bottom: rem(1);
        }
        .amount {
          font-size: rem(18);
          line-height: rem(21);
        }
      }
    }
  }

  // ========== History Table ==========
  &__history-table {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: rem(371);
    margin-bottom: rem(25);
    background: $coal-dark;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: rem(15);
    z-index: 331;
    @include break-up(small) {
      width: rem(970);
      margin-bottom: rem(60);
    }
  }

  &__topics {
    position: relative;
    width: rem(216);
    height: rem(40);
    display: flex;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;
    background-color: $purple-dark;
    border-radius: rem(15);
    margin: rem(15) 0;
    padding: 0 rem(20);
    z-index: 333;
    @include break-up(small) {
      display: none;
    }

    .active-topic {
      font-size: rem(17);
      line-height: rem(20);
    }

    .topic-list {
      text-align: center;
      position: absolute;
      top: rem(43);
      left: 0;
      width: 100%;
      padding: rem(5);
      border-radius: rem(15);
      background-color: $purple-thick;
      box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
        rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

      .topic {
        display: block;
        width: 100%;
        outline: none;
        color: #fff;
        padding: rem(3);
        background-color: $purple-3;
        border-radius: rem(15);
        cursor: pointer;
        &:not(:last-child) {
          margin-bottom: rem(5);
        }
      }
    }
  }

  .topics-enter,
  .topics-leave-to {
    transform: translateY(-10%);
    opacity: 0;
  }
  .topics-enter-active,
  .topics-leave-active {
    transition: all 0.3s ease-in-out;
  }
  .topics-leave,
  .topics-enter-to {
    transform: translateY(0%);
    opacity: 1;
  }

  &__topics-btn-pc {
    display: none;
    margin-top: rem(20);
    margin-left: rem(20);
    align-self: flex-start;
    @include break-up(small) {
      display: initial;
    }

    > button {
      width: rem(216);
      height: rem(40);
      border: none;
      outline: none;
      color: #fff;
      font-size: rem(17);
      line-height: rem(20);
      border-radius: rem(15) rem(15) 0 0;
      background: #04091b;
    }
  }
  .active-color {
    background-color: $purple-dark;
  }

  // ========= Circle Layer Vectors ========
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
        display: none;
        width: rem(390);
        height: rem(390);
      }
    }
  }
}
</style>