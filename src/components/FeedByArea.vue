<template>
  <Search></Search>
  <h1 style="font-size: 350%; border-bottom: 3px red solid; width: max-content; margin-left: 2%;">Search results for "{{ areaName }}"</h1>
<outerFeed/>
  
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import outerFeed from "./outerFeed.vue";
import Search from "./search.vue";
export default {
  name: "FeedByArea",
  data() {
    return {
      areaName: this.$route.params.id,
    };
  },
  components: {
    RouterLink,
    RouterView,
    outerFeed,
    Search,
  },
  mounted() {
    this.mnt();
  },
  methods: {
    mnt() {
      this.$store.dispatch("MealByArea", this.areaName);
    },
  },
};
</script>

<style>

</style>
