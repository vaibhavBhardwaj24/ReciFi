<template>
  <div v-if="show">
    <div class="random">
      <RouterLink :to="{ name: 'meal', params: { id: meal.idMeal } }">
        <img :src="meal.strMealThumb" />
        <div class="txt">
          <h1>{{ meal.strMeal }}</h1>
          <h2>Category- {{ meal.strCategory }}</h2>
          <h2>Region- {{ meal.strArea }}</h2>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  name: "randView",
  data() {
    return {
      show: false,
    };
  },
  props: {
    meal: {},
  },
  components: {
    RouterLink,
  },
  methods: {
    async delay() {
      setTimeout(() => {
        console.log("delay");
        this.show = true;
      }, 200);
    },
  },
  mounted() {
    this.delay();
    console.log("over");
  },
};
</script>

<style scoped>
a {
  width: 75%;
  display: flex;
  text-decoration: none;
  color: black;
  border: 4px solid black;
  border-radius: 15px;
  margin-left: 2em;
  margin-bottom: 2em;
  overflow: hidden;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.30);
  background-color: white;
}
a:hover {
  transform: scale(0.97);
  transition-duration: 250ms;
}
img {
  height: 27em;
  border-right: 4px solid black;
}
h1 {
  font-size: 450%;
}
h2 {
  font-size: 200%;
}
.txt {
  margin-left: 2em;
 
}

</style>
