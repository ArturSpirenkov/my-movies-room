import { createRouter, createWebHistory } from 'vue-router';
import { useMovieStore } from '../stores';

const Home = () => import('@/views/Home.vue');
const SearchMovies = () => import('@/views/SearchMovies.vue');
const WatchedMovies = () => import('@/views/WatchedMovies.vue');
const Signup = () => import('@/views/Signup.vue');
const Signin = () => import('@/views/Signin.vue');

const history = createWebHistory();

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/movies',
    name: 'movies',
    component: SearchMovies,
  },
  {
    path: '/movies/watched',
    name: 'watched',
    component: WatchedMovies,
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin,
  },
];

const router = createRouter({
  history,
  routes,
});

router.beforeEach((to, from, next) => {
  const movieStore = useMovieStore();
  movieStore.initStoreFromLocalStorage();
  next();
});

export default router;
