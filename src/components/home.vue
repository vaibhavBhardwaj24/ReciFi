<template>
  <search />
  <randomMeal />
  <h1
    style="
      font-size: 450%;
      margin-left: 2%;
      border-bottom: 3px red solid;
      width: max-content;
    "
  >
    Catagories
  </h1>
  <div class="sideScroll">
    <div class="cata" v-for="cat in $store.state.catagories">
      <RouterLink
        :to="{ name: 'catagoryMeal', params: { id: cat.strCategory } }"
      >
        <div class="ind">
          <img :src="cat.strCategoryThumb" alt="" />

          <div class="txt">
            <span class="cont">
              <h1 style="font-size: 335%">{{ cat.strCategory }}</h1>
              <p style="font-size: larger">
                {{ desc(cat.strCategoryDescription) }}.....
              </p>
            </span>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>

  <div class="abt">
    <div class="taxt">
      <img src="svgs\Blogging-bro-png.png" alt="" style="height: 43em" />
      <div class="text">
        <h1
          style="
            font-size: 550%;
            margin-left: 5%;
            border-bottom: 3px red solid;
            width: max-content;
          "
        >
          About Us
        </h1>
        <p class="abtTxt">
          Welcome to ReciFi, where culinary creativity meets simplicity! At
          ReciFi, we are passionate about transforming everyday cooking into an
          enjoyable and accessible experience. Our platform is designed to
          inspire both seasoned chefs and kitchen newcomers, offering a diverse
          array of recipes to suit various tastes and skill levels. What sets us
          apart is our commitment to user-friendliness. Navigate effortlessly
          through our curated collection, save your favorite recipes, and
          generate shopping lists with just a click. We are powered by
          <a href="https://www.themealdb.com/" style="color: blue">TheMealDB</a>
          for our recipies
        </p>
      </div>
    </div>
    <div class="foot">
      <div>
        <h1>ReciFi</h1>
        <p>Made by Vaibhav Bhardwaj</p>
      </div>
      <div class="card">
        <a href="https://www.instagram.com/vaibhav.bhardwaj.24/" class="socialContainer containerOne">
          <svg class="socialSvg instagramSvg" viewBox="0 0 16 16">
            <path
              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
            ></path>
          </svg>
        </a>

        <a href="#" class="socialContainer containerTwo">
          <svg class="socialSvg twitterSvg" viewBox="0 0 16 16">
            <path
              d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
            />
          </svg>
        </a>

        <a href="#" class="socialContainer containerThree">
          <svg class="socialSvg linkdinSvg" viewBox="0 0 448 512">
            <path
              d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
            ></path>
          </svg>
        </a>

        <a href="#" class="socialContainer containerFour">
          <svg class="socialSvg whatsappSvg" viewBox="0 0 16 16">
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>

  <!-- <foot></foot> -->
</template>

<script>
import randomMeal from "./randomMeal.vue";
import search from "./search.vue";
import foot from "./foot.vue";
import { RouterLink } from "vue-router";
export default {
  name: "home",
  components: {
    randomMeal,
    search,
    RouterLink,
    foot,
  },
  data() {
    return {
      cats: this.$store.state.catagories,
    };
  },
  mounted() {
    this.$store.dispatch("catagories");
    console.log(this.$store.state.catagories);
  },
  methods: {
    desc(str) {
      return str.slice(0, 100);
    },
  },
};
</script>

<style scoped>
.abt {
  display: flex;
  height: 50em;
  align-items: flex-start;
  flex-direction: column;
}
.abtTxt {
  font-size: x-large;
  margin: 5%;
}
.taxt {
  display: flex;
}
.foot {
  width: 98%;
  /* overflow-y:unset; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80%;
  background-color: #2f4858;
  padding: 1%;
}
.foot h1 {
  font-size: 250%;
  color: #e8e8e8;
}
.foot p {
  color: #e8e8e8;
}
.sideScroll {
  white-space: nowrap; /* Prevent text from wrapping to the next line */
  overflow-x: auto; /* Enable horizontal scrolling */
  padding: 20px;
  scroll-padding: 2px;
  scrollbar-width: none;
}
.cata {
  display: inline-block; /* Display items in a single line */
  white-space: normal; /* Allow text wrapping inside items */
  margin-inline: 20px;
  background-color: white;
  border-radius: 15px;
}
.ind {
  height: 30em;
  width: 20em;
  border: 3px solid #252525;
  display: flex;
  flex-direction: column;
  /* padding: 2%; */
  justify-content: space-around;
  overflow: hidden;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
}
.cata:hover {
  transform: scale(0.98);
  transition: all 300ms;
}
.cata:hover img a {
  transform: scale(1.05);
  transition: all 300ms;
}
img {
  height: 10em;
}
a {
  text-decoration: none;
  color: black;
}
.txt {
  width: 100%;
  border-top: 3px solid #252525;
  height: 50%;
}
.ind:hover .cont {
  content: "";
  transform-origin: left;
  animation: slideIn 0.27s ease-in;
  background-color: #2f4858;
  color: #e8e8e8;
}
.cont {
  height: 110%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2%;
  /* justify-content: space-between; */
  text-decoration: none;
}
@keyframes slideIn {
  0% {
    transform: translate(-100%, 100%);
    border-radius: 50%;
    border-top-left-radius: 0%;
  }
  25% {
    transform: translate(-75%, 75%);
    border-radius: 30%;
    border-top-left-radius: 0%;
  }
  50% {
    transform: translate(-50%, 50%);
    border-radius: 15%;

    border-top-left-radius: 0%;
  }
  75% {
    transform: translate(-25%, 25%);
    border-radius: 15%;

    border-top-left-radius: 0%;
  }
  100% {
    transform: translate(0, 0);
    border-radius: 15%;

    border-top-left-radius: 0%;
  }
  /* from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0%);
    opacity: 1;
  } */
}
.card {
  width: fit-content;
  height: fit-content;
  background-color: #e8e8e8;
  /* border: 2px solid #e8e8e8; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px ;
  border-radius: 10px;
  gap: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.055);
}

/* for all social containers*/
.socialContainer {
  width: 52px;
  height: 52px;
  background-color: rgb(44, 44, 44);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition-duration: 0.3s;
}
/* instagram*/
.containerOne:hover {
  background-color: #d62976;
  transition-duration: 0.3s;
}
/* twitter*/
.containerTwo:hover {
  background-color: #00acee;
  transition-duration: 0.3s;
}
/* linkdin*/
.containerThree:hover {
  background-color: #0072b1;
  transition-duration: 0.3s;
}
/* Whatsapp*/
.containerFour:hover {
  background-color: #128c7e;
  transition-duration: 0.3s;
}

.socialContainer:active {
  transform: scale(0.9);
  transition-duration: 0.3s;
}

.socialSvg {
  width: 17px;
}

.socialSvg path {
  fill: rgb(255, 255, 255);
}

.socialContainer:hover .socialSvg {
  animation: slide-in-top 0.3s both;
}

@keyframes slide-in-top {
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
