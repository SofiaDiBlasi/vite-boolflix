<script>
import AppSearchFilm from './components/AppSearchFilm.vue';

import { store } from './data/store';

export default {
  components: {
    AppSearchFilm
  },
  data() {
      return {
        store
      }
    }
}
</script>

<template>
  <AppSearchFilm />
</template>

<style>

</style>
