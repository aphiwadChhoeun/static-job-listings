<template>
  <div id="job-listing-container">
    <job-item v-for="job in jobs" :key="job.id" :job="job"></job-item>
  </div>
</template>

<script>
import data from "../data.json";
import JobItem from "./JobItem";

export default {
  name: "JobListing",
  components: {
    JobItem,
  },
  data() {
    return {
      jobs: data,
    };
  },
};
</script>
