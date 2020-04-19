<template>
  <div>
    <job-filter-bar
      v-if="filters.length > 0"
      :filters="filters"
      v-on:removeFilter="filterRemoved"
    ></job-filter-bar>

    <div id="job-listing-container">
      <job-item
        v-for="job in jobs"
        :key="job.id"
        :job="job"
        v-on:addFilter="filterAdded"
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
      jobs: data,
      filters: [],
    };
  },
  watch: {
    filters(newFilters, oldFilters) {
      if (newFilters.length == 0) {
        this.jobs = data;
        return;
      }

      let roleFilters = newFilters.map((f) =>
        f.type == "role" ? f.value : null
      );
      let levelFilters = newFilters.map((f) =>
        f.type == "level" ? f.value : null
      );
      let langFilters = newFilters.map((f) =>
        f.type == "language" ? f.value : null
      );

      this.jobs = data.filter((job) => {
        let foundRole = roleFilters.includes(job.role);
        let foundLevel = levelFilters.includes(job.level);

        let foundLanguages = false;

        if (job.hasOwnProperty("languages")) {
          for (let i = 0; i < job.languages.length; i++) {
            foundLanguages = langFilters.includes(job.languages[i]);
            if (foundLanguages >= 0) break;
          }
        }

        return foundRole || foundLevel || foundLanguages;
      });
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
    filterRemoved(filter) {
      this.filters.splice(
        this.filters.findIndex(
          (el) => el.type == filter.type && el.value == filter.value
        ),
        1
      );
    },
  },
};
</script>
