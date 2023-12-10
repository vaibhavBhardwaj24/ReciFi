<template>
  <search />
  <h1 style="font-size: 350%; margin-left: 2%; border-bottom: 3px red solid; width: max-content;">Search by catagories</h1>
  <div class="table">
    <div v-for="cata in $store.state.catagories">
      <RouterLink
        :to="{ name: 'catagoryMeal', params: { id: cata.strCategory } }"
        >
          <div class="dnf">
            <!-- {{ cata.strCategory }} -->
            <img :src="cata.strCategoryThumb" />
            <h1 class="name">{{ cata.strCategory }}</h1>
          
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import search from "./search.vue";
import Search from "./search.vue";
export default {
  name: "catagoryList",
  components: {
    search,
  },
  mounted() {
    this.$store.dispatch("catagories");
    // console.log(this.$store.state.catagories);
  },
  components: { RouterLink, Search },
};
</script>

<style scoped>

.table {
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(5em));
  grid-template-columns: repeat(auto-fill, minmax(20em, 20em));
  gap: 135px;
  margin-inline: 9%;
}
img {
  border-radius: 7% 5%;
}
.dnf {
  
  border-radius: 10%;
  height: 20em;
  width: 20em;
  margin: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: black;
  background-color: white;
  font-size: larger;
  /* font-weight: bolder; */
  box-shadow: 12px 12px 41px rgba(0, 0, 0, 0.7);
}
.dnf:hover {
  transform: scale(1.02);
  transition-duration: 300ms;
  border: 3px solid black;
}

a {
  text-decoration: none;
}
</style>
