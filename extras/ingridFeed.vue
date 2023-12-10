<template>
  <div>
    <RouterLink 
      :to="{ name: 'multiIngrid', params: { id: meal.strIngredient } }"
      >{{ meal.strIngredient }}</RouterLink
    >
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "ingridFeed",
  props: {
    meal: {},
  },
  components: { RouterLink, RouterView },
  mounted() {
    // this.mnt()
  },
  methods: {},
};
</script>

<style scoped></style>
