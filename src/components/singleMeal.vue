<template>
  <search/>
  <div class="page">
    <div class="front" style="border-bottom: 3px solid black;">
    <div class="title">
        <div class="daa">
        <div class="info">
        <p class="titi">{{ meal.strMeal }}</p >
            <div class="cate">
        <p style="font-size: x-large; margin: 5px; border-bottom:2px solid red ;">Category: {{ meal.strCategory }}</p>
        <p style="font-size: x-large; margin: 5px;border-bottom:2px solid red ;">Country: {{ meal.strArea }}</p>
        <p style="font-size:large; margin: 5px;"> Tags: {{ meal.strTags }}</p>
    </div>
    </div>
</div>
    <img :src="meal.strMealThumb" />
</div>
</div> 
<div class="rest">
<p style="font-size: 450%; border-bottom:2px solid red ; width: fit-content;">Ingridients</p>
    <div class="ingridTable">
      <div class="box" v-for="(i, ind) of new Array(20)">
        <li class="indi" v-if="meal[`strIngredient${ind + 1}`]">
          <ingridients
            :ingridName="meal[`strIngredient${ind + 1}`]"
            :ingridMeasure="meal[`strMeasure${ind + 1}`]"
          />
        </li>
      </div>
      
    </div>
    <p class="recepi">
        <p style="font-size: 350%; border-bottom:2px solid red ; width: fit-content;">Instructions</p>
      
      <div  v-html="formattedInstructions"></div></p>
  <a :href="meal.strYoutube"><button class="button">Youtube</button></a>

  <a :href="meal.strSource"><button class="button">Source</button></a>
  <!-- {{ meal }} -->
  </div>
</div>
  
</template>

<script>
import axios from "axios";
import ingridients from "./ingridients.vue";
import search from "./search.vue";
export default {
  name: "singleMeal",

  components: {
    ingridients,
    search
  },
  data() {
    return {
      id: this.$route.params.id,
      ins:"",
      meal: [],
    };
  },
  mounted() {
    this.mnt();
  },
  computed: {
    formattedInstructions() {
      return this.convertToList(this.ins);
    },
  },
  methods: {
    convertToList(instructions) {
    if (!instructions) return ''; // Check if instructions is valid

    // Split the instructions into individual steps using full stops
    const steps = instructions.split(/(?<=\.)\s+/).filter(Boolean);

    // Create an ordered list with each step as a list item
    let htmlList = '<ol>';

    steps.forEach((step) => {
      htmlList += `<li>${step.trim()}</li>`;
    });

    htmlList += '</ol>';

    return htmlList;
  },
    async mnt() {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.id}`
      );
      this.meal = res.data.meals[0];
      console.log(res.data.meals[0].strInstructions);
      this.ins=res.data.meals[0].strInstructions;
      //   this.img = this.meal[0].strMealThumb;
    },
  },
};
</script>

<style scoped>
.page {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f9f6ee;
}
.box {
  margin: 5px;
}
.indi {
  width: 80%;
  height: 80%;
}
img {
  /* width: 650px; */
  width: 50%;
  max-height: 42em;
  border-left: 3px solid black;
}
.ingridTable {
  display: grid;
  grid-template-rows: repeat(auto-fill ,minmax(4em, 10em));
  background-color: #f9f6ee;
  grid-template-columns: repeat(auto-fill, minmax(17em,17em));
    gap: 100px;
  justify-content: flex-start;
  list-style: none;
}
.rest{
    margin-left: 2em;
}
.title{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
}
.info{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
}
.titi{
    font-size: 7em;
    margin: 5px;
    padding: 15px;
    /* border: 4px solid #252525; */
}
.cate{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.daa{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.recepi{
    height: fit-content;
    font-size: larger;
    width: 50em;
}
/* inspired form gumroad website */
.button {
  --bg: #000;
  --hover-bg: #9BAEBC;
  --hover-text: #000;
  color: #fff;
  border: 1px solid var(--bg);
  border-radius: 4px;
  padding: 0.8em 2em;
  background: var(--bg);
  transition: 0.2s;
  font-size: larger;
  font-weight: bolder;
  margin: 2%;
}

.button:hover {
  color: var(--hover-text);
  transform: translate(-0.25rem,-0.25rem);
  background: var(--hover-bg);
  box-shadow: 0.25rem 0.25rem var(--bg);
}

.button:active {
  transform: translate(0);
  box-shadow: none;
}
</style>
