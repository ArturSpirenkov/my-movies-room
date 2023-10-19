import { defineStore } from 'pinia';
import { useMovieStore } from './MovieStore';
import router from '../router';
const url =
  'https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'X-API-KEY': '5806b0a3-df7b-46fc-b13d-5ad3dd423c00',
  },
};

export const useSearchStore = defineStore('searchStore', {
  state: () => {
    return {
      movies: [],
      loader: false,
      filmsCountResult: null,
    };
  },
  actions: {
    async getMovies(search) {
      try {
        this.loader = true;
        let response = await fetch(`${url}${search}`, options);
        const data = await response.json();
        this.filmsCountResult = data.searchFilmsCountResult;
        this.movies = data.films;
        this.loader = false;
      } catch (e) {
        console.log(e);
      }
    },
    addToUserMovies(obj) {
      const movieStore = useMovieStore();
      movieStore.movies.push({ ...obj, isWatched: false });
      movieStore.updateLocalStorage();
      router.push('/home');
    },
  },
});
