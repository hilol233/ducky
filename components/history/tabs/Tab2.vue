<template>
  <div class="tab2">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nulla
    quisquam consequatur enim quam unde veniam non optio laudantium facilis
    ullam magni neque fugit, eveniet accusantium repellendus consectetur maiores
    ipsam vero beatae, aspernatur explicabo nobis tempora? Tenetur perspiciatis
    minima deserunt voluptates hic aspernatur eaque saepe eius? Nam minima
    obcaecati, tenetur totam sed in architecto repudiandae quo ut consectetur
    minus officia! Dolorum et obcaecati nemo facere recusandae corrupti
    officiis! Ex earum, voluptate ullam incidunt dicta assumenda nulla ea
    deserunt provident eaque. Lorem ipsum dolor sit amet, consectetur
    adipisicing elit. Obcaecati eveniet, optio necessitatibus mollitia, ea harum
    rem doloribus minus blanditiis nostrum dolor incidunt voluptatibus
    consequatur. Molestias rem magnam autem qui odit. Lorem ipsum dolor sit,
    amet consectetur adipisicing elit. Quibusdam, necessitatibus? Beatae,
    impedit? Quaerat velit quisquam eligendi incidunt numquam, ratione
    excepturi.
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss' scoped>
@import "~assets/scss/variables";
@import "~assets/scss/mixins";
/**
@ Mobile First Design
 */

.tab2 {
  width: rem(341);
  min-height: rem(100);
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
}
</style>