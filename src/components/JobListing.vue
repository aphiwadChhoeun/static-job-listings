<template>
  <div>
    <transition name="fade">
      <job-filter-bar
        v-if="filters.length > 0"
        :filters="filters"
        v-on:removeFilter="filterRemoved"
        v-on:clearFilters="filtersCleared"
      ></job-filter-bar>
    </transition>

    <div id="job-listing-container">
      <transition-group name="job__list__anim" tag="div">
        <job-item
          v-for="job in jobs"
          :key="job.id"
          :job="job"
          :roleFilters="roleFilters"
          :levelFilters="levelFilters"
          :langFilters="langFilters"
          v-on:addFilter="filterAdded"
        ></job-item>
      </transition-group>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../mixins";

#job-listing-container {
  margin: 55px 0;

  @include breakpoint("desktop") {
    margin: 76px 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.job__list__anim-enter-active,
.job__list__anim-leave-active {
  transition: all 200ms ease-in;
}
.job__list__anim-enter,
.job__list__anim-leave-to {
  opacity: 0;
}
.job__list__anim-move {
  transition: transform 200ms ease-out;
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
      roleFilters: [],
      levelFilters: [],
      langFilters: [],
    };
  },
  watch: {
    filters(newFilters, oldFilters) {
      if (newFilters.length == 0) {
        this.jobs = data;
        return;
      }

      this.roleFilters = newFilters.map((f) =>
        f.type == "role" ? f.value : null
      );
      this.levelFilters = newFilters.map((f) =>
        f.type == "level" ? f.value : null
      );
      this.langFilters = newFilters.map((f) =>
        f.type == "language" ? f.value : null
      );

      this.jobs = data.filter((job) => {
        let foundRole = this.roleFilters.includes(job.role);
        let foundLevel = this.levelFilters.includes(job.level);

        let foundLanguages = false;

        if (job.hasOwnProperty("languages")) {
          for (let i = 0; i < job.languages.length; i++) {
            foundLanguages = this.langFilters.includes(job.languages[i]);
            if (foundLanguages) break;
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

    filtersCleared() {
      this.filters = [];
      this.roleFilters = [];
      this.levelFilters = [];
      this.langFilters = [];
    },
  },
};
</script>
