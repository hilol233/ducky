<template>
  <div class="tab1" @click="close">
    <div class="tab1__header-options">
      <div class="left-side">
        <button class="tab1__deposits-btn">
          <span>All Transactions</span>
          <img src="~assets/icons/dropdown-icon.svg" alt="dropdown" />
        </button>

        <!-- Date -->
        <div class="tab1__date">
          <div class="from">
            <div class="in-from" @click="cal1onOff">
              <span>{{ date1 }}</span>
              <img src="~assets/icons/dropdown-icon.svg" alt="dropdown" />
            </div>
            <div class="calendar" v-if="cal1open">
              <client-only>
                <vc-calendar @dayclick="date1Click"></vc-calendar>
              </client-only>
            </div>
          </div>
          <span>
            <img src="~assets/icons/arrow-right.svg" alt="Arrow right" />
          </span>
          <div class="to">
            <div class="in-to" @click="cal2onOff">
              <span>{{ date2 }}</span>
              <img src="~assets/icons/dropdown-icon.svg" alt="dropdown" />
            </div>
            <div class="calendar" v-if="cal2open">
              <client-only>
                <vc-calendar @dayclick="date2Click"></vc-calendar>
              </client-only>
            </div>
          </div>
        </div>
      </div>

      <!-- Search for history -->
      <div class="tab1__search-tran">
        <input type="text" placeholder="Search Transaction" />
        <img src="~assets/icons/search-icon.svg" alt="search-icon" />
      </div>
    </div>

    <!-- Transactions - Mobile -->
    <div class="tab1__transactions-mobile">
      <Transaction
        class="tab1__each-tran"
        v-for="(tran, inx) in transactions"
        :tran="tran"
        :key="inx"
      >
      </Transaction>
    </div>

    <!-- Transactions - PC -->
    <div class="tab1__transactions-pc">
      <div class="header">
        <div class="date">Date</div>
        <div class="id">Depoit ID</div>
        <div class="amount">Amount</div>
        <div class="status">Status</div>
        <div class="notes">Additional Notes</div>
      </div>
      <div class="line"></div>
      <div class="tran-table">
        <Transaction
          class="sec-2__each-tran"
          v-for="(tran, inx) in transactions"
          :tran="tran"
          :key="inx"
        >
        </Transaction>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cal1open: false,
      cal2open: false,
      date1: null,
      date2: null,
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
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
  computed: {},
  methods: {
    cal1onOff() {
      this.cal2open = false;
      this.cal1open = !this.cal1open;
    },
    cal2onOff() {
      this.cal1open = false;
      this.cal2open = !this.cal2open;
    },
    getDate(theDate) {
      let date = new Date(theDate);
      let dayNum = date.getDate();
      let month = this.months.find((_, i) => i === date.getMonth());
      let year = date.getFullYear();
      return `${month} ${dayNum}, ${year}`;
    },
    date1Click(day) {
      this.date1 = this.getDate(day.id);
      this.cal1onOff();
    },
    date2Click(day) {
      this.date2 = this.getDate(day.id);
      this.cal2onOff();
    },
    close() {
      //   const arr = [];
      //   const cal = e.target.classList;
      //   for (let i = 0; i < cal.length; i++) {
      //     arr.push(arr[i]);
      //   }
      //   console.log(arr.includes("calendar"));
      //   if (!arr.includes("calendar")) {
      //     this.cal1onOff();
      //     this.cal2onOff();
      //   }
    },
  },
  mounted() {
    let date = new Date();
    let dayNum = date.getDate();
    let month = this.months.find((_, i) => i === date.getMonth());
    let year = date.getFullYear();
    this.date1 = `${month} ${dayNum}, ${year}`;
    this.date2 = `${month} ${dayNum}, ${year}`;
  },
};
</script>

<style lang='scss' scoped>
@import "~assets/scss/variables";
@import "~assets/scss/mixins";
/**
@ Mobile First Design
 */
.tab1 {
  width: rem(341);
  padding: rem(15);
  border-radius: rem(15);
  margin-bottom: rem(15);
  background-color: $purple-dark;
  z-index: 160;
  @include break-up(small) {
    width: rem(930);
    padding-top: rem(30);
    border-radius: 0 rem(15) rem(15) rem(15);
  }

  @include break-up(small) {
    &__header-options {
      display: flex;
      justify-content: space-between;
      .left-side {
        width: rem(508);
        display: flex;
        justify-content: space-between;
      }
    }
  }

  &__deposits-btn {
    width: 100%;
    height: rem(24);
    border-radius: rem(50);
    padding: rem(5) rem(15);
    border: none;
    outline: none;
    color: #fff;
    background-color: $blue-grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: rem(15.04);
    @include break-up(small) {
      display: block;
      width: rem(147);
    }

    img {
      width: rem(12);
      height: rem(12);
    }
  }

  // ========== Transactions Date =========
  &__date {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: rem(15);
    @include break-up(small) {
      width: rem(341);
      align-items: initial;
    }

    .from,
    .to {
      position: relative;
      width: rem(125);
      height: rem(24);
      display: flex;
      align-items: center;
      background-color: $blue-grey;
      color: #fff;
      border-radius: rem(50);
      border: none;
      outline: none;
      font-size: rem(12);
      line-height: rem(14);
      cursor: pointer;
      @include break-up(small) {
        width: rem(147);
      }

      .in-from,
      .in-to {
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding: rem(5) rem(15);
        border-radius: rem(50);
      }

      .calendar {
        position: absolute;
        top: calc(50% + rem(12));
        left: 0;
      }

      img {
        width: rem(12);
        height: rem(12);
      }
    }
    .to {
      .calendar {
        left: initial;
        right: 0;
      }
    }
    span {
      display: flex;
      align-items: center;
      @include break-up(small) {
        display: initial;
      }
    }
  }

  // ========== Search Transaction ==========
  &__search-tran {
    width: 100%;
    height: rem(24);
    border: 1px solid #ffffff;
    border-radius: rem(50);
    background: $blue-grey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 rem(15);
    margin-bottom: rem(31);
    @include break-up(small) {
      width: rem(200);
    }

    input {
      color: white;
      font-size: rem(12);
      line-height: rem(14);
      border: none;
      outline: none;
      background: none;
    }
    img {
      width: rem(14.96);
      height: rem(16);
    }
    ::placeholder {
      color: white;
    }
  }

  // ========== Transactions - Mobile =========
  &__transactions-mobile {
    padding-bottom: rem(15);
    @include break-up(small) {
      display: none;
    }
  }

  // =========== Transactions - PC ============
  &__transactions-pc {
    display: none;
    @include break-up(small) {
      display: initial;
    }
    .header {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      margin-bottom: rem(17);

      > div {
        text-align: center;
      }
    }
    .line {
      width: calc(100% + rem(30));
      height: rem(1);
      margin-left: rem(-15);
      margin-bottom: rem(26);
      background: linear-gradient(
        90deg,
        #a4a4a4 0%,
        rgba(196, 196, 196, 0) 100%
      );
    }
  }
}
</style>