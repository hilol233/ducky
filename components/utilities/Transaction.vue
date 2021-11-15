<template>
  <div class="transaction">
    <div class="id point">
      <div class="title for-mobile">Deposit ID</div>
      <div class="content">{{ tran.depositId }}</div>
    </div>
    <div class="amount point">
      <div class="title for-mobile">Amount</div>
      <div class="content">${{ tran.amount }}</div>
    </div>
    <div class="status point">
      <div class="title for-mobile">Status</div>
      <div class="content" :class="{ purple: processing }">
        {{ tran.status }}
      </div>
    </div>
    <div class="date point">
      <div class="title for-mobile">Date</div>
      <div class="content">{{ tran.date }}</div>
    </div>
    <div class="notes point">
      <div class="title for-mobile">Notes</div>
      <div class="content">{{ tran.notes }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tran"],
  computed: {
    processing() {
      return this.tran.status === "Processing" ? true : false;
    },
  },
};
</script>

<style lang='scss' scoped>
@import "~assets/scss/variables";
@import "~assets/scss/mixins";
.transaction {
  width: rem(311);
  height: rem(120);
  background-color: $coal;
  border-radius: rem(12);
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  padding: rem(10) rem(15);
  &:not(:last-child) {
    margin-bottom: rem(15);
  }
  @include break-up(small) {
    width: 100%;
    height: auto;
    background: none;
    grid-template-columns: repeat(5, rem(180));
    border-radius: 0;
    padding: 0;
    &:not(:last-child) {
      margin-bottom: rem(10);
    }

    .date {
      order: 1;
    }
    .id {
      order: 2;
    }
    .amount {
      order: 3;
    }
    .status {
      order: 4;
    }
    .notes {
      order: 5;
    }
  }

  > div {
    @include break-up(small) {
      padding: 0 rem(20);
      overflow: hidden;
      text-align: center;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .title {
      font-size: rem(9);
      line-height: rem(11);
      color: $purple-light;
    }
    .content {
      font-size: rem(14);
      line-height: rem(16);
      @include break-up(small) {
        // padding: 0 rem(10);
        overflow: hidden;
        text-align: center;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .purple {
      color: $purple-light;
    }
  }
}
</style>