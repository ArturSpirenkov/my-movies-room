<script setup>
import { useMovieStore } from '../stores/MovieStore';
import { computed } from 'vue';
import router from '../router';

const movieStore = useMovieStore();

const allMovies = computed(() => movieStore.numberAllMovies);
const isWatchedMovies = computed(() => movieStore.watchedMovies.length);
const goToWatchedMovies = () => {
  router.push('/movies/watched');
};
const goToAllMovies = () => {
  router.push('/home');
};
</script>

<template>
  <ul class="dashboard">
    <li @click="goToWatchedMovies">
      <span>{{ isWatchedMovies }}</span>
      <p>просмотренно</p>
    </li>
    <li @click="goToAllMovies">
      <span>{{ allMovies }}</span>
      <p>все фильмы</p>
    </li>
  </ul>
</template>
<style lang="scss" scoped>
.dashboard {
  list-style: none;
  display: flex;
  padding: 0;
  max-width: 250px;
  & li {
    width: 50%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: aqua;
      color: red;
    }
  }
}
</style>
