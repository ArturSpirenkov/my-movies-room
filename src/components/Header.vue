<script setup>
import router from '../router';
import MainLogo from './icons/MainLogo.vue';
import { useThemeStore } from '../stores';
import Chekbox from './UI/Chekbox.vue';
import { ref, watch, computed } from 'vue';

const goToSearchMovies = () => {
  router.push('/movies');
};
const goToHome = () => {
  router.push('/home');
};

const themeStore = useThemeStore();

const toggleTheme = () => {
  themeStore.toggleTheme();
};

watch(
  () => themeStore.checkedTheme,
  () => {
    toggleTheme();
  }
);
</script>

<template>
  <header class="header">
    <div class="header__content">
      <MainLogo class="header__logo" />
      <!-- <router-link class="header__title">/router-link> -->
      <router-link class="header__title" to="/home">MyMovieRoom</router-link>
      <Chekbox
        label="Theme"
        id="switch"
        name="switch"
        type="switch"
        v-model:checked="themeStore.checkedTheme"
        :style="{ 'margin-left': '10px' }"
      />
    </div>
    <div class="header__tabs tabs">
      <button class="tabs__button" @click="goToHome">My movies</button>
      <button class="tabs__button" @click="goToSearchMovies">Search</button>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  border-bottom: 1px solid var(--static);
  display: flex;
  justify-content: space-between;
  height: 80px;
  background-color: var(--background);
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
  }
  &__logo {
    width: 50px;
    height: 50px;
  }

  &__title {
    padding-left: 20px;
    cursor: pointer;
    font-size: 25px;
  }

  &__tabs {
  }
}
.tabs {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 20px;
  &__button {
    width: 100%;
    white-space: nowrap;
    background-color: transparent;
    padding: 0 1rem;
    border-radius: 6px;
    transition: opacity 0.3s ease;
    cursor: pointer;
    margin: 5px;
    padding: 0.5em 0.7em;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
}
</style>
