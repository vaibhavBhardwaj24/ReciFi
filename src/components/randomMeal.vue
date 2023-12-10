<template>
  <div>
   <h1 class="paa"> Latest recipes</h1>
   
    <randView :meal="$store.state.random[0]" />
  </div>
</template>

<script>
import axios from "axios";
import randView from "./randomView.vue";
export default {
  name: "random",
  props: {
    meal:[]
  },
  components:{
    randView
  },
  mounted() {
    this.mnt();
  },
  methods: {
    mnt() {
      this.$store.dispatch("randomMeal");
    },
  },
};
</script>

<style scoped>
.paa{
  font-size: 450%;
  margin-top: 0%;
  margin-left: 0.5em;
  /* display: flex; */
  width:max-content;
  border-bottom: 3px red solid;
}
</style>
