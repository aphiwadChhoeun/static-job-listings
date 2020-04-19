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
  border-radius: 4px;
  font-size: $TEXT_SIZE - 2;
  cursor: pointer;

  @include breakpoint("desktop") {
    margin-bottom: 0;
  }

  &:hover {
    background-color: $PRIMARY_COLOR;
    color: $LIGHT_CYAN;

    .icon-remove {
      background-color: $VERY_DARK_CYAN;
    }
  }

  &__text {
    padding: 4px;
    display:inline-block;
  }

  .icon-remove {
    background-image: url("../../images/icon-remove.svg");
    background-color: $PRIMARY_COLOR;
    background-repeat: no-repeat;
    background-position: center;
    vertical-align: middle;
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 0 4px 4px 0;
    padding: 4px;
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
