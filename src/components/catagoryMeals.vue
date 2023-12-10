<template>
  <Search></Search>
  <h1 style="font-size: 350%; margin-left: 2%; border-bottom: 3px red solid; width: max-content;">Search results for "{{ cat }}"</h1>
  <!-- <h1>Search results for "{{ naam }}"</h1> -->
  <OuterFeed/>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import Search from "./search.vue";
import Feed from "./Feed.vue";
import outerFeed from "./outerFeed.vue";
import OuterFeed from "./outerFeed.vue";
export default {
  name: "catagoryMeals",
  components: {
    Feed,
    Search,
    outerFeed
  },
  data() {
    return {
      cat: this.$route.params.id,
    };
  },
  components: {
    RouterLink,
    RouterView,
    Search,
    Feed,
    OuterFeed
},
  mounted() {
    this.mnt();
  },
  methods: {
    mnt() {
      this.$store.dispatch("MealByCat", this.cat);
    },
  },
};
</script>

<style>

</style>
