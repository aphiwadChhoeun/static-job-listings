<template>
  <div class="filter-tag">{{ tag.value }}</div>
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
