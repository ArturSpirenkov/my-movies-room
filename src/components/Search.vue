<script setup>
import { useSearchStore } from '../stores';
import Movie from './Movie.vue';
import Loader from './Loader.vue';
import { ref } from 'vue';
import SearchIcon from './icons/SearchIcon.vue';

const searchMovie = ref('');

const searchStore = useSearchStore();
searchStore.getMovies('space');
</script>
<template>
  <form
    class="search-form"
    @submit.prevent="searchStore.getMovies(searchMovie)"
  >
    <input class="search-form__input" type="input" v-model="searchMovie" />
    <button class="search-form__button" type="submit"><SearchIcon /></button>
  </form>

  <Loader v-if="searchStore.loader" />
  <div v-else>
    <Movie
      v-for="movie in searchStore.movies"
      :key="movie.filmId"
      :movie="movie"
      :is-search="true"
      :style="{ 'margin-bottom': '10px' }"
    />
    <div
      v-if="searchStore.filmsCountResult === 0"
      :style="{ display: 'flex', 'justify-content': 'center' }"
    >
      К сожалению, по вашему запросу ничего не найдено...
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-form {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  &__input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
    width: 250px;
    max-width: 400px;
  }

  &__button {
    background-color: var(--primary);
    display: flex;
    color: var(--text);
    border: none;
    border-radius: 5px;
    transition: transform ease 0.2s, box-shadow ease 0.2s;
    cursor: pointer;
    &:hover {
      transform: translate(0, -3px);
      box-shadow: 0 10px 20px -5px var(--primary);
      transition: transform ease 0.2s, box-shadow ease 0.2s;
    }
  }
}
</style>
