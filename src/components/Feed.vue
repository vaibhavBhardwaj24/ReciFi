<template>
  <RouterLink :to="{ name: 'meal', params: { id: meal.idMeal } }">
    <div class="post">
      <div class="image-container">
        <img :src="meal.strMealThumb" alt="" />
        <div class="gradient-overlay">
          <div class="txt">
            <h1>{{ meal.strMeal }}</h1>
            <p v-if="meal.strCategory">Categories- {{ meal.strCategory }}</p>
            <p v-if="meal.strArea">Region- {{ meal.strArea }}</p>
          </div>
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  name: "feed",
  props: {
    meal: {},
  },

  components: { RouterLink, RouterView },
};
</script>

<style scoped>
.post {
  height: 400px;
  /* */
  width: 400px;
  border-radius: 5%;
  overflow: hidden;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.7);
}
.post:hover {
  transform: scale(1.04);
  transition-duration: 300ms;
  border: 3px solid black;
}

.image-container {
  position: relative;
  width: 100%;
}
.txt:hover {
  /* transform:scale(0.9); */
  transition-duration: 100ms;
}
.h1:hover {
  text-decoration: underline;
}
.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.9)
  );
  pointer-events: none;
  z-index: 1;
  display: flex;
  align-items: end;
}
img {
  width: 100%;

  /* border-radius: 5%; */
}
.txt {
  color: #e8e8e8;
  margin-left: 1em;
  margin-bottom: 1em;
}
</style>
