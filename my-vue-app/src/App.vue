<script>
import AppSearchFilm from './components/AppSearchFilm.vue';
import AppFilmVue from './components/AppFilm.vue';
import AppSerieVue from './components/AppSerie.vue';

import { store } from './data/store';
import { serie } from './data/serie';

export default {
  components: {
    AppSearchFilm,
    AppFilmVue,
    AppSerieVue
  },
  data() {
      return {
        store,
        serie
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
      <AppSerieVue v-for="serie in this.serie.serie" :key="serie" :title="serie.name"
      :originaltitle="serie.original_name" :lang="serie.original_language" :rate="serie.vote_average" />
    </div>
  </div>
</template>

<style>
  .flex{
    display: flex;
    flex-wrap: wrap;
  }
</style>
