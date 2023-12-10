<template>
  <search></search>
  <h1>Search results for "{{ naam }}"</h1>
  <outerFeed />
</template>

<script>
import Feed from "./Feed.vue";
import search from "./search.vue";
import outerFeed from "./outerFeed.vue";
export default {
  name: "NameSearch",

  components: {
    Feed,
    search,
    outerFeed,
  },
  data() {
    return {
      naam: this.$route.params.id,
    };
  },
  mounted() {
    this.mnt();
  },
  methods: {
    mnt() {
      this.$store.dispatch("MealByName", this.short);
    },
  },
  computed: {
    short() {
      return this.naam.slice(1);
    },
  },
};
</script>

<style scoped>
h1{
  margin-left: 1em;
}</style>
