<template>
  <div class="settings" @click="clickOutside">
    <!-- Settings box -->
    <div class="settings__settings-box">
      <div class="settings__box-inside">
        <div class="email">
          <label for="email">Email Address</label>
          <div class="input">
            <input
              type="email"
              id="email"
              value="email@website.com"
              :disabled="isEmailDisabled"
            />
            <img
              src="~assets/icons/edit-icon.svg"
              alt="edit"
              @click="disbaleEmail"
            />
          </div>
        </div>
        <div class="password">
          <label for="password">Password</label>
          <div class="input">
            <input
              type="password"
              id="password"
              value="email@website.com"
              :disabled="isPasswordDisabled"
            />
            <img
              src="~assets/icons/edit-icon.svg"
              alt="edit"
              @click="disablePassword"
            />
          </div>
        </div>
        <div class="bitcoin">
          <label for="bitcoin">Bitcoin Address</label>
          <div class="input">
            <div class="address-warning">
              <input
                type="text"
                value="1NpkkXRQaXg46btFK4Ugvu7rpGJTBybCqF"
                :disabled="isBitcoinDisabled"
              />
              <p>
                Make sure that your Bitcoin address is correct. We are not
                responsible for missing funds due to incorrect information.
              </p>
            </div>
            <img
              src="~assets/icons/edit-icon.svg"
              alt="edit"
              @click="disableBitcoin"
            />
          </div>
        </div>
        <div class="renew-sub">
          <div class="label">Auto-Renew Subscriptions</div>
          <div class="input">
            <div class="all-status">
              <div class="status" v-if="!isRenewSubDisabled">Enabled</div>
              <div class="radio-status" v-else>
                <form @change="radioValue">
                  <input
                    type="radio"
                    name="enable-disable"
                    id="enable"
                    value="Enable"
                  />
                  <label for="enable">Enable</label>
                  <input
                    type="radio"
                    name="enable-disable"
                    id="disable"
                    value="Disable"
                  />
                  <label for="disable">Disable</label>
                </form>
              </div>
            </div>
            <img
              src="~assets/icons/edit-icon.svg"
              alt="edit"
              @click="disableRenewSub"
            />
          </div>
        </div>
        <div class="discord-link">
          <label for="discord">Link Discord</label>
          <div class="input">
            <div class="input-text">
              <span>Discord ID:</span>
              <input
                type="text"
                value="622947134877990922"
                :disabled="isDiscordDisabled"
              />
            </div>
            <img
              src="~assets/icons/edit-icon.svg"
              alt="edit"
              @click="disableDiscord"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Circle Layer Vectors -->
    <div class="settings__layers">
      <img
        src="~assets/icons/layer2-icon.svg"
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
      isEmailDisabled: null,
      isPasswordDisabled: null,
      isBitcoinDisabled: null,
      isRenewSubDisabled: null,
      isDiscordDisabled: null,
    };
  },
  methods: {
    radioValue(event) {
      console.log(event.target.value);
    },

    // disabling all the inputs
    disbaleEmail() {
      this.isEmailDisabled = !this.isEmailDisabled;
    },
    disablePassword() {
      this.isPasswordDisabled = !this.isPasswordDisabled;
    },
    disableBitcoin() {
      this.isBitcoinDisabled = !this.isBitcoinDisabled;
    },
    disableRenewSub() {
      this.isRenewSubDisabled = !this.isRenewSubDisabled;
    },
    disableDiscord() {
      this.isDiscordDisabled = !this.isDiscordDisabled;
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

.settings {
  position: relative;
  background-color: $coal;
  color: #fff;
  padding: rem(30) 0;
  display: flex;
  justify-content: center;
  @include break-up(small) {
    padding: rem(30) 0 rem(70) 0;
  }

  &__settings-box {
    padding: rem(10);
    border-radius: rem(15);
    background: #151a2e;
    z-index: 331;
    @include break-up(small) {
      padding: rem(20);
    }
  }

  &__box-inside {
    position: relative;
    width: rem(351);
    background-color: $purple-dark;
    padding: rem(20) 0 rem(20) rem(20);
    border-radius: rem(15);
    z-index: 331;
    @include break-up(small) {
      width: rem(930);
      padding: rem(34) 0 rem(34) rem(34);
    }

    > div {
      position: relative;
      &:not(:last-child) {
        margin-bottom: rem(10);
      }
      @include break-up(small) {
        position: relative;
        display: flex;
        justify-content: space-between;
        &:not(:last-child) {
          margin-bottom: rem(14);
        }
      }

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        display: block;
        width: 100%;
        height: rem(1);
        background: linear-gradient(
          90deg,
          #a4a4a4 0%,
          rgba(196, 196, 196, 0) 100%
        );
      }
      label,
      .label {
        font-size: rem(12);
        line-height: rem(14);
        margin-bottom: rem(5);
        @include break-up(small) {
          font-size: rem(17);
          line-height: rem(20);
        }
      }

      .input {
        display: flex;
        justify-content: space-between;
        @include break-up(small) {
          // border: 1px solid magenta;
          // display: block;
          // justify-content: flex-end;
          // align-items: center;
          margin-bottom: rem(10);
        }

        input {
          // border: 1px solid red;
          background: none;
          border: none;
          outline: none;
          font-size: rem(10);
          line-height: rem(12);
          color: #fff;
          margin-bottom: rem(5);
          letter-spacing: 0.05em;
          @include break-up(small) {
            font-size: rem(17);
            line-height: rem(20);
            text-align: right;
            margin-bottom: rem(0);
          }
        }

        img {
          width: rem(10);
          height: rem(10);
          margin-right: rem(20.94);
          cursor: pointer;
          @include break-up(small) {
            width: rem(22);
            height: rem(20.28);
            margin-right: rem(33);
            margin-left: rem(20);
          }
        }
      }
    }
    .renew-sub {
      .input {
        .all-status {
          margin-bottom: rem(5);
          .status {
            font-size: rem(10);
            line-height: rem(12);
            @include break-up(small) {
              font-size: rem(17);
              line-height: rem(20);
            }
          }
          .radio-status {
            form {
              input {
                width: rem(8);
                height: rem(8);
              }
              label {
                font-size: rem(10);
                line-height: rem(12);
              }
            }
          }
        }
      }
    }
    .bitcoin {
      .input {
        .address-warning {
          @include break-up(small) {
            text-align: right;
          }

          p {
            color: red;
            font-size: rem(8);
            line-height: rem(9);
            margin-bottom: rem(5);
            @include break-up(small) {
              font-size: rem(10);
              line-height: rem(12);
              margin-bottom: rem(9);
            }
          }
        }
      }
    }
    .discord-link {
      .input {
        .input-text {
          span {
            font-size: rem(10);
            line-height: rem(12);
            @include break-up(small) {
              font-size: rem(17);
              line-height: rem(20);
            }
          }

          input {
            text-align: left;
            width: rem(187);
          }
        }
      }
    }
  }

  &__layers {
    .layer {
      position: absolute;
      z-index: 330;
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