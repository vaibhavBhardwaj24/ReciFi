<template>
  <search />
  <h1 style="font-size: 350%; margin-left: 2%; color: #252525 ; border-bottom: 3px red solid; width: max-content;">Search by Countries</h1>
  <div class="list">
    <ul>
      <li v-for="country in $store.state.area">
        <RouterLink :to="{ name: 'AreaMeal', params: { id: country.strArea } }">
          <div class="item">
            <!-- {{ country.strArea }} -->
            <span class="count">
               {{ country.strArea }}
               <span class="symb"></span>
              </span>
          </div>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import search from "./search.vue";
export default {
  name: "areaSearch",
  components: {
    RouterLink,
    search,
  },
  mounted() {
    this.$store.dispatch("Area");
  },
};
</script>

<style scoped>
.list {
  margin: 5%;
}
.list ul li {
  list-style-type: none;
}
.item {
  height: 2em;
  font-size: 225%;
  overflow: hidden;
  border: 2px solid #252525;
  border-radius: 7px;
  /* display: flex;
  align-items: center; */
  /* padding-left: 2%; */
  margin: 2%;
  /* position: absolute; */
}
.item:hover{
  left: 10%;
}
.count{
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 2%;
  /* justify-content: space-between; */
  text-decoration: none;
}
.item:hover .count{
  transform-origin: left ;
  animation: slideIn 0.3s ease-in;
  background-color: #2F4858;
  color: #e8e8e8;
  /* transition: all 0.2s; */
}
.item:hover .symb::after{
  content: '»';
}
@keyframes slideIn {
  from {
    
        transform: translateX(-100%);
        opacity: 0;
      }
      to {
        transform: translateX(0%);
        opacity: 1;
        /* background-color: red; */
      }
}

.symb::after{
  /* content: 'ccc'; */
  content: '';
  font-size: xx-large;
}

a{
  text-decoration: none;
  color: #252525;
  letter-spacing: 0.8em;
}
</style>
