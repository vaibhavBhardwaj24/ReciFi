<template>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
  />
  <div>
    <search />

    <div class="nav">
      <div class="group">
        <input required="" type="text" class="input" v-model="naam" />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Search by ingridients</label>
      </div>
      <!-- <input type="text" placeholder="Search by ingridients" v-model="naam"/> -->
      <button class="bttn" @click="mnt()">
        <span id="searchIcon" class="material-symbols-outlined">search </span>
      </button>
      <!-- <button @click="mnt()">search</button> -->
      <button class="ingrid" @click="toggleShow">
        <span>{{ bttnTxt }} all Ingridients</span>
      </button>
    </div>

    <section class="dis" v-if="this.showMeal">
      <div class="table">
        <div v-for="ing in $store.state.ingrid">
          <ingridients :ingridName="ing.strIngredient" :ingridMeasure="null" />
        </div>
      </div>
    </section>
    <outerFeed v-if="!this.showMeal" />
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";
import search from "./search.vue";
import outerFeed from "./outerFeed.vue";
import Feed from "./Feed.vue";
import ingridients from "./ingridients.vue";
export default {
  name: "IngridientSearch",
  data() {
    return {
      naam: "",
      showMeal: true,
      mat: [],
      word: "Show",
    };
  },
  components: {
    Feed,
    RouterLink,
    search,
    outerFeed,
    ingridients,
  },
  mounted() {
    // this.mnt();
    this.ingrid();
  },
  computed: {
    bttnTxt() {
      return this.showMeal ? "Hide" : "Show";
    },
  },
  methods: {
    ingrid() {
      this.$store.dispatch("ingrid");
      this.$store.state.meals = {};
    },
    mnt() {
      console.log(this.naam);
      this.$store.dispatch("MealByIngri", this.naam);
      this.toggleShow();
    },
    toggleShow() {
      // this.$store.state.showMeal = !this.$store.state.showMeal;

      this.showMeal = !this.showMeal;
    },
  },
};
</script>

<style scoped>
.table {
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(4em, 4em));
  grid-template-columns: repeat(auto-fill, minmax(15em, 15em));
  gap: 125px;
}
.dis {
  /* display: flex; */
  margin: 4em;
}
.group {
  position: relative;
  margin: 2%;
  margin-right: 0%;
}

.input {
  font-size: 30px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 500px;
  border: none;
  border-bottom: 1px solid #252525;
  background: transparent;
}

.input:focus {
  outline: none;
}

label {
  color: #252525;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.input:focus ~ label,
.input:valid ~ label {
  top: -20px;
  font-size: 14px;
  color: #252525;
}

.bar {
  position: relative;
  display: block;
  width: 520px;
}

.bar:before,
.bar:after {
  content: "";
  height: 3px;
  width: 0;
  bottom: 0px;
  position: absolute;
  background: #252525;
  transition: 0.2s ease all;
  -moz-transition: 0.2s ease all;
  -webkit-transition: 0.2s ease all;
}

.bar:before {
  left: 50%;
}

.bar:after {
  right: 50%;
}

.input:focus ~ .bar:before,
.input:focus ~ .bar:after {
  width: 50%;
}

.highlight {
  position: absolute;
  height: 60%;
  width: 100px;
  top: 25%;
  left: 0;
  pointer-events: none;
  opacity: 0.5;
}

.input:focus ~ .highlight {
  animation: inputHighlighter 0.3s ease;
}

@keyframes inputHighlighter {
  from {
    background: #252525;
  }

  to {
    width: 0;
    background: transparent;
  }
}
.nav {
  display: flex;
  align-items: center;
}
.material-symbols-outlined {
  font-size: 50px;
  transform: translateX(-30%);
}
.bttn {
  width: 5em;
  height: 5em;
  border: 0px;
  background-color: transparent;
}
.material-symbols-outlined:hover {
  font-size: 62px;
  transition-duration: 200ms;
}



.ingrid {
 display: inline-block;
 border: 2px solid #252525;
 border-radius: 8px;
 background-color: transparent;
 /* border: none; */
 color: #252525;
 text-align: center;
 font-size: 19px;
 padding: 16px;
 width: 170px;
 transition: all 0.3s;
 cursor: pointer;
 margin: 5px;
}

.ingrid span {
 cursor: pointer;
 display: inline-block;
 position: relative;
 transition: 0.3s;
}
.ingrid:hover{
  background-color: #2F4858;
  transition:linear;
  transition-duration: 300ms
  00ms;
  color: #e8e8e8;
}
.ingrid span:after {
 content: '»';
 position: absolute;
 opacity: 0;
 top: 0;
 right: -15px;
 transition: 0.3s;
 /* background-color: ; */
}

.ingrid:hover span {
 padding-right: 15px;
}

.ingrid:hover span:after {
 opacity: 1;
 right: 0;
}
</style>
