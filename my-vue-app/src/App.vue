<script>
import AppSearchFilm from './components/AppSearchFilm.vue';
import AppFilmVue from './components/AppFilm.vue';

import { store } from './data/store';

export default {
  components: {
    AppSearchFilm,
    AppFilmVue
  },
  data() {
      return {
        store
      }
    }
}
</script>

<template>
  <div>
    <AppSearchFilm />
    <div class="flex">
      <AppFilmVue v-for="film in this.store.film" :key="film" :title="film.title" 
    :originaltitle="film.original_title" :lang="film.original_language" :rate="film.vote_average" />
    </div>
  </div>
</template>

<style>
  .flex{
    display: flex;
    flex-wrap: wrap;
  }
</style>
