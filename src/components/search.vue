<template>
  <div class="cnt">
    <RouterLink :to="{ name: 'IngridientSearch' }"
      ><button>Search by ingridients</button></RouterLink
    >
    <RouterLink :to="{ name: 'AreaSearch' }"
      ><button>Search by Country</button></RouterLink
    >
    <RouterLink :to="{ name: 'catagories' }"
      ><button>Catagories</button></RouterLink
    >
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      letters: "ABCDEFGIJKLMNOPQRTUVWXYZ",
      naam: " ",
      inn: " ",
    };
  },
  methods: {
    mnt() {
      this.$store.dispatch("MealByName", this.naam);
    },
  },
};
</script>

<style scoped>
.cnt {
  width: 100%;
  border-bottom: 3px solid black;
}
a {
  margin-left: 2em;
  /* margin-bottom: 2em; */
}
button {
  height: 1em;
  margin: 1em;
  margin-inline: 0em;
  font-size: 18px;
  color: #222;
  font-family: inherit;
  font-weight: 800;
  cursor: pointer;
  position: relative;
  border: none;
  background: none;
  text-transform: uppercase;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: color;
}

button:focus,
button:hover {
  color: #222;
}

button:focus:after,
button:hover:after {
  width: 100%;
  left: 0%;
}

button:after {
  content: "";
  pointer-events: none;
  bottom: -5px;
  left: 50%;
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: red;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-duration: 400ms;
  transition-property: width, left;
}
</style>
