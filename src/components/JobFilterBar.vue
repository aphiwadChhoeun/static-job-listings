<template>
  <div id="filter-container">
    <filter-tag
      v-for="filter in filters"
      :key="filter.value"
      :tag="filter"
      @click.native="removeFilter(filter)"
    ></filter-tag>
  </div>
</template>

<style lang="scss" scoped>
@import "../variables";
@import "../mixins";

#filter-container {
  background: $LIGHT_CYAN;
  padding: 24px;
  border-radius: 4px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-top: -110px;
  position: absolute;
  width: 100%;

  @include breakpoint("desktop") {
    align-items: center;
    flex-direction: row;
  }
}
</style>

<script>
import FilterTag from "./FilterTag";

export default {
  name: "JobFilterBar",
  components: {
    FilterTag,
  },
  props: {
    filters: Array,
  },
  methods: {
    removeFilter(tag) {
      this.$emit("removeFilter", tag);
    },
  },
};
</script>
