<template>
  <div id="filter-container">
    <div class="filter__tags">
      <filter-tag
        v-for="filter in filters"
        :key="filter.value"
        :tag="filter"
        @click.native="removeFilter(filter)"
      ></filter-tag>
    </div>
    <div class="filter__clear">
      <a href="#" @click.prevent="clearFilters">Clear</a>
    </div>
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

  .filter {
    &__tags {
      flex: 1;
    }

    &__clear {
      a {
        color: $PRIMARY_COLOR;
        font-size: $TEXT_SIZE - 2;
      }
    }
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

    clearFilters() {
      this.$emit("clearFilters");
    },
  },
};
</script>
