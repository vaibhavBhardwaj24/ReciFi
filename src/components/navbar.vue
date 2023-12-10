<template>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
  <div class="load" :style="{ display: visi }">
    <!-- <input
      :style="{ width: 'wid' }"
      type="text"
      placeholder="Search"
      v-model="naam"
    /> -->
    <div class="input-container">
      <input type="text" id="input" required="" v-model="naam" />
      <label for="input" class="label">Search recipes</label>
      <div class="underline"></div>

      <RouterLink
        :to="{ name: 'NameSearch', params: { id: this.one } }"
        style="margin-top: 0px; margin-bottom: 0px; margin-inline: 5px"
        ><button class="bttn" @click="VisOff()">
          <span
            id="searchIcon"
            class="material-symbols-outlined"
            style="font-size: 50px"
          >
            search
          </span>
        </button></RouterLink
      >
      <button class="bttn" s>
        <span
          class="material-symbols-outlined"
          style="font-size: 50px"
          @click="viisi()"
        >
          close
        </span>
      </button>
      <!-- <button @click="VisOff">X</button> -->
    </div>
  </div>
  <div class="nav">
    <div class="input">
      <!-- <RouterLink :to="{name:'search'}"><button>find recipes</button></RouterLink> -->
      <!-- <div>ReciFi</div> -->
      <!-- <hr> -->
      <RouterLink  :to="{name:'home'}">
      <h1 style="font-size: 300%; margin: 0%; ">ReciFi</h1>
    </RouterLink>
      <!-- <button >Search</button> -->
      <button class="search" @click="VisOn()">Search</button>
    </div>
    <div class="alpha">
      <RouterLink
      class="letter"
        :to="{ name: 'letterSearch', params: { id: lett } }"
        v-for="lett in letters.split('')"
        ><p>{{ lett }}</p></RouterLink
      >
    </div>
  </div>
</template>

<script>
import letterSearch from "./letterSearch.vue";
export default {
  name: "navbar",
  components: {
    letterSearch,
  },
  data() {
    return {
      letters: "ABCDEFGHIJKLMNOPQRTUVWXYZ",
      naam: "",
      inn: " ",
      visi: "none",
    };
  },
  methods: {
    VisOn() {
      this.visi = "flex";
    },
    VisOff() {
      this.visi = "none";
      this.$store.dispatch("MealByName", this.one);
    },
    viisi(){
      this.visi = "none";
    }
  },
  computed:{
    one(){
      return this.naam+" ";
    }
  }
};
</script>

<style scoped>
.load {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
  /* display: flex; */
  align-items: center;
  justify-content: center;
  z-index: 3;
  font-family: 'Times New Roman', Times, serif;
}

.nav {
  background-color: #2F4858;
  width: 100%;
  height: 9em;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-end;
  z-index: 1;
  
}
.input {
  display: flex;
  flex-direction: row;
  width: 55%;
  /* align-items:  */
  justify-content: space-between;
}
.letter {
  display: flex;
  padding-top: 5px;
  margin-inline: 10px;
  font-size: x-large;
  text-decoration: none;
  color: black;
  font-weight: bolder;
  color: #e8e8e8;
}
.letter:hover {
  font-size: xx-large;
  /* margin-inline: 5px; */
  transition-duration: 250ms;
}
.alpha {
  display: flex;
  flex-direction: row;
  height: 3em;
  justify-content: center;
  width: 100%;
  align-items: center;
  /* border-top: 2px solid black; */
  /* border: 0px; */
}
.bttn {
  background-color: transparent;
  border: none;
  margin-bottom: 5px;
  border: 2px solid transparent;
}
.bttn:hover {
  border: 2px solid black;
  border-radius: 20%;
  transition-duration: 300ms;
}
.input-container {
  position: relative;
  margin: 70px auto;
  /* width: 200px; */
  display: flex;
}

.input-container input[type="text"] {
  font-size: 50px;
  width: 100%;
  border: none;
  border-bottom: 2px solid #ccc;
  padding: 5px 0;
  background-color: transparent;
  outline: none;
}

.input-container .label {
  font-size: 50px;
  position: absolute;
  top: 0;
  left: 0;
  color: #888888;
  transition: all 0.3s ease;
  pointer-events: none;
}

.input-container input[type="text"]:focus ~ .label,
.input-container input[type="text"]:valid ~ .label {
  top: -20px;
  font-size: 30px;
  color: #333;
}

.input-container .underline {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 82%;
  background-color: #333;
  transform: scaleX(0);
  transition: all 0.3s ease;
}

.input-container input[type="text"]:focus ~ .underline,
.input-container input[type="text"]:valid ~ .underline {
  transform: scaleX(1);
}
.search {
 padding: 15px 25px;
 border: unset;
 margin-right: 0.5em;
 margin-top: 1em;
 border-radius: 15px;
 color: #2F4858;
 z-index: 1;
 background: #e8e8e8;
 position: relative;
 font-weight: 1000;
 font-size: 17px;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 250ms;
 overflow: hidden;
 height: 3em;
}

.search::before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 width: 0;
 border-radius: 15px;
 background-color: #9BAEBC;
 border: 1px solid #9BAEBC;
 z-index: -1;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 250ms
}

.search:hover {
 color: white;
}

.search:hover::before {
 width: 100%;
}
a{
  text-decoration: none;
  color: #e8e8e8;
}
a:hover{
  transform: scale(1.05);
  transition: all 300ms;
}
</style>
