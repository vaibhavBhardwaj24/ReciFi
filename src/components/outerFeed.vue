<template>
  <!-- <Search /> -->
  <!-- <h1 style="font-size: 350%; margin-left: 2%;">Search by Letter</h1> -->
  <div>
    <div class="feed">
      <div class="post">
        <div v-for="meal in $store.state.meals">
          <Feed class="dam" :meal="meal" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Feed from "./Feed.vue";
import Search from "./search.vue";

export default {
  name: "outerFeed",
  components: {
    Feed,
    Search,
  },
};
</script>

<style scoped>
.feed {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  margin-left: 3em;
  margin-top: 2em;
}
.post {
  display: grid;
  grid-template-rows: repeat(auto-fill, minmax(15em, 15em));
  grid-template-columns: repeat(auto-fill, minmax(19em, 20em));
  gap: 200px;
}
</style>
