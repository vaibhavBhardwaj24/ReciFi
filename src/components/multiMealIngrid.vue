<template>
  <div>
    <h1>Search results for "{{ ingriName }}"</h1>

    <outerFeed />
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import outerFeed from "./outerFeed.vue";
export default {
  name: "multiMeal",
  data() {
    return {
      ingriName: this.$route.params.id,
    };
  },
  components: {
    RouterLink,
    RouterView,
    outerFeed,
  },
  mounted() {
    this.mnt();
  },
  methods: {
    mnt() {
      this.$store.dispatch("MealByIngri", this.ingriName);
    },
  },
};
</script>

<style lang="scss" scoped></style>
