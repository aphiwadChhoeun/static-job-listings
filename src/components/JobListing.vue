<template>
  <div>
    <job-filter-bar
      v-if="filters.length > 0"
      :filters="filters"
    ></job-filter-bar>

    <div id="job-listing-container">
      <job-item
        v-for="job in jobs"
        :key="job.id"
        :job="job"
        v-on:filterAdded="filterAdded"
      ></job-item>
    </div>
  </div>
</template>

<style lang="scss">
@import "../mixins";

#job-listing-container {
  margin: 55px 0;

  @include breakpoint("desktop") {
    margin: 76px 0;
  }
}
</style>

<script>
import data from "../data.json";
import JobFilterBar from "./JobFilterBar";
import JobItem from "./JobItem";

export default {
  name: "JobListing",
  components: {
    JobFilterBar,
    JobItem,
  },
  data() {
    return {
      filters: [],
    };
  },
  computed: {
    jobs() {
      if (this.filters.length == 0) {
        return data;
      }

      let roleFilters = this.filters.map((f) =>
        f.type == "role" ? f.value : null
      );
      let levelFilters = this.filters.map((f) =>
        f.type == "level" ? f.value : null
      );
      let langFilters = this.filters.map((f) =>
        f.type == "language" ? f.value : null
      );

      let result = data.filter((el) => {
        let foundRole = roleFilters.includes(el.role);
        let foundLevel = levelFilters.includes(el.level);
        let foundLanguage = false;
        if (el.hasOwnProperty("languages")) {
          if (el.languages.length == 1) {
            foundLanguage = langFilters.includes(el.languages.pop());
          } else if (el.languages.length > 1) {
            let merged = [...langFilters, ...el.languages];
            let s = new Set(merged);

            return merged.length !== s.size;
          }
        }

        return foundRole || foundLevel || foundLanguage;
      });

      return result;
    },
  },
  methods: {
    filterAdded(filter) {
      if (
        this.filters.length == 0 ||
        this.filters.findIndex(
          (el) => el.type == filter.type && el.value == filter.value
        ) < 0
      ) {
        this.filters.push(filter);
      }
    },
  },
};
</script>
