import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import letterSearch from "./components/letterSearch.vue";
import NameSearch from "./components/NameSearch.vue";
import IngridientSearch from "./components/IngridientSearch.vue";
import singleMeal from "./components/singleMeal.vue";
import areaSearch from "./components/AreaSearch.vue";
import multiMeal from "./components/multiMealIngrid.vue";
import FeedByArea from "./components/FeedByArea.vue";
import CatagoryList from "./components/catagoryList.vue";
import catagoryMeal from "./components/catagoryMeals.vue";
import index from "./index";
import home from "./components/home.vue";
import search from "./components/search.vue";
const routes = [
  { path: "/", name: "home", component: home },
  { path: "/search", name: "search", component: search },
  { path: "/letterSearch/:id", name: "letterSearch", component: letterSearch },
  { path: "/NameSearch/:id", name: "NameSearch", component: NameSearch },
  {path: "/IngridientSearch",name: "IngridientSearch",component: IngridientSearch,},
  { path: "/meal/:id", name: "meal", component: singleMeal },
  { path: "/multiIngrid/:id", name: "multiIngrid", component: multiMeal },
  { path: "/AreaSearch", name: "AreaSearch", component: areaSearch },
  { path: "/AreaMeal/:id", name: "AreaMeal", component: FeedByArea },
  { path: "/Catagories", name: "catagories", component: CatagoryList },
  { path: "/CatagoryMeal/:id", name: "catagoryMeal", component: catagoryMeal },
];
const router = createRouter({
  routes,
  history: createWebHistory(),
});
createApp(App).use(router).use(index).mount("#app");
