<template>
  <div class="dashboard" @click="clickOutside">
    <!-- Status -->
    <div class="dashboard__status">
      <div class="status-inside">
        <div class="part-1">
          <div class="title">Premium Account Status</div>
          <div class="content">Active</div>
        </div>
        <div class="part-2-3-4">
          <div class="part-2">
            <div class="title">Expires On</div>
            <div class="content">31 Oct, 2021</div>
          </div>
          <div class="part-3">
            <div class="title">Days Remaining</div>
            <div class="content">26</div>
          </div>
          <div class="part-4">
            <div class="title">Available Boosts</div>
            <div class="content">103</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Current Revenue -->
    <div class="dashboard__today-tran">
      <div class="part-1">
        <h3 class="title">Transaction Today</h3>
        <h3 class="content">3</h3>
      </div>

      <div class="part-2">
        <h3 class="title">Today's Revenue</h3>
        <h3 class="content">$58.94</h3>
      </div>
    </div>

    <!-- Revenue Chart -->
    <div class="dashboard__chart">
      <div class="chart-inside">
        <div class="summary-revenue">
          <h2 class="title">Revenue Summary</h2>
          <button class="month-num">
            Last 6 months
            <img
              class="dropdown-icon"
              src="~assets/icons/dropdown-icon.svg"
              alt="dropdown icon"
            />
          </button>
          <div class="time-duration">April - October</div>
        </div>

        <LineChart
          :chartData="datacollection"
          :options="chartOptions"
          :height="200"
          class="line-chart"
        />
      </div>
    </div>

    <!-- Circle Layer Vectors -->
    <div class="dashboard__layers">
      <img
        src="~assets/icons/layer2-icon.svg"
        alt="circle layer"
        class="layer-2 layer"
      />
    </div>
  </div>
</template>

<script>
import LineChart from "../LineChart.vue";

const chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)",
};
export default {
  components: {
    LineChart,
  },
  data() {
    return {
      datacollection: null,
      chartOptions: null,
      months: [],
      data: [40, 97, 196, 195, 210, 200, 298],

      xfontSize: null,
      yfontSize: null,
    };
  },
  computed: {},
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
    fillData() {
      this.datacollection = {
        labels: this.months,
        datasets: [
          {
            label: "Income",
            // backgroundColor: ["red", "orange", "yellow"],
            borderColor: "#348ceb",
            borderWidth: 4,
            pointBackgroundColor: "#348ceb",
            pointBorderColor: "transparent",
            pointHoverBorderColor: "#fff",
            pointHoverBorderWidth: 3,
            pointHoverRadius: 7,

            fill: false,
            data: this.data,
          },
        ],
      };
    },
    fillOptions() {
      this.chartOptions = {
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
          backgroundColor: "#262e4c",
          titleFontColor: "#fff",
          bodyFontColor: "#fff",
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest",
        },
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              gridLines: {
                drawBorder: false,
                color: "transparent",
                zeroLineColor: "transparent",
              },
              ticks: {
                fontColor: "#fff",
                fontSize: this.yfontSize,
                padding: 27,
                stepSize: 100,
                callback: function (value, _, _2) {
                  return "$" + value;
                },
              },
            },
          ],
          xAxes: [
            {
              gridLines: {
                drawBorder: false,
                color: "rgba(194, 194, 194, 0.4)",
                zeroLineColor: "rgba(194, 194, 194, 0.4)",
              },
              ticks: {
                fontColor: "#fff",
                fontSize: this.xfontSize,
                padding: 10,
              },
            },
          ],
        },
      };
    },
  },
  mounted() {
    let screen = window.innerWidth;
    if (screen < 611) {
      this.months = ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"];
      this.xfontSize = "9";
      this.yfontSize = "10";
    } else {
      this.months = [
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
      ];
      this.xfontSize = "14";
      this.yfontSize = "14";
    }

    this.fillData();
    this.fillOptions();
  },
};
</script>

