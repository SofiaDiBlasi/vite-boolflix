<script>
    import AppFilmVue from './AppFilm.vue';
    import AppSerieVue from './AppSerie.vue';

    import { store } from '../data/store';
    import { serie } from '../data/serie';

   export default {
    name: "AppMain",
    components: {
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
        <div class="container flex margin-auto cardContainer">
            <AppFilmVue v-for="film in this.store.film" :key="film" :title="film.title" :copertina="film.poster_path" 
            :originaltitle="film.original_title" :lang="film.original_language" :rate="film.vote_average" />
            <AppSerieVue v-for="serie in this.serie.serie" :key="serie" :title="serie.name" :copertina="serie.poster_path"
            :originaltitle="serie.original_name" :lang="serie.original_language" :rate="serie.vote_average" />
        </div>
</template>

<style>
    .cardContainer{
        height: 90%;
        overflow-y: scroll;
    }
    .flex{
        display: flex;
        flex-wrap: wrap;
  }
</style>