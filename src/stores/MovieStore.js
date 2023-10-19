import { defineStore } from 'pinia';
import { Tab } from '../constants';

export const useMovieStore = defineStore('movieStore', {
  state: () => {
    return {
      movies: [],
      activeTab: Tab.Profile,
    };
  },
  getters: {
    watchedMovies(state) {
      return state.movies.filter((e) => e.isWatched);
    },
    numberAllMovies(state) {
      return state.movies.length;
    },
  },
  actions: {
    initStoreFromLocalStorage() {
      console.log('initStoregalocal');
      const moviesInLocalStorage = localStorage.getItem('movies');
      if (moviesInLocalStorage) {
        this.movies = JSON.parse(moviesInLocalStorage);
      }
    },
    updateLocalStorage() {
      localStorage.setItem('movies', JSON.stringify(this.movies));
    },
    setActiveTab(tabId) {
      this.activeTab = tabId;
    },
    toggleWatched(id) {
      const idx = this.movies.findIndex((el) => el.filmId === id);
      this.movies[idx].isWatched = !this.movies[idx].isWatched;
      this.updateLocalStorage();
    },
    delleteMovie(id) {
      this.movies = this.movies.filter((el) => {
        return el.filmId !== id;
      });
      this.updateLocalStorage();
    },
  },
});