<style lang='scss' scoped>
@import "~assets/scss/variables";
@import "~assets/scss/mixins";
/**
@ Mobile First Design
 */

.dashboard {
  position: relative;
  overflow: hidden;
  padding-top: rem(153);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: $coal;
  @include break-up(small) {
    padding-top: rem(105);
  }

  &__status {
    position: absolute;
    top: 0;
    width: 100%;
    height: rem(153);
    padding: 0 rem(15);
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: $coal-dark;
    z-index: 331;
    @include break-up(small) {
      height: rem(105);
    }

    .status-inside {
      @include break-up(small) {
        width: rem(1040);
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
      }
      .part-1,
      .part-2,
      .part-3,
      .part-4 {
        display: flex;
        justify-content: space-between;
        margin-bottom: rem(3);
        @include break-up(small) {
          justify-content: flex-end;
        }

        .title {
          font-size: rem(18);
          line-height: rem(21);
          font-weight: 600;
          margin-right: rem(10);
        }
        .content {
          text-align: right;
          font-weight: 600;
          color: #00ff47;
        }
      }

      .part-1 {
        @include break-up(small) {
          display: initial;

          .content {
            text-align: left;
          }
        }
      }
    }
  }

  &__today-tran {
    position: relative;
    width: rem(371);
    border-radius: rem(15);
    padding: rem(15);
    margin: rem(30) 0;
    background-color: $coal-dark;
    z-index: 331;
    @include break-up(small) {
      width: rem(970);
    }

    > div {
      display: flex;
      justify-content: space-between;
      &:not(:last-child) {
        margin-bottom: rem(3);
      }
      @include break-up(small) {
        justify-content: flex-start;
        &:not(:last-child) {
          margin-bottom: rem(10);
        }
      }

      h3 {
        font-size: rem(14);
        line-height: rem(16);
        @include break-up(small) {
          margin-right: rem(10);
          font-size: rem(17);
          line-height: rem(20);
        }
      }
      .content {
        color: #00ff47;
      }
    }
  }

  // === Revenue chart ===
  &__chart {
    position: relative;
    width: rem(371);
    height: rem(282);
    margin-bottom: rem(75);
    background-color: $coal-dark;
    border-radius: rem(15);
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    z-index: 331;
    @include break-up(small) {
      width: rem(970);
      height: rem(496);
    }

    .chart-inside {
      width: rem(351);
      min-height: rem(262);
      padding: rem(10);
      background-color: $purple-dark;
      border-radius: rem(15);
      @include break-up(small) {
        min-width: rem(930);
        min-height: rem(456);
        padding: rem(30) rem(110) rem(29) rem(59);
      }

      .summary-revenue {
        display: grid;
        grid-template-columns: auto auto;
        justify-content: space-between;
        align-items: center;
        margin-bottom: rem(23);
        @include break-up(small) {
          margin-bottom: rem(40);
        }

        .title {
          font-size: rem(14);
          line-height: rem(16);
          margin-bottom: rem(8);
          @include break-up(small) {
            font-size: rem(18);
            line-height: rem(21);
            margin-bottom: rem(6);
          }
        }

        .dropdown-icon {
          width: rem(12);
          height: rem(12);
        }

        .month-num {
          width: rem(147);
          height: rem(24);
          color: #fff;
          border: none;
          outline: none;
          background-color: $blue-grey;
          border-radius: rem(50);
          font-size: rem(12);
          line-height: rem(14);
          margin-right: rem(10);
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: rem(12);
            height: rem(12);
            margin-left: rem(10);
          }
        }

        .time-duration {
          font-size: rem(10);
          line-height: rem(12);
          @include break-up(small) {
            font-size: rem(14);
            line-height: rem(16);
          }
        }
      }

      .line-chart {
        height: rem(180);

        @include break-up(small) {
          height: rem(321);
        }
      }
    }
  }

  // ====== Circle Layers =======
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