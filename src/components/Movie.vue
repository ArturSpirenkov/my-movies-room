<script setup>
import { useMovieStore } from '../stores/MovieStore';
import { useSearchStore } from '../stores/SearchStore';
import { computed } from 'vue';

const props = defineProps({
  movie: {
    type: Object,
    required: true,
    default: () => {},
  },
  isSearch: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const movieStore = useMovieStore();
const searchStore = useSearchStore();

const valueRating = computed(() => {
  return props.movie.rating !== 'null';
});

const style = {
  topScore: 'green',
  middleScore: 'yellow',
  lowScore: 'red',
};

const filmScoreColor = computed(() => {
  const rating = +props.movie.rating;

  if (!isNaN(rating)) {
    if (rating >= 7) {
      return style.topScore;
    } else if (rating > 5) {
      return style.middleScore;
    } else {
      return style.lowScore;
    }
  }

  return;
});
</script>
<template>
  <div class="movie">
    <div class="movie__info">
      <img
        :src="movie.posterUrlPreview"
        :alt="movie.original_title"
        class="movie__img"
      />
      <div class="movie__list-info">
        <div class="movie__name name">
          <div class="name__main-text">{{ props.movie.nameRu }}</div>
          <div class="name__small-text">
            {{ `${props.movie.nameEn}, ${props.movie.year}` }}
          </div>
        </div>

        <div class="movie__extra-info extra-info">
          <div class="extra-info__genres">
            <span v-for="(genr, index) in props.movie.genres" :key="index">
              {{ genr.genre }}
            </span>
          </div>
          <div class="extra-info__countries">
            <span v-for="(countr, index) in props.movie.countries" :key="index">
              {{ countr.country }}
            </span>
          </div>
          <div class="extra-info__duration">
            {{ `${props.movie.filmLength} мин` }}
          </div>
        </div>

        <div class="movie__rating rating" v-if="valueRating">
          <div class="rating__name">Kinopoisk:</div>
          <span :class="['rating__value', filmScoreColor]">{{
            props.movie.rating
          }}</span>
        </div>
      </div>
    </div>

    <div class="movie-buttons" v-if="!props.isSearch">
      <button
        class="btn movie-buttons-watched"
        @click="movieStore.toggleWatched(props.movie.filmId)"
      >
        <span v-if="!movie.isWatched">Watched</span>
        <span v-else>Unwatched</span>
      </button>
      <button
        class="btn movie-buttons-delete"
        @click="movieStore.delleteMovie(movie.filmId)"
      >
        Delete
      </button>
    </div>

    <div class="movie-buttons" v-else>
      <button class="btn" @click="searchStore.addToUserMovies(props.movie)">
        Add
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.movie {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  &__info {
    display: flex;
    color: var(--primary);
  }

  &__img {
    width: 120px;
    height: 185px;
  }

  &__list-info {
    margin: 5px 12px;
  }

  &__name {
  }

  &__extra-info {
  }

  &__rating {
  }
}
.name {
  margin-bottom: 10px;
  &__main-text {
    font-size: 30px;
    color: var(--text);
  }

  &__small-text {
    font-size: 20px;
  }
}
.extra-info {
  &__genres {
    margin-bottom: 5px;
    & span {
      margin-right: 5px;
    }
  }

  &__countries {
    margin-bottom: 5px;
  }

  &__duration {
    margin-bottom: 5px;
  }
}
.rating {
  display: flex;
  align-items: center;
  &__name {
  }

  &__value {
    margin-left: 5px;
    font-size: 25px;
  }
}

.green {
  color: rgb(14, 165, 14);
}

.yellow {
  color: rgb(255, 255, 0);
}

.red {
  color: red;
}
</style>
