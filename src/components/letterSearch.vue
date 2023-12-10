<template>
<search></search>
  <OuterFeed />
</template>

<script>
import Feed from "./Feed.vue";
import search from "./search.vue";

import outerFeed from "./outerFeed.vue";
import OuterFeed from "./outerFeed.vue";
export default {
  name: "letterSearch",
  components: {
    outerFeed,
    search
  
  },
  data() {
    return {
      letter: this.$route.params.id,
    };
  },

  components: {
    Feed,
    OuterFeed,
  },
  mounted() {
    this.mnt();
  },
  methods: {
    mnt() {
      this.$store.dispatch("MealByLetter", this.letter);
    },
  },
};
</script>

<style lang="scss" scoped></style>
