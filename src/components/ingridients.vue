<template>
  <RouterLink :to="{ name: 'multiIngrid', params: { id: ingridName } }">
    <div class="how">
      <section class="box">
        <div class="ing">
          <h1 style="margin: 5px;">{{ ingridName }}</h1>
            <h4 style="margin: 5px;" v-if="ingridMeasure">{{ ingridMeasure }}</h4 >
          
        </div>

        <img
          :src="`https://www.themealdb.com/images/ingredients/${ingridName}.png`"
          alt="yess"
        />
      </section>
    </div>
  </RouterLink>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
export default {
  name: "ingridients",
  
  props: {
    ingridName: "",
    ingridMeasure: "",
  },
  components: {
    RouterLink,
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
  
}
.ing{
    padding: 5px;
    width: 50%;
    font-size: x-large;
    display: flex;
    flex-direction: column;
    
}
img {
  height: 100%;
}
.box {
  background-color: white;
  display: flex;
  height: 10em;
  width: 20em;
  border-radius: 10px;
}
.box:hover {
  transform: scale(0.92);
  transition-duration: 200ms;
}
.how{
    background-color: white;
  display: flex;
  height: 10em;
  width: 20em;
  border-radius: 10px;
  border: 2px solid black;
  box-shadow:  10px 10px 10px rgba(0, 0, 0, 0.15);
}
.how:hover {
  transform: scale(0.98);
  transition-duration: 150ms;
}
</style>
