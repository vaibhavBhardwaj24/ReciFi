<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
  <div></div>
  <navbar />
  <!-- <home></home> -->
  <RouterView></RouterView>
</template>

<script>
import randomMeal from "./components/randomMeal.vue";
import home from "./components/home.vue";
import navbar from "./components/navbar.vue";
export default {
  components: {
    home,
    navbar,
    randomMeal,
  },
  methods: {},
};
</script>

<style scoped>
h1 {
  color: black;
}
*{
  font-family: 'Roboto', sans-serif;
}
</style>
