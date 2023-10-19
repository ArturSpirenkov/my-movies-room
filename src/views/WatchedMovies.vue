<script setup>
import Movie from '../components/Movie.vue';
import Container from '../components/Container.vue';
import Dashboard from '../components/Dashboard.vue';
import { useMovieStore } from '@/stores';

const movieStore = useMovieStore();
</script>

<template>
  <Page>
    <Container>
      <div class="movies-list">
        <h1>Wa</h1>
        <Dashboard />
        <Movie
          v-for="movie of movieStore.watchedMovies"
          :key="movie.filmId"
          :movie="movie"
          class="movies-list__item"
        />
      </div>
    </Container>
  </Page>
</template>

<style lang="scss" scoped>
.movies-list {
  &__item {
    margin-bottom: 10px;
  }
}
</style>
