import { createStore } from "vuex";
import axios from "axios";
export default createStore({
  state: {
    showMeal: false,
    meals: [],
    ingrid: [],
    area: [],
    catagories: [],
    random:[]
  },
  mutations: {
    setMeal(state, data) {
      state.meals = data;
    },
    setIngrid(state, data) {
      state.ingrid = data;
    },
    setArea(state, data) {
      state.area = data;
    },
    setCat(state, data) {
      state.catagories = data;
    },
    setRandom(state,data){
      state.random=data;
    }
  },
  actions: {
    async MealByLetter({ commit }, letter) {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`
      );
      commit("setMeal", res.data.meals);
    },
    async MealByName({ commit }, name) {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
      );
      commit("setMeal", res.data.meals);
    },
    async MealByIngri({ commit }, inn) {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inn}`
      );
      commit("setMeal", res.data.meals);
    },
    async MealByArea({ commit }, data) {
      const res = await axios.get(`
      https://www.themealdb.com/api/json/v1/1/filter.php?a=${data}`);
      commit("setMeal", res.data.meals);
    },
    async MealByCat({ commit }, data) {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${data}`
      );
      commit("setMeal", res.data.meals);
    },
    async randomMeal({ commit }) {
      const res = await axios.get(`
      https://www.themealdb.com/api/json/v1/1/random.php`);
      console.log(res.data.meals);
      commit("setRandom",res.data.meals)
    },
    async ingrid({ commit }) {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/list.php?i=list"
      );
      commit("setIngrid", res.data.meals);
    },
    async Area({ commit }) {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/list.php?a=list"
      );
      commit("setArea", res.data.meals);
    },
    async catagories({ commit }) {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      commit("setCat", res.data.categories);
    },
  },
  getters: {},
});
