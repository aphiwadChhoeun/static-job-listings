<template>
  <div class="filter-tag">
    <span class="filter-tag__text">{{ tag.value }}</span>
    <span class="icon-remove"></span>
  </div>
</template>

<style lang="scss">
@import "../variables";
@import "../mixins";

.filter-tag {
  color: $PRIMARY_COLOR;
  background-color: $LIGHT_CYAN_2;
  margin-right: 5px;
  margin-bottom: 10px;
  padding: 4px;
  border-radius: 4px;
  font-size: $TEXT_SIZE - 2;
  cursor: pointer;

  @include breakpoint("desktop") {
    margin-bottom: 0;
  }

  &:hover {
    background-color: $PRIMARY_COLOR;
    color: $LIGHT_CYAN;
  }

  .icon-remove {
    background-image: url("../../images/icon-remove.svg");
    background-repeat: no-repeat;
    display: inline-block;
    width: 15px;
    height: 15px;
  }
}
</style>

<script>
export default {
  name: "FilterTag",
  props: {
    tag: Object,
  },
};
</script>
